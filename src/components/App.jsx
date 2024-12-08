import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Jeśli używasz redux-persist
import { store, persistor } from "./redux/store"; // Zainicjowanie store i persistor z redux-persist
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsSlice"; // Akcja do pobierania kontaktów
import ContactForm from "./ContactForm"; // Formularz do dodawania kontaktów
import SearchBox from "./SearchBox"; // Pole wyszukiwania kontaktów
import ContactList from "./ContactList"; // Lista kontaktów

// Komponent FetchContacts, który wywołuje akcję fetchContacts
const FetchContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); // Wywołanie akcji do pobrania danych z API
  }, [dispatch]);

  return null; // Ten komponent nie renderuje niczego, tylko wykonuje efekt uboczny
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {" "}
        {/* Jeśli używasz redux-persist */}
        <div>
          <h1>Phonebook</h1>
          <FetchContacts />{" "}
          {/* Komponent FetchContacts uruchamia akcję fetchContacts */}
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
