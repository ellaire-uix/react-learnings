import React from "react";
import createLogo from "../public/react.svg";
export default function Navbar() {
  return (
    <>
      <nav>
        <img src={createLogo} />
        <p>navbar component</p>
      </nav>
    </>
  );
}
