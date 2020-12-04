import React from "react";
import { useSelector } from "react-redux";

const List = () => {
  const destinations = useSelector((state) => state.destinations);

  return (
    <React.Fragment>
      {destinations.map((destination) => (
        <div class="ui middle aligned divided list">
          <div class="item">
            <div class="right floated content">
              <div class="ui button">Remove</div>
            </div>
            <div class="content">{destination.destination}</div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default List;
