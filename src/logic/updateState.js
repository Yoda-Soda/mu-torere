// allows for predictable state before logic gets applied
const resetState = () => {
  return [
    { turn: "black" },
    { posistion: 0, team: "black", enabled: true },
    { posistion: 1, team: "black", enabled: true },
    { posistion: 3, team: "black", enabled: true },
    { posistion: 4, team: "black", enabled: true },
    { posistion: 5, team: "black", enabled: true },
    { posistion: 6, team: "black", enabled: true },
    { posistion: 7, team: "black", enabled: true },
    { posistion: 8, team: "black", enabled: true },
  ];
};
// allows for predictable starting state for the start of the game
const startingState = () => {
  return [
    { turn: "white" },
    { posistion: 0, team: "black", enabled: false },
    { posistion: 1, team: "black", enabled: false },
    { posistion: 2, team: "black", enabled: false },
    { posistion: 3, team: "black", enabled: false },
    { posistion: 4, team: "white", enabled: true },
    { posistion: 5, team: "white", enabled: false },
    { posistion: 6, team: "white", enabled: false },
    { posistion: 7, team: "white", enabled: true },
    { posistion: 8, team: null, enabled: true },
  ];
};

const togglePlayer = (playerState) => {
  if (playerState === "black") return "white";
  return "black";
};

const disableInactivePlayer = (playerState) => {
  for (let index = 1; index < playerState.length; index++) {
    const element = playerState[index];
    if (element.team === togglePlayer(playerState[0].turn)) {
      element.enabled = false;
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
