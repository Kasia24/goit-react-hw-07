import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./contactsOperations"; // Import operacji asynchronicznych

const FetchContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); // Wywołanie akcji fetchContacts
  }, [dispatch]);

  return null; // Komponent nie renderuje niczego
};

export default FetchContacts; // Eksportujemy komponent domyślnie
