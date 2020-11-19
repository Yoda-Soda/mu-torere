const {
  resetState,
  startingState,
  togglePlayer,
  findOpenPosition,
} = require("./updateState");

describe("I have a way to reset my state", () => {
  test("It should restore the state to a predictable state", () => {
    const state = resetState();
    expect(state).toEqual([
      { turn: "black" },
      { posistion: 0, team: "black", enabled: false },
      { posistion: 1, team: "black", enabled: false },
      { posistion: 3, team: "black", enabled: false },
      { posistion: 4, team: "black", enabled: false },
      { posistion: 5, team: "black", enabled: false },
      { posistion: 6, team: "black", enabled: false },
      { posistion: 7, team: "black", enabled: false },
      { posistion: 8, team: "black", enabled: false },
    ]);
  });
});

describe("I have a way to start my state", () => {
  test("It should restore the state to a predictable starting state", () => {
    const state = startingState();
    expect(state).toEqual([
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
    ]);
  });
});

describe("I have a way to change my active player", () => {
  test("It should toggle the active player from white to black", () => {
    const state = togglePlayer("white");
    expect(state).toBe("black");
  });

  test("It should toggle the active player from black to white", () => {
    const state = togglePlayer("black");
    expect(state).toBe("white");
  });
});

describe("I have a way of finding the open/null position on the board", () => {
  const testState = [
    { turn: "black" },
    { posistion: 0, team: "black", enabled: false },
    { posistion: 1, team: "black", enabled: false },
    { posistion: 3, team: "black", enabled: false },
    { posistion: 4, team: "black", enabled: false },
    { posistion: 5, team: "black", enabled: false },
    { posistion: 6, team: "black", enabled: false },
    { posistion: 7, team: "black", enabled: false },
    { posistion: 8, team: "black", enabled: false },
  ];
  for (let counter = 1; counter < testState.length; counter++) {
    const element = testState[counter];
    test(`It should provide me with the correct position for ${
      counter - 1
    }`, () => {
      element.team = null;
      const position = findOpenPosition(testState);
      expect(position).toEqual(counter - 1);
      element.team = "black";
    });
  }
});
