import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.contacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Stan błędów

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Resetowanie błędu przy każdym wysłaniu formularza

    // Sprawdzenie, czy kontakt już istnieje (bez uwzględniania wielkości liter)
    if (
      items.some((contact) => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      setErrorMessage(`${name} is already in contacts.`);
      return;
    }

    // Walidacja numeru telefonu
    const phoneNumberRegex = /^[0-9\s\-+()]+$/;
    if (!phoneNumberRegex.test(number)) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    // Dodanie kontaktu
    dispatch(addContact({ name, number }))
      .unwrap() // Obsługuje ewentualne błędy (redux-thunk)
      .then(() => {
        setName("");
        setNumber("");
      })
      .catch((err) => {
        setErrorMessage("Failed to add contact. Please try again.");
        console.error("Add contact error: ", err); // Debugging
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading || !name || !number}>
        {loading ? "Adding..." : "Add Contact"}
      </button>

      {errorMessage && (
        <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
      )}
    </form>
  );
};

export default ContactForm;
