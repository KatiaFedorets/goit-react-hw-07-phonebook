import styles from "./ContactList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className={styles.list}>
    {contacts.map(contact => (
      <li key={contact.id} className={styles.list_item}>
        <span className={styles.list_text}>{contact.name}:</span>
        <span className={styles.list_text}>{contact.number}</span>
        <button
          type="button"
          onClick={() => onDeleteContacts(contact.id)}
          className={styles.list_button}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getVisibleContacts(state)
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: text => dispatch(contactsOperations.deleteContact(text))
});

ContactList.defaultProps = {
  contacts: [],
  onDeleteContact: () => {}
};

ContactList.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
