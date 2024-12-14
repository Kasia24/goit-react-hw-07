import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://connections-api.goit.global";

// Akcja do pobierania kontaktów
export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/contacts`);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

// Akcja do usuwania kontaktu
export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (contactId) => {
    try {
      await axios.delete(`${BASE_URL}/contacts/${contactId}`);
      return contactId; // Zwrócenie ID kontaktu, które zostało usunięte
    } catch (error) {
      throw new Error(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    status: "idle", // Możliwe wartości: idle, loading, succeeded, failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Obsługuje akcję do pobierania kontaktów
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Obsługuje akcję do usuwania kontaktu
    builder
      .addCase(removeContact.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Usuwanie kontaktu z listy po usunięciu z serwera
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default contactsSlice.reducer;
