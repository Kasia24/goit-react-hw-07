import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // używamy lokalnego storage
import rootReducer from "./rootReducer"; // Upewnij się, że masz odpowiedni rootReducer

// Konfiguracja persistera
const persistConfig = {
  key: "root", // Klucz do przechowywania stanu
  storage, // Używamy localStorage
};

// Tworzymy persistReducer, który opakowuje nasz rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tworzymy store za pomocą persistowanego reduktora
const store = configureStore({
  reducer: persistedReducer, // używamy persistowanego reduktora
});

// Tworzymy persistor, który będzie synchronizował stan z storage
const persistor = persistStore(store);

export { store, persistor };
