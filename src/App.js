import PerepereView from "./components/views/PerepereView";
import React, { useState, useEffect } from "react";
import "./App.css";
import {
  enableAll,
  startingState,
  disableInactivePlayer,
  togglePlayer,
} from "./logic/updateState";
import { findOpenPosition, checkAndSetAllSurounded } from "./logic/algorithms";

function App() {
  const [currentBoardState, setCurrentBoardState] = useState(startingState());

  //let newState = startingState();
  const handleClick = (positionClicked) => {
    let newState = { ...currentBoardState }; //shallow copy so that it can be modified and resubmitted for render
    newState = enableAll(newState);
    // moves tokens around
    newState.pereperes[findOpenPosition(currentBoardState)].team =
      currentBoardState.pereperes[positionClicked].team;
    newState.pereperes[positionClicked].team = null;
    //change player
    newState.turn = togglePlayer(newState.turn);
    //disable inactive player
    newState = disableInactivePlayer(newState);
    setCurrentBoardState(newState);
    newState = checkAndSetAllSurounded(newState);
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
