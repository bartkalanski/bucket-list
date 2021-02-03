import React from "react";

const DisplayResults = ({ index, file, handleButtonClick }) => {
  return (
    <div key={index} className="ui middle aligned divided list">
      <div className="item">
        <div className="right floated content">
          <button
            onClick={handleButtonClick}
            id={index}
            data-key={file.documentID}
            className="ui red button"
          >
            Remove
          </button>
        </div>
        <div className="ui header">
          {index + 1}. {file.destination}
        </div>
      </div>
    </div>
  );
};

export default DisplayResults;
