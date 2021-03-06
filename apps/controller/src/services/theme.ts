import { ComponentsPropsList, createTheme, Theme } from "@mui/material/styles"
import MarianneRegular from "@/assets/fonts/Marianne/Marianne-Regular.woff2"
import MarianneRegularItalic from "@/assets/fonts/Marianne/Marianne-Regular_Italic.woff2"
import MarianneBold from "@/assets/fonts/Marianne/Marianne-Bold.woff2"
import MarianneBoldItalic from "@/assets/fonts/Marianne/Marianne-Bold_Italic.woff2"
import MarianneLight from "@/assets/fonts/Marianne/Marianne-Light.woff2"
import MarianneLightItalic from "@/assets/fonts/Marianne/Marianne-Light_Italic.woff2"
import MarianneMedium from "@/assets/fonts/Marianne/Marianne-Medium.woff2"
import MarianneMediumItalic from "@/assets/fonts/Marianne/Marianne-Medium_Italic.woff2"

export const defaultTheme = createTheme({})

export const countryTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      tablet: 1050,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#000491",
    },
    primary_light: {
      main: "#CACAFB",
    },
    primary_lighter: {
      main: "#E3E3FD",
    },
    secondary: {
      main: "#E1000F",
    },
    secondary_dark: {
      main: "#C9191E",
    },
    text: {
      primary: "#161616",
    },
    error: {
      main: "#F60700",
      light: "#ffe9e9",
    },
    warning: {
      main: "#D64D00",
      light: "#ffe9e6",
    },
    success: {
      main: "#1F8D49",
      light: "#b8fec9",
    },
    info: {
      main: "#0078F3",
      light: "#e8edff",
    },
    background: {
      default: "#F5F5FE",
      paper: "#F5F5FE",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({
          ownerState,
          theme,
        }: {
          ownerState: ComponentsPropsList["MuiAlert"] & Record<string, unknown>
          theme: Theme
        }) => ({
          alignItems: "center",
          px: 2,
          borderRadius: 100,
          color: theme.palette.text.primary,
          backgroundColor:
            theme.palette[ownerState.severity || "success"].light,
          ...{
            "& .MuiAlert-icon": {
              color: theme.palette[ownerState.severity || "success"].main,
            },
          },
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Marianne';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${MarianneRegular}) format('woff2');
        }
        @font-face {
          font-family: 'Marianne';
          font-style: italic;
          font-display: swap;
          font-weight: 400;
          src: url(${MarianneRegularItalic}) format('woff2');
        } 
        @font-face {
          font-family: 'Marianne';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: url(${MarianneBold}) format('woff2');
        }
        @font-face {
          font-family: 'Marianne';
          font-style: italic;
          font-display: swap;
          font-weight: 700;
          src: url(${MarianneBoldItalic}) format('woff2');
        }
        @font-face {
          font-family: 'Marianne';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: url(${MarianneLight}) format('woff2');
        }
        @font-face {
          font-family: 'Marianne';
          font-style: italic;
          font-display: swap;
          font-weight: 300;
          src: url(${MarianneLightItalic}) format('woff2');
        }
        @font-face {
          font-family: 'Marianne';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: url(${MarianneMedium}) format('woff2');
        }
        @font-face {
          font-family: 'Marianne';
          font-style: italic;
          font-display: swap;
          font-weight: 500;
          src: url(${MarianneMediumItalic}) format('woff2');
        }
        
      `,
    },
    MuiChip: {
      variants: [
        {
          props: { size: "large" },
          style: {
            fontSize: "1.3rem",
            height: 40,
            borderRadius: 30,
            paddingLeft: "0.2rem",
            paddingRight: "0.2rem",
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: ["Marianne", "Arial", "sans-serif"].join(","),
    fontSize: 16,
    h2: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "2.75rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: -0.1,
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    body2: {
      fontSize: "2rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "1.4rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    subtitle2: {
      fontSize: "1.4rem",
      fontWeight: 500,
      lineHeight: 1,
    },
    caption: {
      fontSize: "1.1rem",
      fontWeight: 700,
      lineHeight: 1,
    },
  },
})
