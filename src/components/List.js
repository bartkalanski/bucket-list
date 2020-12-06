import React from "react";
import { useSelector, useDispatch } from "react-redux";

const List = () => {
  const destinations = useSelector((state) => state.destinations);
  const dispatch = useDispatch();

  const onButtonClick = (event) => {
    event.preventDefault();
    dispatch({ type: "REMOVE_DESTINATION", payload: event.target.id });
  };
  if (destinations) {
    return (
      <React.Fragment>
        {destinations.map((destination, index) => (
          <div className="ui middle aligned divided list">
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
              <div className="ui header">{destination.destination}</div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
  return <div></div>;
};

export default List;
