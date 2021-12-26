import React from "react";
import PropTypes from "prop-types";


const ContactUser = ({ id, name, number, onDeleteContacts }) => {
  return (
    <li >
      <span >{name}</span>
      <span >{number}</span>
      <button
        type="button"
        onClick={() => onDeleteContacts(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactUser;

ContactUser.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
};