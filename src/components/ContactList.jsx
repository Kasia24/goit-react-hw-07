import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, removeContact } from "./redux/contactsSlice"; // Zaimportuj removeContact

const ContactList = () => {
  // Zmieniamy 'items' na 'contacts' (zgodnie z definicją w reducerze)
  const { contacts, status, error } = useSelector((state) => state.contacts); // 'contacts' zamiast 'items'
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  // Pobieramy dane tylko, jeśli nie zostały jeszcze załadowane
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchContacts());
    }
  }, [dispatch, status]);

  // Filtrujemy kontakty według wprowadzonego filtra
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (status === "loading") return <p>Loading contacts...</p>;
  if (error) return <p>Error: {error}</p>;
  if (filteredContacts.length === 0) {
    return <p>No contacts found matching the filter.</p>;
  }

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}{" "}
          <button onClick={() => dispatch(removeContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
