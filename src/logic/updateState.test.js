const { resetState, startingState, togglePlayers } = require("./updateState");

describe("I have a way to reset my state", () => {
  test("It should restore the state to a predictable state", () => {
    const state = resetState();
    expect(state).toEqual([
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
    ]);
  });
});

describe("I have a way to start my state", () => {
  test("It should restore the state to a predictable starting state", () => {
    const state = startingState();
    expect(state).toEqual([
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
    ]);
  });
});
