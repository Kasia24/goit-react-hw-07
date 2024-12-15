import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice"; // Import reduktora

// Konfiguracja persystencji
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer, // Główny reduktor
  },
});

export const persistor = persistStore(store);
