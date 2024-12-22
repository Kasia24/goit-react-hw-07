import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice"; // Importujemy contactsSlice

export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Dodajemy reducer dla kontaktów
  },
});
