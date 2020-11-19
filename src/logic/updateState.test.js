const { resetState, startingState } = require("./updateState");

describe("I have a way to reset my state", () => {
  test("It should restore the state to a predictable state", () => {
    const state = resetState();
    expect(state).toEqual([
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
    ]);
  });
});

describe("I have a way to start my state", () => {
  test("It should restore the state to a predictable starting state", () => {
    const state = startingState();
    expect(state).toEqual([
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
    ]);
  });
});
