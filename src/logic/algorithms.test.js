const { findOpenPosition } = require("./algorithms");

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
