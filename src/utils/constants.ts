const isActiveLocalHost = true;

export let HOST_NAME: any = "http://localhost:8001";

//@ts-ignore
if (isActiveLocalHost === false) {
  HOST_NAME = "https://crud-app-backend-seven.vercel.app";
}

// container min height
export const SECTION_MIN_HEIGHT = `calc(100vh - 76px)`;

export const selectedRangeStartEndDate = (range: string) => {
  switch (range?.toUpperCase()) {
    case "THIS MONTH":
      return {
        startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        endDate: new Date(),
      };
    case "LAST MONTH":
      return {
        startDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 1,
          1
        ),
        endDate: new Date(new Date().getFullYear(), new Date().getMonth(), 0),
      };
    case "LAST 3 MONTH":
      return {
        startDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 2,
          1
        ),
        endDate: new Date(new Date().getFullYear(), new Date().getMonth(), 0),
      };
    case "LAST 6 MONTH":
      return {
        startDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 5,
          1
        ),
        endDate: new Date(new Date().getFullYear(), new Date().getMonth(), 0),
      };
    case "LAST 1 YEAR":
      return {
        startDate: new Date(
          new Date().getFullYear() - 1,
          new Date().getMonth() + 1,
          1
        ),
        endDate: new Date(new Date().getFullYear(), new Date().getMonth(), 0),
      };
    case "THIS WEEK": {
      const today = new Date();
      const startOfWeek = today.getDate() - today.getDay() + 1; // Start of current week (Monday)
      const endOfWeek = startOfWeek + 6; // End of current week (Sunday)
      return {
        startDate: new Date(today.setDate(startOfWeek)),
        endDate: new Date(today.setDate(endOfWeek)),
      };
    }
    case "LAST WEEK": {
      const today = new Date();
      const lastWeekStart = today.getDate() - today.getDay() - 7; // Start of last week (Sunday)
      const lastWeekEnd = lastWeekStart + 6; // End of last week (Saturday)
      return {
        startDate: new Date(today.setDate(lastWeekStart)),
        endDate: new Date(today.setDate(lastWeekEnd)),
      };
    }
    case "CUSTOM DATE": {
      const today = new Date();
      const lastWeekStart = today.getDate() - today.getDay() - 7; // Start of last week (Sunday)
      const lastWeekEnd = lastWeekStart + 6; // End of last week (Saturday)
      return {
        startDate: new Date(today.setDate(lastWeekStart)),
        endDate: new Date(today.setDate(lastWeekEnd)),
      };
    }
    case "QUARTER TO DATE": {
      const today = new Date();
      const quarterStartMonth = Math.floor(today.getMonth() / 3) * 3; // Start month of the quarter
      const quarterStartDate = new Date(
        today.getFullYear(),
        quarterStartMonth,
        1
      ); // Start date of the quarter
      return { startDate: quarterStartDate, endDate: today };
    }
    case "YEAR TO DATE": {
      const today = new Date();
      const yearStartDate = new Date(today.getFullYear(), 0, 1); // Start date of the current year (January 1st)
      return { startDate: yearStartDate, endDate: today };
    }
    default:
      break;
  }
};

export const handleGoogleSignIn = () => {
  window.location.href = `${HOST_NAME}/auth/google`;
};
