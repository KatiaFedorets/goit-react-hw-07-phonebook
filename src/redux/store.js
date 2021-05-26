import contactsReducer from "../redux/contacts/contacts-reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth-reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"]
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer
  },

  middleware,
  devTools: process.env.NODE_ENV !== "production"
});

const persistor = persistStore(store);

export default { store, persistor };
