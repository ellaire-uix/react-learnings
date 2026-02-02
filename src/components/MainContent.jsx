import React from "react";
import reactLogo from "../public/react.svg";
import { Fragment } from "react";
import "./MainContent.css";
function Header() {
  return (
    <header className=".header">
      <h2>react</h2>

      <img src={reactLogo} className="img-logo" />

      <nav className="nav-list-item">
        <ul className="nav-list">
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
}
function MainContent() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
function Footer() {
  return (
    <footer>
      <p>Mohsina Parveen development.All rights reserved</p>
    </footer>
  );
}
function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default Page;
