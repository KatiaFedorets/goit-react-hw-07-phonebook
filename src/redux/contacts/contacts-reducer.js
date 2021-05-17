import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./contacts-actions";

const items = createReducer([], {
  [actions.addContactsSucces]: (state, { payload }) => [...state, payload],
  [actions.deleteContactsSucces]: (state, { payload }) =>
    state.filter(item => item.id !== payload)
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload
});

export default combineReducers({
  items,
  filter
});
