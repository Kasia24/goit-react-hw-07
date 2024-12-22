import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./contactsOperations"; // Używamy fetchContacts do pobierania danych
import {
  selectContacts,
  selectLoading,
  selectError,
} from "./redux/contactsSlice"; // Używamy selektorów

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts); // Pobieramy kontakty z Redux
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts()); // Wysyłamy akcję do pobrania kontaktów
  }, [dispatch]);

  // Obsługa stanu ładowania i błędów
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Walidacja: Sprawdzamy, czy contacts to tablica
  if (!Array.isArray(contacts)) {
    return <p>Invalid data format.</p>;
  }

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.phone}
            </li>
          ))
        ) : (
          <p>No contacts found.</p>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
