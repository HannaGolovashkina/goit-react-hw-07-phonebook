import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.fulfilled]: (state, action) => {
      if (state.items.find(({ name }) => name === action.payload.name)) {
        return alert(`${action.payload.name} is already in contacts.`);
      }
      state.items.unshift(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});