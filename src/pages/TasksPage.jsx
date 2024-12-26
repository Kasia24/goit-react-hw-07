import React, { useEffect, useState } from "react";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from "../components/contacts";
import toast from "react-hot-toast"; // React Hot Toast dla powiadomień

const TasksPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
  }); // Nowy kontakt

  // Załaduj kontakty po pierwszym renderze
  useEffect(() => {
    const loadContacts = async () => {
      try {
        const data = await fetchContacts();
        setContacts(data); // Ustawienie danych kontaktów
      } catch (error) {
        toast.error("Failed to load contacts");
      } finally {
        setLoading(false);
      }
    };

    loadContacts();
  }, []); // Pusty array oznacza, że załadowanie będzie tylko raz, po załadowaniu komponentu

  // Dodaj nowy kontakt
  const handleAddContact = async (e) => {
    e.preventDefault(); // Zapobiega domyślnej akcji formularza

    try {
      const addedContact = await addContact(newContact); // Dodanie kontaktu do backendu
      setContacts((prevContacts) => [...prevContacts, addedContact]); // Aktualizacja stanu kontaktów
      toast.success("Contact added");
      setNewContact({ name: "", email: "", phone: "" }); // Reset formularza
    } catch (error) {
      toast.error("Failed to add contact");
    }
  };

  // Usuń kontakt
  const handleDeleteContact = async (contactId) => {
    try {
      await deleteContact(contactId); // Usunięcie kontaktu
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      ); // Usunięcie z UI
      toast.success("Contact deleted");
    } catch (error) {
      toast.error("Failed to delete contact");
    }
  };

  // Edytuj kontakt
  const handleUpdateContact = async (contactId, updatedData) => {
    try {
      const updatedContact = await updateContact(contactId, updatedData); // Aktualizacja kontaktu
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === contactId ? updatedContact : contact
        )
      );
      toast.success("Contact updated");
    } catch (error) {
      toast.error("Failed to update contact");
    }
  };

  // Formularz dla nowego kontaktu
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Contacts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <span>{contact.name}</span>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
              <button
                onClick={() =>
                  handleUpdateContact(contact.id, { name: "Updated Name" })
                }
              >
                Update
              </button>
              <button onClick={() => handleDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Formularz dodawania nowego kontaktu */}
      <form onSubmit={handleAddContact}>
        <h2>Add a new contact</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newContact.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={newContact.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={newContact.phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default TasksPage;
