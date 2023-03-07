import { configureStore } from '@reduxjs/toolkit';

import { contactsSlicer } from './contacts-slice';
import { filterSlicer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlicer.reducer,
    filter: filterSlicer.reducer,
  },
});
// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { persisteContactReducer } from './contacts-slice';

// export const store = configureStore({
//   reducer: {
//     contacts: persisteContactReducer,
//   },

//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);