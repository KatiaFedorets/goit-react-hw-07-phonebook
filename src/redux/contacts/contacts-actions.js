import { createAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

const addContactsSucces = createAction("contacts/addContactsSucces");
const addContactsError = createAction("contacts/addContactsError");
const addContactsRequest = createAction("contacts/addContactsRequest");

const deleteContactsSucces = createAction("contacts/deleteContactsSucces");
const deleteContactsError = createAction("contacts/deleteContactsError");
const deleteContactsRequest = createAction("contacts/deleteContactsRequest");

export default {
  addContactsSucces,
  addContactsError,
  addContactsRequest,
  deleteContactsSucces,
  deleteContactsError,
  deleteContactsRequest
};
