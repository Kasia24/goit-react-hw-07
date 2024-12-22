import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from ".//contactsOperations"; // Upewnij się, że importujesz z contactsOperations

const ContactForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Jeśli chcesz wysłać dane, np. dodanie kontaktu, to musisz użyć odpowiedniej akcji
    // Przykład dla dodania kontaktu:
    // dispatch(addContact({ name }));
    // Lub, jeśli chcesz pobrać wszystkie kontakty:
    dispatch(fetchContacts());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add a contact"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ContactForm;
