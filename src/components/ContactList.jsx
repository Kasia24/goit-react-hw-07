import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsSlice";

const ContactList = () => {
  const {
    items: contacts,
    loading,
    error,
  } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filters?.name || ""); // Domyślny filtr jako pusty ciąg
  const dispatch = useDispatch();

  useEffect(() => {
    if (!contacts.length) {
      dispatch(fetchContacts());
    }
  }, [dispatch, contacts.length]);

  // Filtrujemy kontakty
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Wyświetlamy odpowiednie komunikaty
  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!filteredContacts.length)
    return <p>No contacts found matching the filter.</p>;

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
