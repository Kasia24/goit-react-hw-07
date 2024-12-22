import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Ustawienie podstawowego URL do API
axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll", // Typ akcji
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/contacts");
      return response.data; // Zwraca dane
    } catch (error) {
      return rejectWithValue(error.response.data.message); // Zwraca błąd
    }
  }
);
