import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const contactsSlicer = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [addContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [deleteContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [deleteContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [deleteContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});
// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items: [], filter: '' },
//   reducers: {
//     addContact(state, { payload }) {
//       state.items.push(payload);
//     },
//     deleteContact(state, { payload }) {
//       state.items = state.items.filter(item => item.id !== payload);
//     },
//     changeFilter(state, { payload }) {
//       state.filter = payload;
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// export const persisteContactReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer,
// );

// export const { addContact, deleteContact, changeFilter } =
//   contactsSlice.actions;

// export const getContacts = state => state.contacts.items;
// export const getFilter = state => state.contacts.filter;