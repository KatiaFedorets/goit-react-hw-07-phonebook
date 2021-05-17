import axios from "axios";
import actions from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:2000";

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
    .catch(error => dispatch(actions.fetchContactsError(error)));
};

export default {
  addContact,
  deleteContact,
  fetchContacts
};
