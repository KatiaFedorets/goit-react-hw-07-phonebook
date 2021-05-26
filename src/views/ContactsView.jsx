import { Component } from "react";
import { connect } from "react-redux";
import ContactList from "../components/ContactForm/ContactForm";
import ContactForm from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import contactsActions from "../redux/contacts/contacts-operations";
import contactsSelectors from "../redux/contacts/contacts-selectors";

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm />
        <Filter>
          <h2>Contact</h2>
        </Filter>
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: contactsSelectors.getError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsActions.fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
