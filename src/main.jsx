import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./fonts/druk-wide-medium-web.woff";
import "./fonts/druk-wide-medium-web.woff2";
import "./css/fonts.css";
import "./index.css";
import AppRouter from "./AppRouter/AppRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: "20px"
        }
      }
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);
