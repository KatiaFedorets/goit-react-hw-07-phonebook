import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

const Filter = ({ filter, items, onChange, children }) => {
  return (
    <div className={styles.div}>
      {items.length > 0 && (
        <label className={styles.label}>
          Find contact by name
          <input
            type="text"
            value={filter}
            onChange={onChange}
            className={styles.input}
          ></input>
        </label>
      )}
      {children}
    </div>
  );
};

const mapStateToProps = state => ({
  items: contactsSelectors.getAllContacts(state),
  filter: contactsSelectors.getFilterContacts(state)
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value))
});

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
