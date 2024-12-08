// src/components/redux/rootReducer.js
import { combineReducers } from "redux";
import contactsReducer from "./contactsSlice"; // reducer dla kontaktów
import filtersReducer from "./filtersSlice"; // reducer dla filtrów

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

export default rootReducer;
