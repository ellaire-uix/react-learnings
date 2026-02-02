import React from "react";
//import MainContent from "./components/MainContent";
//import Page from "./components/MainContent";
//import Navbar from "./components/Navbar";
import Header from "./components/TravelJournal/TravelHeader";
import TravelBody from "./components/TravelJournal/TravelBody";
import JokePage from "./components/JokesPage/JokePage";
function App() {
  return (
    <div>
      <Header />
      <TravelBody />
      <JokePage
        setup="i got my daughter a fridge for her bday"
        punchline="i cant wait to see her face light up when she opens it"
      />
      <JokePage
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </div>
  );
}

export default App;
