import axios from "axios";
import actions from "./contacts-actions";

const addContact = contact => dispatch => {
  dispatch(actions.addContactsRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
    .catch(error => dispatch(actions.addContactsError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactsSuccess(id)))
    .catch(error => dispatch(actions.deleteContactsError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());
  axios
    .get(`/contacts/`)
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error.massage)));
};

const operationsExportObject = {
  addContact,
  deleteContact,
  fetchContacts
};

export default operationsExportObject;
