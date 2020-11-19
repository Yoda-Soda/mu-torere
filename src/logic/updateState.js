// allows for predictable state before logic gets applied
const resetState = () => {
  return [
    { turn: "black" },
    { team: "black", enabled: false },
    { team: "black", enabled: false },
    { team: "black", enabled: false },
    { team: "black", enabled: false },
    { team: "black", enabled: false },
    { team: "black", enabled: false },
    { team: "black", enabled: false },
    { team: "black", enabled: false },
    { team: "black", enabled: false },
  ];
};
// allows for predictable starting state for the start of the game
const startingState = () => {
  return [
    { turn: "white" },
    { team: "black", enabled: false },
    { team: "black", enabled: false },
    { team: "black", enabled: false },
    { team: "black", enabled: false },
    { team: "white", enabled: true },
    { team: "white", enabled: false },
    { team: "white", enabled: false },
    { team: "white", enabled: true },
    { team: null, enabled: true },
  ];
};

module.exports = { resetState, startingState };
