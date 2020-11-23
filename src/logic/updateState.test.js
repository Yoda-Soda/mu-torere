const {
  resetState,
  startingState,
  togglePlayer,
  disableInactivePlayer,
  enableAll,
} = require("./updateState");
const defaultStateBlack = {
  turn: "black",
  pereperes: [
    { position: 0, team: "black", enabled: true },
    { position: 1, team: "black", enabled: true },
    { position: 2, team: "black", enabled: true },
    { position: 3, team: "black", enabled: true },
    { position: 4, team: "black", enabled: true },
    { position: 5, team: "black", enabled: true },
    { position: 6, team: "black", enabled: true },
    { position: 7, team: "black", enabled: true },
    { position: 8, team: "black", enabled: true },
  ],
};
describe("I have a way to reset my state", () => {
  test("It should restore the state to a predictable state", () => {
    const state = resetState();
    expect(state).toEqual(defaultStateBlack);
  });
});

describe("I have a way to start my state", () => {
  test("It should restore the state to a predictable starting state", () => {
    const state = startingState();
    expect(state).toEqual({
      turn: "white",
      pereperes: [
        { position: 0, team: "black", enabled: false },
        { position: 1, team: "black", enabled: false },
        { position: 2, team: "black", enabled: false },
        { position: 3, team: "black", enabled: false },
        { position: 4, team: "white", enabled: true },
        { position: 5, team: "white", enabled: false },
        { position: 6, team: "white", enabled: false },
        { position: 7, team: "white", enabled: true },
        { position: 8, team: null, enabled: true },
      ],
    });
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
    expect(state).toEqual({
      turn: "black",
      pereperes: [
        { position: 0, team: "black", enabled: true },
        { position: 1, team: "black", enabled: true },
        { position: 2, team: "black", enabled: true },
        { position: 3, team: "black", enabled: true },
        { position: 4, team: "black", enabled: true },
        { position: 5, team: "black", enabled: true },
        { position: 6, team: "black", enabled: true },
        { position: 7, team: "black", enabled: true },
        { position: 8, team: "black", enabled: true },
      ],
    });
  });

  test("It should disable those tokens for black", () => {
    defaultStateBlack.turn = "white";
    const state = disableInactivePlayer(defaultStateBlack);
    expect(state).toEqual({
      turn: "white",
      pereperes: [
        { position: 0, team: "black", enabled: false },
        { position: 1, team: "black", enabled: false },
        { position: 2, team: "black", enabled: false },
        { position: 3, team: "black", enabled: false },
        { position: 4, team: "black", enabled: false },
        { position: 5, team: "black", enabled: false },
        { position: 6, team: "black", enabled: false },
        { position: 7, team: "black", enabled: false },
        { position: 8, team: "black", enabled: false },
      ],
    });
  });

  describe("I have a way to disable tokens of the inactive player", () => {
    test("It should disable those tokens for white", () => {
      const state = disableInactivePlayer({
        turn: "black",
        pereperes: [
          { position: 0, team: "white", enabled: true },
          { position: 1, team: "white", enabled: true },
          { position: 3, team: "white", enabled: true },
          { position: 4, team: "white", enabled: true },
          { position: 5, team: "white", enabled: true },
          { position: 6, team: "white", enabled: true },
          { position: 7, team: "white", enabled: true },
          { position: 8, team: "white", enabled: true },
        ],
      });
      expect(state).toEqual({
        turn: "black",
        pereperes: [
          { position: 0, team: "white", enabled: false },
          { position: 1, team: "white", enabled: false },
          { position: 3, team: "white", enabled: false },
          { position: 4, team: "white", enabled: false },
          { position: 5, team: "white", enabled: false },
          { position: 6, team: "white", enabled: false },
          { position: 7, team: "white", enabled: false },
          { position: 8, team: "white", enabled: false },
        ],
      });
    });

    test("It should disable those tokens for black", () => {
      const state = disableInactivePlayer({
        turn: "white",
        pereperes: [
          { position: 0, team: "white", enabled: true },
          { position: 1, team: "white", enabled: true },
          { position: 2, team: "white", enabled: true },
          { position: 3, team: "white", enabled: true },
          { position: 4, team: "white", enabled: true },
          { position: 5, team: "white", enabled: true },
          { position: 6, team: "white", enabled: true },
          { position: 7, team: "white", enabled: true },
          { position: 8, team: "white", enabled: true },
        ],
      });
      expect(state).toEqual({
        turn: "white",
        pereperes: [
          { position: 0, team: "white", enabled: true },
          { position: 1, team: "white", enabled: true },
          { position: 2, team: "white", enabled: true },
          { position: 3, team: "white", enabled: true },
          { position: 4, team: "white", enabled: true },
          { position: 5, team: "white", enabled: true },
          { position: 6, team: "white", enabled: true },
          { position: 7, team: "white", enabled: true },
          { position: 8, team: "white", enabled: true },
        ],
      });
    });
  });
});

describe("I have a function that can reset state to all enabled", () => {
  test("It should not effect enabled tokens", () => {
    const state = enableAll({
      turn: "white",
      pereperes: [
        { position: 0, team: "white", enabled: true },
        { position: 1, team: "white", enabled: true },
        { position: 2, team: "white", enabled: true },
        { position: 3, team: "white", enabled: true },
        { position: 4, team: "white", enabled: true },
        { position: 5, team: "white", enabled: true },
        { position: 6, team: "white", enabled: true },
        { position: 7, team: "white", enabled: true },
        { position: 8, team: "white", enabled: true },
      ],
    });
    expect(state).toEqual({
      turn: "white",
      pereperes: [
        { position: 0, team: "white", enabled: true },
        { position: 1, team: "white", enabled: true },
        { position: 2, team: "white", enabled: true },
        { position: 3, team: "white", enabled: true },
        { position: 4, team: "white", enabled: true },
        { position: 5, team: "white", enabled: true },
        { position: 6, team: "white", enabled: true },
        { position: 7, team: "white", enabled: true },
        { position: 8, team: "white", enabled: true },
      ],
    });
  });

  test("It should toggle disabled tokens", () => {
    const state = enableAll({
      turn: "white",
      pereperes: [
        { position: 0, team: "white", enabled: false },
        { position: 1, team: "white", enabled: false },
        { position: 2, team: "white", enabled: false },
        { position: 3, team: "white", enabled: false },
        { position: 4, team: "white", enabled: false },
        { position: 5, team: "white", enabled: false },
        { position: 6, team: "white", enabled: false },
        { position: 7, team: "white", enabled: false },
        { position: 8, team: "white", enabled: false },
      ],
    });
    expect(state).toEqual({
      turn: "white",
      pereperes: [
        { position: 0, team: "white", enabled: true },
        { position: 1, team: "white", enabled: true },
        { position: 2, team: "white", enabled: true },
        { position: 3, team: "white", enabled: true },
        { position: 4, team: "white", enabled: true },
        { position: 5, team: "white", enabled: true },
        { position: 6, team: "white", enabled: true },
        { position: 7, team: "white", enabled: true },
        { position: 8, team: "white", enabled: true },
      ],
    });
  });
});
