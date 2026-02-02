import React from "react";
import globe from "../../photos/globe.jpg";
function Header() {
  return (
    <div>
      <h2> Iam a header component</h2>
      <img src={globe} alt="" width={40} />
    </div>
  );
}

export default Header;
