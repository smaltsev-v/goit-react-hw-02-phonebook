import React from "react";
import PropTypes from "prop-types";


const Filter = ({ value, onChange }) => {
  return (
    <div >
      <label >
        Find contacts by name
        <input       
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};