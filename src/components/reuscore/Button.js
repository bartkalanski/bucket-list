import React from "react";

const Button = ({ className, name, type="button" }) => {
  return (
    <button className={className} type={type}>
      {name}
    </button>
  );
};

export default Button;
