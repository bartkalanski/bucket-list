import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { removeDestination } from "../../actions/index";

const List = () => {
  const dispatch = useDispatch();

  useFirestoreConnect({
    collection: `/list`,
    storeAs: "list",
  });

  const destinations = useSelector((state) => state.firestore.data.list);

  const onButtonClick = (event) => {
    event.preventDefault();
    removeDestination(dispatch, event.target.id);
  };
  if (destinations) {
    return (
      <React.Fragment>
        {Object.values(destinations)
          .filter(item => item.destination)
          .map((destination, index) => (
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
