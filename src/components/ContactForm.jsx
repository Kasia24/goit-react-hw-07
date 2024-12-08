import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.contacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Walidacja numeru telefonu
    const phoneNumberRegex = /^[0-9\s\-+()]+$/;
    if (!phoneNumberRegex.test(number)) {
      alert("Please enter a valid phone number.");
      return;
    }

    // Dodanie kontaktu
    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        setName("");
        setNumber("");
      })
      .catch(() => {
        alert("Failed to add contact. Please try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <button type="submit" disabled={loading || !name || !number}>
        {loading ? "Adding..." : "Add Contact"}
      </button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </form>
  );
};

export default ContactForm;
