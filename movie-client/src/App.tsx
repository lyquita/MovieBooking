import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import AppRouter from "./Routes";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
