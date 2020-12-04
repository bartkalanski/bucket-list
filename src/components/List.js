import React from "react";
import { useSelector, useDispatch } from "react-redux";

const List = () => {
  const destinations = useSelector((state) => state.destinations);
  const dispatch = useDispatch();

  const onButtonClick = (event) => {
    event.preventDefault();
    dispatch({ type: "REMOVE_DESTINATION", payload: event.target.id });
  };
  if (destinations !== undefined) {
    return (
      <React.Fragment>
        {destinations.map((destination, index) => (
          <div class="ui middle aligned divided list">
            <div class="item">
              <div class="right floated content">
                <button onClick={onButtonClick} id={index} class="ui button">
                  Remove
                </button>
              </div>
              <div class="content">{destination.destination}</div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
  return <div></div>;
};

export default List;
