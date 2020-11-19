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

module.exports = { resetState };
