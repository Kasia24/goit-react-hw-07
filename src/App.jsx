import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./components/redux/store";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./components/redux/contactsSlice";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); // Pobierz kontakty z backendu
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
