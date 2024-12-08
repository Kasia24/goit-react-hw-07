import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Może to być localStorage lub sessionStorage

import rootReducer from "./rootReducer"; // lub inny plik z głównym reducerem

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // inne konfiguracje, jeśli są potrzebne
});

const persistor = persistStore(store);

export { store, persistor };
