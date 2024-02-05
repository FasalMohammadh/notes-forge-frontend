import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";

import Routes from "@/routes";

import defaultTheme from "@/theme/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
