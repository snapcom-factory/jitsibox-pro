import "@mui/material/styles"
import "@mui/material/Button"

declare module "@mui/material/styles" {
  interface Palette {
    primary_light: Palette["primary"]
    primary_lighter: Palette["primary"]
    secondary_dark: Palette["primary"]
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    primary_light?: PaletteOptions["primary"]
    primary_lighter?: PaletteOptions["primary"]
    secondary_dark?: PaletteOptions["primary"]
  }
}
