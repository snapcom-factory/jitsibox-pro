import "@mui/material/styles"
import "@mui/material/Chip"

declare module "@mui/material/styles" {
  interface Palette {
    primary_light: Palette["primary"]
    primary_lighter: Palette["primary"]
    secondary_dark: Palette["primary"]
  }

  interface PaletteOptions {
    primary_light?: PaletteOptions["primary"]
    primary_lighter?: PaletteOptions["primary"]
    secondary_dark?: PaletteOptions["primary"]
  }

  interface BreakpointOverrides {
    tablet: true
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsSizeOverrides {
    large: true
  }
}
