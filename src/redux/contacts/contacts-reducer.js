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

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload
});

export default combineReducers({
  items,
  filter
});
