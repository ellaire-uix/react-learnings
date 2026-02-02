import React from "react";

function JokePage(props) {
  return (
    <div>
      <h1>{props.setup}</h1>
      <p>{props.punchline}</p>
    </div>
  );
}

export default JokePage;
