import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./contacts-actions";

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactsSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactsSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),

  [actions.fetchContactsSuccess]: (_, { payload }) => payload
});

const error = createReducer(false, {
  [actions.addContactRequest]: () => false,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: (state, { payload }) => payload,
  [actions.deleteContactError]: (state, { payload }) => payload,
  [actions.deleteContactsSuccess]: () => false,
  [actions.deleteContactRequest]: () => false,
  [actions.fetchContactsError]: (state, { payload }) => payload,
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload
});

const reducersExportObject = {
  items,
  error,
  filter
};

export default combineReducers(reducersExportObject);
