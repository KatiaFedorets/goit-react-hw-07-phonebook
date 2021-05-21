import { createSelector } from "@reduxjs/toolkit";

const getAllContacts = state => state.contacts.items;
const getFilterContacts = state => state.contacts.filter;
const getError = state => state.error;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilterContacts],
  (contacts, filter) =>
    contacts.filter(({ name }) => {
      const searchFilter = filter.toLowerCase();
      return name.toLowerCase().includes(searchFilter);
    })
);

export default {
  getAllContacts,
  getVisibleContacts,
  getFilterContacts,
  getError
};
