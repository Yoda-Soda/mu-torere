// allows for predictable state before logic gets applied
const resetState = () => {
  return [
    { turn: "black" },
    { team: "black" },
    { team: "black" },
    { team: "black" },
    { team: "black" },
    { team: "black" },
    { team: "black" },
    { team: "black" },
    { team: "black" },
    { team: "black" },
  ];
};
// allows for predictable starting state for the start of the game
const startingState = () => {
  return [
    { turn: "white" },
    { team: "black" },
    { team: "black" },
    { team: "black" },
    { team: "black" },
    { team: "white" },
    { team: "white" },
    { team: "white" },
    { team: "white" },
    { team: null },
  ];
};

module.exports = { resetState, startingState };
