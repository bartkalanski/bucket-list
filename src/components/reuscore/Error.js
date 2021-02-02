import React from "react";

const Error = ({ err }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {err ? <div className="ui red message">{err}</div> : null}
    </div>
  );
};

export default Error;
