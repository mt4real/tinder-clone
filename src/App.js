import React from "react";
import './App.css';
import Header from "./Header";
import TinderCard from "./TinderCard";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    //BEm class naming convention
    <div className="app">
      {/* Header */}
        <Header/>
      {/* TinderCards*/}
      <TinderCard/>
      {/* SwipeButtons*/}
      <SwipeButtons/>
   </div>
  );
}

export default App;
