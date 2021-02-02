import React from "react";

const Loader = () => {
  return (
    <div class="ui container" style={{ marginTop: "50vh" }}>
      <div class="ui active inverted dimmer">
        <div class="ui text loader">Loading</div>
      </div>
    </div>
  );
};

export default Loader;
