import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";

import { removeDestination } from "../../actions/index";
import DisplayResults from "./DisplayResults";

const Results = () => {
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const authUID = useSelector((state) => state.firebase.auth.uid);
  const destinations = useSelector((state) => state.firestore.data.list);
  let results;

  useFirestoreConnect({
    collection: `/list`,
    storeAs: "list",
  });

  if (destinations) {
    results = Object.values(destinations).filter((file) => {
      if (file) return file.authorId === authUID;
      return "";
    });
  }

  const onButtonClick = (event) => {
    event.preventDefault();
    removeDestination(
      dispatch,
      firestore,
      event.target.id,
      event.target.dataset.key
    );
  };
  if (!results) return <div />;
  return (
    <React.Fragment>
      {results.map((file, index) => {
        return (
          <DisplayResults
            index={index}
            file={file}
            handleButtonClick={onButtonClick}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Results;
