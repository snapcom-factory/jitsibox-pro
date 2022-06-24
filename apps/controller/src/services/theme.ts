import { createTheme } from "@mui/material/styles"

export const defaultTheme = createTheme({})

export const countryTheme = createTheme({
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
    },
    warning: {
      main: "#D64D00",
    },
    success: {
      main: "#1F8D49",
    },
    info: {
      main: "#0078F3",
    },
    background: {
      default: "#F5F5FE",
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
  },
})
