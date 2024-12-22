import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Ustawienie podstawowego URL API
axios.defaults.baseURL = "https://connections-api.goit.global";

// Operacja asynchroniczna do pobierania kontaktów
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll", // Typ akcji
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data; // Zwracamy dane, które trafią do payload w reducerze
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message); // Zwracamy błąd, jeśli coś poszło nie tak
    }
  }
);

// Operacja asynchroniczna do dodawania kontaktu
export const addContact = createAsyncThunk(
  "contacts/addContact", // Typ akcji
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contactData);
      return response.data; // Zwracamy dodany kontakt, aby trafił do payload
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message); // Obsługa błędu
    }
  }
);

// Operacja asynchroniczna do usuwania kontaktu
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact", // Typ akcji
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId; // Zwracamy ID kontaktu, które ma zostać usunięte
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message); // Obsługa błędu
    }
  }
);
