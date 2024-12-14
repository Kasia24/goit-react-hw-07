import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsSlice"; // Akcja do pobierania kontaktów

const FetchContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); // Wysyłanie akcji do pobierania danych
  }, [dispatch]);

  return null; // Ten komponent nie renderuje niczego wizualnego
};

export default FetchContacts;
