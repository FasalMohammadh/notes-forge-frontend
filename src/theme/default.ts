import { createTheme } from "@mui/material";

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
});

export default defaultTheme;
