import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./components/redux/store";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./components/redux/contactsSlice";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";

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
      <PersistGate
        loading={null}
        persistor={persistor}
        onBeforeLift={() => store.dispatch(fetchContacts())}
      >
        <div>
          <h1>Phonebook</h1>
          <FetchContacts />
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
