// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import głównego komponentu aplikacji
import { BrowserRouter } from "react-router-dom"; // Importowanie Routera
import { CssBaseline, ThemeProvider } from "@mui/material"; // Dla Material UI
import { createTheme } from "@mui/material/styles"; // Tworzenie niestandardowego motywu

// Tworzenie niestandardowego motywu Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Kolor główny
    },
    secondary: {
      main: "#dc004e", // Kolor pomocniczy
    },
  },
});

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
