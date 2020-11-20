const {
  resetState,
  startingState,
  togglePlayer,
  disableInactivePlayer,
} = require("./updateState");
const defaultStateBlack = [
  { turn: "black" },
  { posistion: 0, team: "black", enabled: true },
  { posistion: 1, team: "black", enabled: true },
  { posistion: 2, team: "black", enabled: true },
  { posistion: 3, team: "black", enabled: true },
  { posistion: 4, team: "black", enabled: true },
  { posistion: 5, team: "black", enabled: true },
  { posistion: 6, team: "black", enabled: true },
  { posistion: 7, team: "black", enabled: true },
  { posistion: 8, team: "black", enabled: true },
];
const defaultStateWhite = [
  { turn: "white" },
  { posistion: 0, team: "white", enabled: true },
  { posistion: 1, team: "white", enabled: true },
  { posistion: 2, team: "white", enabled: true },
  { posistion: 3, team: "white", enabled: true },
  { posistion: 4, team: "white", enabled: true },
  { posistion: 5, team: "white", enabled: true },
  { posistion: 6, team: "white", enabled: true },
  { posistion: 7, team: "white", enabled: true },
  { posistion: 8, team: "white", enabled: true },
];
describe("I have a way to reset my state", () => {
  test("It should restore the state to a predictable state", () => {
    const state = resetState();
    expect(state).toEqual(defaultStateBlack);
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

describe("I have a way to disable tokens of the inactive player", () => {
  test("It should disable those tokens for white", () => {
    const state = disableInactivePlayer(defaultStateBlack);
    expect(state).toEqual([
      { turn: "black" },
      { posistion: 0, team: "black", enabled: true },
      { posistion: 1, team: "black", enabled: true },
      { posistion: 2, team: "black", enabled: true },
      { posistion: 3, team: "black", enabled: true },
      { posistion: 4, team: "black", enabled: true },
      { posistion: 5, team: "black", enabled: true },
      { posistion: 6, team: "black", enabled: true },
      { posistion: 7, team: "black", enabled: true },
      { posistion: 8, team: "black", enabled: true },
    ]);
  });

  test("It should disable those tokens for black", () => {
    defaultStateBlack[0].turn = "white";
    const state = disableInactivePlayer(defaultStateBlack);
    expect(state).toEqual([
      { turn: "white" },
      { posistion: 0, team: "black", enabled: false },
      { posistion: 1, team: "black", enabled: false },
      { posistion: 2, team: "black", enabled: false },
      { posistion: 3, team: "black", enabled: false },
      { posistion: 4, team: "black", enabled: false },
      { posistion: 5, team: "black", enabled: false },
      { posistion: 6, team: "black", enabled: false },
      { posistion: 7, team: "black", enabled: false },
      { posistion: 8, team: "black", enabled: false },
    ]);
  });

  describe("I have a way to disable tokens of the inactive player", () => {
    test("It should disable those tokens for white", () => {
      const state = disableInactivePlayer([
        { turn: "black" },
        { posistion: 0, team: "white", enabled: true },
        { posistion: 1, team: "white", enabled: true },
        { posistion: 3, team: "white", enabled: true },
        { posistion: 4, team: "white", enabled: true },
        { posistion: 5, team: "white", enabled: true },
        { posistion: 6, team: "white", enabled: true },
        { posistion: 7, team: "white", enabled: true },
        { posistion: 8, team: "white", enabled: true },
      ]);
      expect(state).toEqual([
        { turn: "black" },
        { posistion: 0, team: "white", enabled: false },
        { posistion: 1, team: "white", enabled: false },
        { posistion: 3, team: "white", enabled: false },
        { posistion: 4, team: "white", enabled: false },
        { posistion: 5, team: "white", enabled: false },
        { posistion: 6, team: "white", enabled: false },
        { posistion: 7, team: "white", enabled: false },
        { posistion: 8, team: "white", enabled: false },
      ]);
    });

    test("It should disable those tokens for black", () => {
      const state = disableInactivePlayer([
        { turn: "white" },
        { posistion: 0, team: "white", enabled: true },
        { posistion: 1, team: "white", enabled: true },
        { posistion: 2, team: "white", enabled: true },
        { posistion: 3, team: "white", enabled: true },
        { posistion: 4, team: "white", enabled: true },
        { posistion: 5, team: "white", enabled: true },
        { posistion: 6, team: "white", enabled: true },
        { posistion: 7, team: "white", enabled: true },
        { posistion: 8, team: "white", enabled: true },
      ]);
      expect(state).toEqual([
        { turn: "white" },
        { posistion: 0, team: "white", enabled: true },
        { posistion: 1, team: "white", enabled: true },
        { posistion: 2, team: "white", enabled: true },
        { posistion: 3, team: "white", enabled: true },
        { posistion: 4, team: "white", enabled: true },
        { posistion: 5, team: "white", enabled: true },
        { posistion: 6, team: "white", enabled: true },
        { posistion: 7, team: "white", enabled: true },
        { posistion: 8, team: "white", enabled: true },
      ]);
    });
  });
});
