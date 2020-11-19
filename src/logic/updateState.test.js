const { resetState } = require("./updateState");

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
