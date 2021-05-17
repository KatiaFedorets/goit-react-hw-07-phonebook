import contactsReducer from "../redux/contacts/contacts-reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: contactsReducer
  },
  middleware: getDefaultMiddleware,
  devTools: process.env.NODE_ENV !== "production"
});

export default store;
