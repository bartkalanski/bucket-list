import React from "react";

const Input = ({ label, handleFieldChange, type, id, name, placeholder }) => {
  const handleChange = (e) => {
    //console.log("handle change", e.target.name, e.target.value);

    handleFieldChange(e.target.name, e.target.value);
  };
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={handleChange}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
