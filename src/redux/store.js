/* eslint-disable import/no-anonymous-default-export */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
    persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import reducer from './reducers';

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })];
// const persistConfig = {
//     key: 'phoneBook',
//     storage,
//     blacklist: ['filter'],
// };
const store = configureStore({
    reducer: {
        contacts: reducer,
    },
    middleware,
    // devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);
export default { store, persistor };