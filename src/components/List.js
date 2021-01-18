import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeDestination } from "../actions/index";

const List = () => {
  const destinations = useSelector((state) => state.destinationReducer.destinations);
  const dispatch = useDispatch();

  const onButtonClick = (event) => {
    event.preventDefault();
    removeDestination(dispatch, event.target.id);
  };
  if (destinations) {
    return (
      <React.Fragment>
        {destinations.map((destination, index) => (
          <div key={index} className="ui middle aligned divided list">
            <div className="item">
              <div className="right floated content">
                <button
                  onClick={onButtonClick}
                  id={index}
                  className="ui red button"
                >
                  Remove
                </button>
              </div>
              <div className="ui header">
                {index + 1}. {destination.destination}
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
  return <div></div>;
};

export default List;
