import axios from "axios";
import Cookies from "js-cookie";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function focusInput(id: string) {
  const inputElement: any = document?.getElementById(id);
  inputElement?.focus(); // Set focus to the input field
}

function validate_if_not_empty(
  value: string,
  err_field_id: string,
  setActiveFormTab?: any,
  errorMessage?: string
) {
  if (
    value === "" ||
    value === undefined ||
    value === null ||
    value === "NaN:NaN" ||
    (Array.isArray(value) && value.length === 0)
  ) {
    err_field_id !== undefined &&
      scrollToView(err_field_id, errorMessage || "", setActiveFormTab);

    return false;
  } else {
    if (err_field_id.toLowerCase()?.includes("email")) {
      if (isValidEmail(value)) {
        err_field_id !== undefined &&
          setTimeout(() => {
            document.getElementById("Hello");
          }, 300);
        return true;
      } else {
        err_field_id !== undefined &&
          scrollToView(err_field_id, "Invalid email!", setActiveFormTab);
        return false;
      }
    } else {
      err_field_id !== undefined &&
        setTimeout(() => {
          if (document.getElementById(`${err_field_id}`)) {
            document.getElementById(`${err_field_id}`)!.innerHTML = "";
          }
        }, 300);
      return true;
    }
  }
}

function validate_if_password_strong(password: string): Array<string> {
  const notValidConditions: Array<string> = [];
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password);

  if (!hasMinLength) {
    notValidConditions.push("Password length mush be atleast 8 characters");
  }
  if (!hasUppercase) {
    notValidConditions.push("Password must have atleast one uppercase letter");
  }
  if (!hasLowercase) {
    notValidConditions.push("Password must have atleast one lowercase letter");
  }
  if (!hasNumber) {
    notValidConditions.push("Password must have atleast one number");
  }
  if (!hasSpecialChar) {
    notValidConditions.push("Password must have atleast one special character");
  }
  return notValidConditions;
}

function validate_if_not_empty_object(value: any, err_field_id: string) {
  const hasTrueValue = value.some(
    (item: any) => Object.values(item)[0] === true
  );

  if (hasTrueValue) {
    err_field_id !== undefined &&
      (document.getElementById(`${err_field_id}`)!.innerHTML = "");
    return true;
  } else {
    err_field_id !== undefined && scrollToView(err_field_id);
    return false;
  }
}

function validate_if_not_empty_array(value: any, err_field_id: string) {
  const hasTrueValue = value.length > 0;

  if (hasTrueValue) {
    err_field_id !== undefined &&
      (document.getElementById(`${err_field_id}`)!.innerHTML = "");
    return true;
  } else {
    err_field_id !== undefined && scrollToView(err_field_id);
    return false;
  }
}

// TO CHECK IF ALL VALUES IN AN OBJECT ARE EMPTY
export const areAllValuesEmpty = (obj: any, excludeKeys: any = []) => {
  return Object.entries(obj).every(([key, value]) => {
    if (excludeKeys.includes(key)) {
      return true;
    }
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    return value === "";
  });
};

function scrollToView(
  err_field_id: string,
  errorString?: string,
  setActiveFormTab?: any
) {
  setActiveFormTab && setActiveFormTab();
  setTimeout(() => {
    document.getElementById(`${err_field_id}`)!.innerHTML = errorString
      ? errorString
      : "This field is required!";
    document.getElementById(`${err_field_id}`)!.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 300);
}
// function to convert first letter of a string to uppercase
function capitalizeFirstLetter(str: string) {
  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
}

export function capitalizeFirst(str: string) {
  if (str.length === 0) {
    return str; // Return the original string if it's empty
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function getDateFormatted(date: any) {
  // Ex-> 3 March 2025

  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = dateObj.toLocaleDateString("en-GB", options);
  return formattedDate;
}

export function getFormattedDate(date: any) {
  return new Date(date).toLocaleDateString("en-US");
}

export function getFormattedDateWithTimeStamp(date: any) {
  const d = new Date(date);
  const dateString = d.toLocaleDateString("en-US");
  const timeString = d.toLocaleTimeString("en-US");
  return `${dateString} ${timeString}`;
}

export function getFormattedDateUTC(inputDate: any) {
  const date = new Date(inputDate);

  // Extract the components of the date
  const month = date.getUTCMonth() + 1; // getUTCMonth() returns month from 0-11, so add 1
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  // Format the date as MM/DD/YYYY
  return `${month}/${day}/${year}`;
}

export function onlyUnique(value: any, index: any, array: any) {
  return array.indexOf(value) === index;
}

export const convertToDateISOString = (dateString: string): string => {
  if (dateString === "") {
    return "";
  }
  const date = new Date(dateString);
  // Set the time zone offset to zero
  // date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  const isoString = date.toISOString();
  return isoString;
};

export const convertToZeroTimeDateISOString = (dateString: any): any => {
  if (dateString === "") {
    return "";
  }
  const date = new Date(dateString);
  // date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  date.setHours(0, 0, 0, 0); // Set time to 00:00:00.000Z
  const isoString = date.toISOString();
  return isoString;
};

export const convertToZeroTimeDateWithoutMilliSecISOString = (
  dateString: any
): any => {
  const date = new Date(dateString);
  date.setHours(0, 0, 0, 0); // Set time to 00:00:00.000Z
  const isoString = date.toISOString().slice(0, -5); // Remove milliseconds and 'Z'
  return isoString;
};

export const removeDateStringFromTimeString = (text: string) => {
  const dateObject = new Date(text);
  // Format the time with meridiem in uppercase
  const options: any = { hour: "2-digit", minute: "2-digit", hour12: true };
  const timeString = dateObject.toLocaleTimeString([], options)?.toUpperCase();

  if (timeString !== "INVALID DATE") {
    return timeString;
  } else {
    return "-";
  }
};

// Function to convert ISO 8601 timestamp to specified time format
export function convertISOToTime(isoTimestamp: any) {
  // Parse the ISO 8601 timestamp to create a Date object
  const date = new Date(isoTimestamp);

  // Get hours, minutes,
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}

// Reusable function to format date
export function monthStringFormatDate(timestamp: any) {
  const dateObject = new Date(timestamp);
  return `${getMonthName(
    dateObject.getMonth()
  )} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
}

export const getDifferenceInHours = (startDate: string, endDate: string) => {
  const startTime: number = new Date(startDate).getTime();
  const endTime: number = new Date(endDate).getTime();
  const timeDifferenceInMilliseconds = endTime - startTime;
  const timeDifferenceInHours = timeDifferenceInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours

  // Extract hours and minutes
  const hours = Math.floor(timeDifferenceInHours);
  const minutes = Math.floor((timeDifferenceInHours - hours) * 60);

  // Format the result
  const formattedDifference = `${hours} hours ${minutes} min`;

  return formattedDifference;
};

// Helper function to get the month name
function getMonthName(month: any) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[month];
}

// Function to calculate file size in GB
export const getFileSize = (sizeInBytes: number) => {
  if (sizeInBytes >= 1024 * 1024 * 1024 * 1024) {
    const fileSize = (sizeInBytes * (1024 * 1024 * 1024 * 1024)).toFixed(2);
    return `${fileSize} GB`;
  } else if (sizeInBytes >= 1024 * 1024 * 1024) {
    const fileSize = (sizeInBytes * (1024 * 1024 * 1024)).toFixed(2);
    return `${fileSize} MB`;
  } else if (sizeInBytes >= 1024 * 1024) {
    const fileSize = (sizeInBytes * (1024 * 1024)).toFixed(2);
    return `${fileSize} KB`;
  } else if (sizeInBytes >= 1024) {
    const fileSize = (sizeInBytes * 1024).toFixed(2);
    return `${fileSize} bytes`;
  } else {
    const fileSize = sizeInBytes.toFixed(2);
    return `${fileSize} bits`;
  }
};

export const weekDayShortToFullConvertor = (day: string) => {
  switch (day) {
    case "MON": {
      return "Monday";
    }
    case "TUE": {
      return "Tuesday";
    }
    case "WED": {
      return "Wednesday";
    }
    case "THU": {
      return "Thursday";
    }
    case "FRI": {
      return "Friday";
    }
    case "SAT": {
      return "Saturday";
    }
    case "SUN": {
      return "Sunday";
    }
    default:
      break;
  }
};

export const getWeekDayIndex = (day: string) => {
  switch (day) {
    //@ts-ignore
    case "MON" || "MONDAY": {
      return "1";
    }
    //@ts-ignore

    case "TUE" || "TUESDAY": {
      return "2";
    }
    //@ts-ignore

    case "WED" || "WEDNESDAY": {
      return "3";
    }
    //@ts-ignore

    case "THU" || "THURSDAY": {
      return "4";
    }
    //@ts-ignore

    case "FRI" || "FRIDAY": {
      return "5";
    }
    //@ts-ignore

    case "SAT" || "SATURDAY": {
      return "6";
    }
    //@ts-ignore

    case "SUN" || "SUNDAY": {
      return "7";
    }
    default:
      break;
  }
};

export const getDayOfWeek = (isoDateString: string): string => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(isoDateString);
  const dayIndex = date.getUTCDay();
  return daysOfWeek[dayIndex];
};

export const randomNumGenerator = (length: number) => {
  return Math.floor(
    Math.pow(10, length - 1) +
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
  );
};

export const getFirstLetters = (inputString: string) => {
  const words = inputString?.split(" ");
  const firstLetters = words?.map((word: string) =>
    word.charAt(0).toUpperCase()
  );
  return firstLetters.join("");
};

export const getCurrentMonth = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  return monthNames[currentMonth - 1];
};

export const isValidUrl = (url: string) => {
  // Regular expression for a valid URL
  const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
  return urlPattern.test(url);
};

export {
  validate_if_not_empty,
  scrollToView,
  validate_if_not_empty_object,
  validate_if_not_empty_array,
  capitalizeFirstLetter,
  isValidEmail,
  validate_if_password_strong,
  focusInput,
};

export const downloadPDF = async (pdfURL: string) => {
  try {
    const response = await axios.get(pdfURL, {
      responseType: "arraybuffer",
    });

    const blob = new Blob([response.data], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    window.open(url, "_blank");
  } catch (error) {
    console.error("Error downloading PDF:", error);
  }
};

export const getDatesDifferenceInDays = (
  startDate: string,
  endDate: string
) => {
  //Here: pass formated start and end date (In mm/dd/yyyy format )
  const updatedStartDate: any = new Date(startDate);
  const updatedEndDate: any = new Date(endDate);

  // Calculate the difference in time
  const differenceInTime = updatedEndDate - updatedStartDate;

  // Convert the time difference to days
  const differenceInDays: any = differenceInTime / (1000 * 3600 * 24);

  return differenceInDays;
};

export const openSvgInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank");
  if (newWindow) {
    newWindow.opener = null;
  }
};

export const isImageURL = (image: any) => {
  if (typeof image === "string") {
    return image.startsWith("http://") || image.startsWith("https://");
  } else if (image instanceof File) {
    return false;
  }
  return undefined;
};

export const openFileInNewTab = (url: string) => {
  window.open(url, "_blank");
};

export function downloadURI(uri: any, name: string) {
  fetch(uri)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.setAttribute("download", name); // Set custom filename here
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(url);
    });
  // eslint-disable-next-line no-delete-var
}

export const getFileType = (extension: string) => {
  if (["png", "jpeg", "jpg", "gif"].includes(extension)) {
    return "image";
  } else if (["pdf"].includes(extension)) {
    return "pdf";
  } else if (["svg"].includes(extension)) {
    return "svg";
  } else if (["xls", "xlsx"].includes(extension)) {
    return "excel";
  } else if (["doc", "docx"].includes(extension)) {
    return "word";
  } else if (["xml"].includes(extension)) {
    return "xml";
  } else {
    return "unknown";
  }
};

export const openInNewTab = (url: any, name: any) => {
  const fileType = getFileType(name?.split(".")?.pop());
  if (fileType === "image") {
    openImageInNewTab(url);
    // } else if (fileType === "pdf") {
    //   // downloadPDF(url);
    //   // openPdfInNewTab(url);
    //   downloadURI(url, name);
    // } else if (fileType === "svg") {
    //   // openSvgInNewTab(url);
    //   downloadURI(url, name);
    // } else if (fileType === "excel") {
    //   // openFileInNewTab(url);
    //   downloadURI(url, name);
    // } else if (fileType === "word") {
    //   // openFileInNewTab(url);
    //   downloadURI(url, name);
    // } else if (fileType === "xml") {
    //   // openFileInNewTab(url);
    //   downloadURI(url, name);
  } else {
    // Download unsupported file type
    downloadURI(url, name);
  }
};

export const getFormattedDateFull = (
  datePassed: string
): string | undefined => {
  if (datePassed) {
    const isoTimestamp = datePassed;
    const date = new Date(isoTimestamp);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  } else {
    return "";
  }
};

export function capitalizeWords(inputString: string) {
  return inputString.replace(/\b\w/g, (char) => char.toUpperCase());
}

export const limitStringToWords = (
  inputString: any,
  wordLimit: any,
  ellipsis = "..."
) => {
  const words = inputString.split(" ");
  const limitedWords = words.slice(0, wordLimit);
  const limitedString = limitedWords.join(" ");

  return words.length > wordLimit ? limitedString + ellipsis : limitedString;
};

export function addSpaces(str: string, chunkSize: any) {
  // Use regex to add space after every chunkSize characters
  let spacedString = str?.replace(new RegExp(`.{1,${chunkSize}}`, "g"), "$& ");

  // Remove trailing space
  spacedString = spacedString?.trim();

  return spacedString;
}

export function addEllipsis(str: string, maxLength: number) {
  // Add ellipsis if the string length is greater than maxLength
  if (str.length > maxLength) {
    str = str.substring(0, maxLength - 3) + "...";
  }

  return str;
}

export function formatDateWithWeek(date: any) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
}

export const openImageInNewTab = (url: string) => {
  const imageWindow = window.open();
  imageWindow?.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Image</title>
      <style>
        body {
          margin: 0;
          background-color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        img {
          max-width: 500px;
          max-height: 500px;
        }
      </style>
    </head>
    <body>
      <img src="${url}" alt="Image" />
    </body>
    </html>
  `);
};

export function formatFileSize(gib: any) {
  // 1 GiB = 1024 MiB
  // 1 MiB = 1024 KiB
  // 1 KiB = 1024 Bytes
  const bytesInGiB = 1024 * 1024 * 1024;
  const bytesInKiB = 1024;

  const bytes = gib * bytesInGiB;
  const kilobytes = bytes / bytesInKiB;
  const roundedKB = Math.round(kilobytes * 100) / 100; // Round to 2 decimal places

  if (roundedKB < 1024) {
    return `${roundedKB} KB`;
  } else {
    const megabytes = roundedKB / 1024;
    const roundedMB = Math.round(megabytes * 100) / 100;
    if (megabytes > 1024) {
      // Round to 2 decimal places
      return `${roundedMB / 1000} GB`;
    } else {
      return `${roundedMB} MB`;
    }
  }
}

export function removeDuplicates(array: any, key: any) {
  return array.filter(
    (item: any, index: any, self: any) =>
      index === self.findIndex((t: any) => t[key] === item[key])
  );
}

export function formatElapsedTime(time: number) {
  const seconds = Math.floor(time / 1000) % 60;
  const minutes = Math.floor(time / (1000 * 60)) % 60;
  const hours = Math.floor(time / (1000 * 60 * 60));

  return `${hours.toString().padStart(2, "0")} : ${minutes
    .toString()
    .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
}

export function calculateHourDifference(
  startTimeString: any,
  endTimeString: any,
  subtractHours = 0
) {
  // Parse the ISO datetime strings into Date objects
  const startTime: any = new Date(startTimeString);
  const endTime: any = new Date(endTimeString);

  // Check if the parsed dates are valid
  if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
    return "-";
  }

  // Add one day to endTime if it is less than startTime
  if (endTime < startTime) {
    endTime.setDate(endTime.getDate() + 1);
  }

  // Calculate the difference in milliseconds
  const timeDifferenceMs = endTime - startTime;

  // Convert milliseconds to hours
  let timeDifferenceHours = timeDifferenceMs / (1000 * 60 * 60);

  // Subtract the specified number of hours
  timeDifferenceHours -= subtractHours;

  // Extract whole hours
  const hours = Math.floor(timeDifferenceHours);

  // Calculate remaining minutes
  const minutes = Math.round((timeDifferenceHours - hours) * 60);

  // Format into HH:MM string
  const formattedTimeDifference = `${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

  return formattedTimeDifference;
}

export function getTimeFromISOString(isoString: any) {
  const date = new Date(isoString);
  const hours = date.getUTCHours();
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  let time = "";

  // Convert hours to 12-hour format
  let formattedHours = hours % 12;
  formattedHours = formattedHours === 0 ? 12 : formattedHours;

  time = `${formattedHours}:${minutes}`;

  // Determine AM or PM
  const period = hours < 12 ? "AM" : "PM";

  if (time !== "NaN:NaN") {
    return `${time} ${period}`;
  } else {
    return "-";
  }
}

export const getTimeDifferenceString = (
  dateISOString: string,
  type?: string
) => {
  if (!type) type = "short"; // Default to "short"
  const inputDate = new Date(dateISOString);
  const currentDate = new Date();
  const timeDifferenceInMillis = currentDate.getTime() - inputDate.getTime();
  const hoursDifference = timeDifferenceInMillis / (1000 * 60 * 60);

  if (hoursDifference >= 24) {
    const days = Math.floor(hoursDifference / 24);
    return days + (type === "long" ? (days === 1 ? " day" : " days") : "d");
  } else if (hoursDifference >= 1) {
    const hours = Math.floor(hoursDifference);
    return hours + (type === "long" ? (hours === 1 ? " hour" : " hours") : "h");
  } else {
    const minutes = Math.floor(hoursDifference * 60);
    if (minutes > 0 || minutes === 0) {
      if (minutes === 0) {
        return "0 minute";
      }
      return (
        minutes +
        " " +
        (type === "long" ? (minutes === 1 ? " minute" : " minutes") : "m")
      );
    }
  }
};

export const formatTimeType = (type: string) => {
  return type === "TIMEIN" ? "Time In" : "Time Out";
};

export const formatPayType = (type: string) => {
  return type === "PAID" ? "Paid" : "Unpaid";
};

export const overtimeType = (type: string) => {
  return type === "PRE_SHIFT_OVERTIME"
    ? "Pre Shift Overtime"
    : "Post Shift Overtime";
};

//Convert Date time to UTC date string
export function convertUTCToLocal(utcDateStr: any) {
  const utcDate: any = new Date(utcDateStr);

  if (isNaN(utcDate)) {
    return "Invalid Date";
  }

  const localDate = new Date(
    utcDate.getTime() - utcDate.getTimezoneOffset() * 60000
  );

  return localDate.toISOString();
}

export function convertLocalToUTC(localDateStr: any) {
  const localDate: any = new Date(localDateStr);

  if (isNaN(localDate)) {
    return "Invalid Date";
  }

  const utcDate = new Date(
    localDate.getTime() - localDate.getTimezoneOffset() * 60000
  );

  return utcDate.toISOString();
}

//These next two functions are used to convert shift code time to UTC and local format
export function convertToUTCHoursAndMinutes(timeStr: any) {
  const today = new Date();
  const [hours, minutes] = timeStr.split(":").map(Number);
  today.setHours(hours, minutes, 0, 0);
  const utcDate = new Date(today.toISOString());
  return utcDate.toISOString().substring(11, 16);
}

export function convertToLocalHoursAndMinutes(utcTimeStr: any) {
  const today = new Date();
  const [hours, minutes] = utcTimeStr.split(":").map(Number);
  today.setUTCHours(hours, minutes, 0, 0);
  const localDate = new Date(today);
  return localDate.toTimeString().substring(0, 5);
}

export function formatToTwoDecimals(number: any) {
  if (number !== null && number !== undefined && number !== "") {
    if (Number.isInteger(number)) {
      return number.toFixed(2); // Always format to two decimal places
    } else {
      const result = parseFloat(number).toFixed(2);
      if (result === "0.00") {
        return "0:00";
      }
      return result;
    }
  } else {
    return "0:00";
  }
}

// Function to convert a local date to the start of the day in UTC time format string
export function toStartOfDayUTCString(dateStr: any) {
  // Parse the date string into a Date object
  const localDate = new Date(dateStr);

  // Get the time offset in milliseconds
  const offset = localDate.getTimezoneOffset() * 60000;

  // Convert the local date to UTC
  const utcDate = new Date(localDate.getTime() - offset);

  // Reset the time to the start of the day (00:00:00) in UTC
  utcDate.setUTCHours(0, 0, 0, 0);

  return utcDate;
}
// Function to convert a local date to the en of the day in UTC time format string
export function toEndOfDayUTCString(dateStr: any) {
  // Parse the date string into a Date object
  const localDate = new Date(dateStr);

  // Get the time offset in milliseconds
  const offset = localDate.getTimezoneOffset() * 60000;

  // Convert the local date to UTC
  const utcDate = new Date(localDate.getTime() - offset);

  // Reset the time to the start of the day (00:00:00) in UTC
  utcDate.setUTCHours(23, 59, 59, 59);

  return utcDate;
}

export function calculateDayAndNightHours(
  startTimeString: any,
  endTimeString: any
) {
  const nightStart = 22 * 60; // 22:00 in minutes
  const nightEnd = 6 * 60; // 06:00 in minutes

  // Convert time strings to minutes
  function timeToMinutes(timeString: any) {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  }

  const startMinutes = timeToMinutes(startTimeString);
  let endMinutes = timeToMinutes(endTimeString);

  // Handle cases where end time is past midnight
  if (endMinutes <= startMinutes) {
    endMinutes += 24 * 60;
  }

  let dayMinutes = 0;
  let nightMinutes = 0;

  for (let current = startMinutes; current < endMinutes; current++) {
    const currentTime = current % (24 * 60); // Current time in a 24-hour format

    if (
      (currentTime >= nightStart && currentTime < 24 * 60) ||
      (currentTime >= 0 && currentTime < nightEnd)
    ) {
      nightMinutes++;
    } else {
      dayMinutes++;
    }
  }

  return {
    dayHours: dayMinutes / 60,
    nightHours: nightMinutes / 60,
  };
}

export function calculateDayAndNightHoursForAttendance(
  startTimeString: any,
  endTimeString: any
) {
  const date = new Date(startTimeString);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const startTime = `${hours}:${minutes}`;

  const date2 = new Date(endTimeString);

  const hours2 = date2.getHours().toString().padStart(2, "0");
  const minutes2 = date2.getMinutes().toString().padStart(2, "0");

  const endTime = `${hours2}:${minutes2}`;

  const nightStart = 22 * 60; // 22:00 in minutes
  const nightEnd = 6 * 60; // 06:00 in minutes

  // Convert time strings to minutes
  function timeToMinutes(timeString: any) {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  }

  const startMinutes = timeToMinutes(startTime);
  let endMinutes = timeToMinutes(endTime);

  // Handle cases where end time is past midnight
  if (endMinutes <= startMinutes) {
    endMinutes += 24 * 60;
  }

  let dayMinutes = 0;
  let nightMinutes = 0;

  for (let current = startMinutes; current < endMinutes; current++) {
    const currentTime = current % (24 * 60); // Current time in a 24-hour format

    if (
      (currentTime >= nightStart && currentTime < 24 * 60) ||
      (currentTime >= 0 && currentTime < nightEnd)
    ) {
      nightMinutes++;
    } else {
      dayMinutes++;
    }
  }

  let nightHours = nightMinutes / 60;

  if (nightHours >= 5) {
    nightHours -= 1;
  }

  //Also calculate for leave or business request what to do when full day

  return parseFloat(nightHours.toFixed(2));
}

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const formatUTCToLocalString = (wsStartTime: any, wsEndTime: any) => {
  const startDate = new Date(wsStartTime);
  const endDate = new Date(wsEndTime);

  const startDay = daysOfWeek[startDate.getDay()];
  const startMonth = monthsOfYear[startDate.getMonth()];
  const startDateNum = startDate.getDate();
  const startYear = startDate.getFullYear();

  const startHours = startDate.getHours();
  const endHours = endDate.getHours();
  const startPeriod = startHours >= 12 ? "PM" : "AM";
  const endPeriod = endHours >= 12 ? "PM" : "AM";

  const formattedStartHours = startHours % 12 === 0 ? 12 : startHours % 12;
  const formattedEndHours = endHours % 12 === 0 ? 12 : endHours % 12;

  return `${startDay}, ${startMonth} ${startDateNum}, ${startYear}, ${formattedStartHours}${startPeriod}-${formattedEndHours}${endPeriod}`;
};

export function convertUtcToLocalHoursAndMinutes(utcTimeString: any) {
  // Parse the UTC time string to a Date object
  const utcDate = new Date(utcTimeString);

  // Convert to local time and extract hours and minutes
  const localTimeString = utcDate.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Change to true if you want 12-hour format
    // timeZoneName: "short",
  });

  // Return the formatted local time
  return localTimeString;
}
export function toUtcStartOfDayWithLocalOffset(dateString: any) {
  const date = new Date(dateString);

  // Create a new date object set to the start of the day in UTC
  const utcStartOfDay = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );

  // Get the local time offset in milliseconds
  const localOffset = date.getTimezoneOffset() * 60 * 1000;

  // Add the local time offset to the UTC start of the day
  const localStartOfDay = new Date(utcStartOfDay.getTime() + localOffset);

  return localStartOfDay.toISOString();
}

export function toUtcEndOfDayWithLocalOffset(dateString: any) {
  // Parse the input date string
  const date = new Date(dateString);

  // Create a new date object set to the end of the day in UTC
  const utcEndOfDay = new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      23,
      59,
      59,
      999
    )
  );

  // Get the local time offset in milliseconds
  const localOffset = date.getTimezoneOffset() * 60 * 1000;

  // Add the local time offset to the UTC end of the day
  const localEndOfDay = new Date(utcEndOfDay.getTime() + localOffset);

  return localEndOfDay.toISOString();
}

export function convertToStartOfDayUTC(dateString: any) {
  // Create a Date object from the provided date string
  const date: any = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date)) {
    throw new Error("Invalid date format");
  }

  // Get the current timezone offset in minutes
  const offsetMinutes = date.getTimezoneOffset();

  // Set the time to the start of the day in the local timezone
  date.setHours(0, 0, 0, 0);

  // Convert the time to UTC by adding the timezone offset
  const utcDate = new Date(date.getTime() - offsetMinutes * 60 * 1000);

  return utcDate.toISOString();
}

export function convertToEndOfDayUTC(dateString: any) {
  // Create a Date object from the provided date string
  const date: any = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date)) {
    throw new Error("Invalid date format");
  }

  // Get the current timezone offset in minutes
  const offsetMinutes = date.getTimezoneOffset();

  // Set the time to the end of the day in the local timezone (23:59:59.999)
  date.setHours(23, 59, 59, 999);

  // Convert the time to UTC by adding the timezone offset
  const utcDate = new Date(date.getTime() - offsetMinutes * 60 * 1000);

  return utcDate.toISOString();
}

export const convertDateTimeInputResponsetoISODate = (dateObject: any) => {
  // Create a Date object using the year, month, day, hour, minute, second, and millisecond
  const date = new Date(
    dateObject?.$y,
    dateObject?.$M,
    dateObject?.$D,
    dateObject?.$H,
    dateObject?.$m,
    dateObject?.$s,
    dateObject?.$ms
  );

  // Convert the Date object to an ISO string
  const isoDateString = date?.toISOString();
  return isoDateString;
};

export const convertISOToObject = (isoString: any) => {
  const date = new Date(isoString);
  return {
    $L: "en", // Assuming the locale is always 'en'
    $u: undefined, // Undefined as per the original object
    $d: date,
    $y: date.getUTCFullYear(),
    $M: date.getUTCMonth(), // Note: 0-indexed, so July will be 6
    $D: date.getUTCDate(),
    $W: date.getUTCDay(), // Day of the week (0-6)
    $H: date.getUTCHours(),
    $m: date.getUTCMinutes(),
    $s: date.getUTCSeconds(),
    $ms: date.getUTCMilliseconds(),
    $x: {},
    $isDayjsObject: true, // Assuming this is always true
  };
};

export const getUserIdFromCookies = () => {
  let userId: string = "";
  userId = Cookies.get("userId");

  return userId;
};

export const isBrowserSafari = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /safari/.test(userAgent) && !/chrome/.test(userAgent);
};
