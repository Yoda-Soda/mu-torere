// allows for predictable state before logic gets applied
const resetState = () => {
  return {
    turn: "black",
    pereperes: [
      { position: 0, team: "black", enabled: true },
      { position: 1, team: "black", enabled: true },
      { position: 2, team: "black", enabled: true },
      { position: 3, team: "black", enabled: true },
      { position: 4, team: "black", enabled: true },
      { position: 5, team: "black", enabled: true },
      { position: 6, team: "black", enabled: true },
      { position: 7, team: "black", enabled: true },
      { position: 8, team: "black", enabled: true },
    ],
  };
};
// allows for predictable starting state for the start of the game
const startingState = () => {
  return {
    turn: "white",
    pereperes: [
      { position: 0, team: "black", enabled: false },
      { position: 1, team: "black", enabled: false },
      { position: 2, team: "black", enabled: false },
      { position: 3, team: "black", enabled: false },
      { position: 4, team: "white", enabled: true },
      { position: 5, team: "white", enabled: false },
      { position: 6, team: "white", enabled: false },
      { position: 7, team: "white", enabled: true },
      { position: 8, team: null, enabled: true },
    ],
  };
};

const togglePlayer = (playerState) => {
  if (playerState === "black") return "white";
  return "black";
};

const disableInactivePlayer = (playerState) => {
  for (const token of playerState.pereperes) {
    if (token.team === togglePlayer(playerState.turn)) {
      token.enabled = false;
    }
  }
  return playerState;
};

module.exports = {
  resetState,
  startingState,
  togglePlayer,
  disableInactivePlayer,
};
