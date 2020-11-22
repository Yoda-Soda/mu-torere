import PerepereView from "./components/views/PerepereView";
import React, { useState, useEffect } from "react";
import "./App.css";
import { resetState, startingState } from "./logic/updateState";
import { findOpenPosition } from "./logic/algorithms";

function App() {
  const [currentBoardState, setCurrentBoardState] = useState(startingState());

  //let newState = startingState();
  const handleClick = (positionClicked) => {
    const newState = { ...currentBoardState }; //shallow copy so that it can be modified and resubmitted for render
    console.log(positionClicked, currentBoardState);
    console.log(findOpenPosition(currentBoardState));

    newState.pereperes[findOpenPosition(currentBoardState)].team =
      currentBoardState.pereperes[positionClicked].team;
    newState.pereperes[positionClicked].team = null;
    setCurrentBoardState(newState);
  };

  return (
    <div className="container">
      <div className="board">
        <PerepereView data={currentBoardState} onShowClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
