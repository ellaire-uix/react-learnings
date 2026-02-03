import React, { useState } from "react";

function JokePage(props) {
  const [isShown, setIsShown] = useState(false);
  const [messages, setMessages] = useState(["a", "b", "c"]);

  function toggleShow(props) {
    setIsShown((prevShown) => !prevShown);
  }
  function determineText() {
    if (messages.length === 0) {
      return "you are all caught up";
    } else if (messages.length === 1) {
      return "you have 1 unread messages";
    } else {
      return `you have ${messages.length} messages`;
    }
  }
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown ? <p>{props.punchline}</p> : null}
      <button onClick={toggleShow}>{isShown ? "hide" : "show"}punchline</button>

      {/*
      {messages.length === 0 && <h2>no unread messages</h2>}

      {messages.length === 1 && <h3>one unread messages</h3>}

      {messages.length > 1 && (
        <h3>you have {messages.length} unread messages</h3>
      )}
      */}

      <h1>{determineText()}</h1>
    </div>
  );
}

export default JokePage;
