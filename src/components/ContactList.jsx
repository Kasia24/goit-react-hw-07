import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, deleteContact } from "./redux/contactsSlice";

const ContactList = () => {
  const { items, loading, error } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>Error: {error}</p>;
  if (filteredContacts.length === 0) {
    return <p>No contacts found matching the filter.</p>;
  }

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}{" "}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
