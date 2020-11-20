const { findOpenPosition, checkAndSetAllSurounded } = require("./algorithms");

describe("I have a way of finding the open/null position on the board", () => {
  const testState = {
    turn: "black",
    pereperes: [
      { position: 0, team: "black", enabled: false },
      { position: 1, team: "black", enabled: false },
      { position: 3, team: "black", enabled: false },
      { position: 4, team: "black", enabled: false },
      { position: 5, team: "black", enabled: false },
      { position: 6, team: "black", enabled: false },
      { position: 7, team: "black", enabled: false },
      { position: 8, team: "black", enabled: false },
    ],
  };
  let counter = 0;
  for (const token of testState.pereperes) {
    test(`It should provide me with the correct position for ${counter}`, () => {
      token.team = null;
      const position = findOpenPosition(testState);
      expect(position).toEqual();
      token.team = "black";
    });
  }
});

describe("I have a way to check if a token is surounded by other tokens and can't move", () => {
  test(`It should disable a token`, () => {
    const state = checkAndSetAllSurounded({
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
    expect(state).toEqual({
      turn: "black",
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
});
