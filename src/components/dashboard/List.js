import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";

import { removeDestination } from "../../actions/index";

const List = () => {
  const dispatch = useDispatch();
  const firestore = useFirestore()

  useFirestoreConnect({
    collection: `/users`,
    storeAs: "list",
  });

  const destinations = useSelector((state) => state.firestore.data.list);

  const onButtonClick = (event) => {
    event.preventDefault();
    removeDestination(dispatch, firestore, event.target.id, event.target.dataset.key);
  };
  if (destinations) {
   // console.log('destinations list', destinations.length)
    return (
      <React.Fragment>
        {Object.values(destinations)
          .filter(item => item !== null ? item.destination : null)
          .map((destination, index) => (
            <div key={index} className="ui middle aligned divided list">
              <div className="item">
                <div className="right floated content">
                  <button
                    onClick={onButtonClick}
                    id={index}
                    data-key={destination.destinationID}
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
