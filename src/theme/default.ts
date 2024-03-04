import { createTheme } from "@mui/material";
import COLORS from "./colors";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }

  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
  interface SimplePaletteColorOptions {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
    "950": string;
  }
}

const defaultTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "var(--font-mont)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: COLORS.primary[700],
      "50": COLORS.primary[50],
      "100": COLORS.primary[100],
      "200": COLORS.primary[200],
      "300": COLORS.primary[300],
      "400": COLORS.primary[400],
      "500": COLORS.primary[500],
      "600": COLORS.primary[600],
      "700": COLORS.primary[700],
      "800": COLORS.primary[800],
      "900": COLORS.primary[900],
      "950": COLORS.primary[950],
    },
    secondary: {
      main: COLORS.secondary[700],
      "50": COLORS.secondary[50],
      "100": COLORS.secondary[100],
      "200": COLORS.secondary[200],
      "300": COLORS.secondary[300],
      "400": COLORS.secondary[400],
      "500": COLORS.secondary[500],
      "600": COLORS.secondary[600],
      "700": COLORS.secondary[700],
      "800": COLORS.secondary[800],
      "900": COLORS.secondary[900],
      "950": COLORS.secondary[950],
    },
    accent: {
      main: COLORS.accent[500],
      "50": COLORS.accent[50],
      "100": COLORS.accent[100],
      "200": COLORS.accent[200],
      "300": COLORS.accent[300],
      "400": COLORS.accent[400],
      "500": COLORS.accent[500],
      "600": COLORS.accent[600],
      "700": COLORS.accent[700],
      "800": COLORS.accent[800],
      "900": COLORS.accent[900],
      "950": COLORS.accent[950],
    },
    background: {
      default: COLORS.background[100],
      paper: COLORS.background[50],
    },
    text: {
      primary: COLORS.text[900],
      secondary: COLORS.text[700],
    },
  },
});

export default defaultTheme;
