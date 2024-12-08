import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Używamy domyślnego localStorage
import { combineReducers } from "redux";
import contactsReducer from "./contactsSlice"; // Zastąp swoją ścieżką

// Konfiguracja persist
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  contacts: contactsReducer, // Dodaj swoje reduktory
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tworzymy store
export const store = configureStore({
  reducer: persistedReducer,
});

// Tworzymy persistor
export const persistor = persistStore(store);
