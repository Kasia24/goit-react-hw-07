import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Import głównego komponentu aplikacji
import { BrowserRouter } from "react-router-dom"; // Importowanie React Router
import ToastContainer from "react-hot-toast"; // Importowanie komponentu Toast do powiadomień
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
    {" "}
    {/* Router dla nawigacji po aplikacji */}
    <ThemeProvider theme={theme}>
      {" "}
      {/* Dostosowanie tematu Material UI */}
      <CssBaseline />{" "}
      {/* Resetowanie stylów, aby aplikacja miała spójną bazę */}
      <App /> {/* Główny komponent aplikacji */}
      <ToastContainer /> {/* Komponent do wyświetlania powiadomień */}
    </ThemeProvider>
  </BrowserRouter>
);
