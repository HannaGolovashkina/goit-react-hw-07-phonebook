import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookAPI from 'services/phonebook-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await phonebookAPI.getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await phonebookAPI.addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await phonebookAPI.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);