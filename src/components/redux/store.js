import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"; // Przyklad z licznikem

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Zarejestruj reduktor w store
  },
});
