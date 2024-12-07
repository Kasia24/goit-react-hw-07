import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.contacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
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
      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Contact"}
      </button>
    </form>
  );
};

export default ContactForm;
