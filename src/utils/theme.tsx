import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { colors } from "./colors";
import InterTightRegular from "../assets/fonts/InterTight-Regular.ttf";
import InterTightMedium from "../assets/fonts/InterTight-Medium.ttf";
import InterTightSemiBold from "../assets/fonts/InterTight-SemiBold.ttf";
import InterTightBold from "../assets/fonts/InterTight-Bold.ttf";
import InterTightExtraBold from "../assets/fonts/InterTight-ExtraBold.ttf";

const baseTheme = createTheme({
  typography: {
    fontFamily: "Inter Tight",
    subtitle1: {
      fontSize: "18px !important",
      fontWeight: "500",
      height: "auto",
      lineHeight: 1.5,
      "@media (max-width:768px)": {
        // fontSize: "16px !important",
        // fontWeight: "400",
      },
    },
    body1: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: 1.2,
      height: "auto",
      "@media (max-width:768px)": {
        // fontSize: "12px !important", // Adjusted font size for body1 on smaller screens
      },
    },
    body2: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: 1.2,
      height: "auto",
    },
    caption: {
      fontSize: "12px",
      fontWeight: "300",
      lineHeight: 1.2,
      height: "auto",
    },
    h1: {
      fontSize: "44px",
      fontWeight: "700",
      lineHeight: 1.2,
      height: "auto",
      "@media (max-width:1099px)": {
        fontSize: "36px !important", // Adjusted font size for body1 on smaller screens
      },
      "@media (max-width:768px)": {
        fontSize: "28px !important", // Adjusted font size for body1 on smaller screens
      },
    },
    h2: {
      fontSize: "40px",
      fontWeight: "700",
      lineHeight: 1.2,
      height: "auto",
    },
    h3: {
      fontSize: "32px",
      fontWeight: "600",
      lineHeight: 1.2,
      height: "auto",
      "@media (max-width:600px)": {
        fontSize: "24px", // Adjusted font size for body1 on smaller screens
      },
    },
    h4: {
      fontSize: "24px !important",
      fontWeight: "500",
      lineHeight: 1.2,
      height: "auto",
      "@media (max-width:600px)": {
        fontSize: "18px !important", // Adjusted font size for body1 on smaller screens
      },
    },
    h5: {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: 1.2,
      height: "auto",
    },
  },
});

// Light theme
export const lightTheme = responsiveFontSizes(
  createTheme({
    ...baseTheme,
    palette: {
      mode: "light",
      primary: {
        main: "#CCFF00",
      },
      secondary: {
        main: "#50D581",
      },
      background: {
        default: "#0C0C0C",
      },
      text: {
        primary: "#000000",
        secondary: "#e1dede",
      },
      grey: {
        100: colors.greyBlack[10],
        200: colors.greyBlack[20],
        300: colors.greyBlack[30],
        400: colors.greyBlack[40],
        500: colors.greyBlack[50],
        600: colors.greyBlack[60],
        700: colors.greyBlack[80],
      },
    },
    typography: {
      ...baseTheme.typography,
      fontFamily: "Inter Tight",
      fontSize: 16, // Default font size for the light theme
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
         @font-face {
          font-family: 'Inter Tight';
          src: url(${InterTightRegular}) format('truetype');
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: 'Inter Tight';
          src: url(${InterTightMedium}) format('truetype');
          font-weight: 500;
          font-style: normal;
        }

        @font-face {
          font-family: 'Inter Tight';
          src: url(${InterTightSemiBold}) format('truetype');
          font-weight: 600;
          font-style: normal;
        }

        @font-face {
          font-family: 'Inter Tight';
          src: url(${InterTightBold}) format('truetype');
          font-weight: 700;
          font-style: normal;
        }

         @font-face {
          font-family: 'Inter Tight';
          src: url(${InterTightExtraBold}) format('truetype');
          font-weight: 800;
          font-style: normal;
        }
      `,
      },
    },
  })
);

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#CCFF00",
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.06)",
    },
    background: {
      default: "#0C0C0C",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
    grey: {
      100: colors.greyWhite[10],
      200: colors.greyWhite[20],
      300: colors.greyWhite[30],
      400: colors.greyWhite[40],
      500: colors.greyWhite[50],
      600: colors.greyWhite[60],
    },
  },
  typography: {
    ...baseTheme.typography,
    fontFamily: "Inter Tight",
    fontSize: 16,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    // src: url(${"../assets/fonts/Inter Tight.otf"}) format('truetype');
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter Tight';
          src: url(${InterTightRegular}) format('truetype');
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: 'Inter Tight';
          src: url(${InterTightMedium}) format('truetype');
          font-weight: 500;
          font-style: normal;
        }

        @font-face {
          font-family: 'Inter Tight';
          src: url(${InterTightSemiBold}) format('truetype');
          font-weight: 600;
          font-style: normal;
        }

        @font-face {
          font-family: 'Inter Tight';
          src: url(${InterTightBold}) format('truetype');
          font-weight: 700;
          font-style: normal;
        }

         @font-face {
          font-family: 'Inter Tight';
          src: url(${InterTightExtraBold}) format('truetype');
          font-weight: 800;
          font-style: normal;
        }
      `,
    },
  },
});
