import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "./redux/contactsSlice";

const ContactList = () => {
  const { items, loading, error } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const filteredContacts = React.useMemo(() => {
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  if (loading) return <p>Loading contacts, please wait...</p>;
  if (error) return <p>Something went wrong: {error}</p>;
  if (filteredContacts.length === 0 && !loading && !error) {
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
