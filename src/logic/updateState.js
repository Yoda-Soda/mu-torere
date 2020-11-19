// allows for predictable state before logic gets applied
const resetState = () => {
  return [
    { turn: "black" },
    { posistion: 0, team: "black", enabled: false },
    { posistion: 1, team: "black", enabled: false },
    { posistion: 3, team: "black", enabled: false },
    { posistion: 4, team: "black", enabled: false },
    { posistion: 5, team: "black", enabled: false },
    { posistion: 6, team: "black", enabled: false },
    { posistion: 7, team: "black", enabled: false },
    { posistion: 8, team: "black", enabled: false },
    { posistion: 9, team: "black", enabled: false },
  ];
};
// allows for predictable starting state for the start of the game
const startingState = () => {
  return [
    { turn: "white" },
    { posistion: 1, team: "black", enabled: false },
    { posistion: 2, team: "black", enabled: false },
    { posistion: 3, team: "black", enabled: false },
    { posistion: 4, team: "black", enabled: false },
    { posistion: 5, team: "white", enabled: true },
    { posistion: 6, team: "white", enabled: false },
    { posistion: 7, team: "white", enabled: false },
    { posistion: 8, team: "white", enabled: true },
    { posistion: 9, team: null, enabled: true },
  ];
};

const togglePlayer = (playerState) => {
  if (playerState === "black") return "white";
  return "black";
};

const findNull = (state) => {};

module.exports = { resetState, startingState, togglePlayer };
