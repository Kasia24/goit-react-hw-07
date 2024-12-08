import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Jeśli używasz redux-persist
import { store, persistor } from "./redux/store"; // Upewnij się, że eksportujesz i importujesz oba
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsSlice"; // Akcja do pobierania kontaktów
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";

const FetchContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return null; // Ten komponent nie renderuje niczego wizualnego
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Phonebook</h1>
          <FetchContacts /> {/* Tylko jeden mechanizm pobierania danych */}
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
