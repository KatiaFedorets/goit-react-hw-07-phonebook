import React, { Component } from "react";
import { connect } from "react-redux";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import styles from "./App.module.css";
import contactsActions from "../src/redux/contacts/contacts-operations";

import "normalize.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={styles.div}>
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

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsActions.fetchContacts())
});

export default connect(null, mapDispatchToProps)(App);
