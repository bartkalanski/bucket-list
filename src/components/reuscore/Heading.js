import React from "react";

const Heading = ({ firstName }) => {
  return (
    <>
      <div className="ui divider"></div>
      <h1 className="ui center aligned header">
        {firstName ? `${firstName}'s` : `Create Your`} Bucket List
      </h1>
    </>
  );
};

export default Heading;
