import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";

import { removeDestination } from "../../actions/index";

const List = () => {
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const authUID = useSelector((state) => state.firebase.auth.uid);

  useFirestoreConnect({
    collection: `/list`,
    storeAs: "list",
  });

  const destinations = useSelector((state) => state.firestore.data.list);

  const onButtonClick = (event) => {
    event.preventDefault();
    removeDestination(
      dispatch,
      firestore,
      event.target.id,
      event.target.dataset.key
    );
  };
  if (destinations) {
    return (
      <React.Fragment>
        {Object.values(destinations)
          .filter((file) => {
            if (file) return file.authorId === authUID;
            return "";
          })
          .map((file, index) => {
            return (
              <div key={index} className="ui middle aligned divided list">
                <div className="item">
                  <div className="right floated content">
                    <button
                      onClick={onButtonClick}
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
          })}
      </React.Fragment>
    );
  }
  return <div></div>;
};

export default List;
