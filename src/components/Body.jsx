import React from "react";
import React from "react";
import reactLogo from "../photos/react.svg";
import "./Body.css";
function Body() {
  return (
    <div>
      <img src={reactLogo} />

      <h1>fun facts about react</h1>
      <ul>
        <li>was released in 2013</li>
        <li>was originally created by jordan walker</li>
        <li>has well over 200k stars on g ithub</li>
        <li>is maintained by meta</li>
      </ul>
    </div>
  );
}

export default Body;
