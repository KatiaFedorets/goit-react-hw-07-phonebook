import { createAction } from "@reduxjs/toolkit";

const addContactsSuccess = createAction("contacts/addContactsSuccess");
const addContactsError = createAction("contacts/addContactsError");
const addContactsRequest = createAction("contacts/addContactsRequest");

const deleteContactsSuccess = createAction("contacts/deleteContactsSuccess");
const deleteContactsError = createAction("contacts/deleteContactsError");
const deleteContactsRequest = createAction("contacts/deleteContactsRequest");

const fetchContactsRequest = createAction("phoneBook/fetchContactsRequest");
const fetchContactsSuccess = createAction("phoneBook/fetchContactsSuccess");
const fetchContactsError = createAction("phoneBook/fetchContactsError");

const changeFilter = createAction("phonebook/change-filter");

const actionsExportObject = {
  addContactsSuccess,
  addContactsError,
  addContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  deleteContactsRequest,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  changeFilter
};

export default actionsExportObject;
