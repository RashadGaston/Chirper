import React from "react";

function Chirp(props) {
  return (
    <h1>
      {props.chirps.name} {props.chirps.message}
    </h1>
  );
}

export default Chirp;
