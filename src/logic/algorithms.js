const { togglePlayer } = require("./updateState");

const findOpenPosition = (state) => {
  for (const token of state.pereperes) {
    if (token.team === null) {
      return token.position;
    }
  }
};

const nextToToken = (position) => {
  if (position === 0) {
    return [1, 8, 7];
  }
  if (position === 8) {
    return [0, 1, 2, 3, 4, 5, 6, 7];
  }
  if (position === 7) {
    return [0, 8, 6];
  }
  return [position + 1, 8, position - 1];
};

const checkIfEmpty = (adjacentToken, state) => {
  if (state.pereperes[adjacentToken].team === null) {
    return true;
  }
  return false;
};
//parameter is an array positions
const checkIfSurounded = (adjacentTokenPositions, state) => {
  let counter = 0;
  for (const adjacentToken of adjacentTokenPositions) {
    if (!checkIfEmpty(adjacentToken, state)) {
      counter++;
    }
  }
  if (counter === adjacentTokenPositions.length) {
    return true;
  }
  return false;
};

const checkAndSetAllSurounded = (state) => {
  //check each token if it's surrounded
  for (const token of state.pereperes) {
    if (checkIfSurounded(nextToToken(token.position), state)) {
      token.enabled = false;
    }
  }
  return state;
};

//checks(provides true and false) for a specific tokens surroundings to see if it has at least one opponent next to it
const checkForAdjacentOpponent = (tokenPosition, state) => {
  //loops through surrounded tokens and checks for any tokens being the opposite color then itself
  for (const adjacentTokenPosition of nextToToken(tokenPosition)) {
    if (
      state.pereperes[adjacentTokenPosition].team ===
      togglePlayer(state.pereperes[tokenPosition].team)
    ) {
      return true;
    }
  }
  return false;
};

const updateForAdjacentOpponent = (state) => {
  //check all tokens if they have a opposition token next to them
  for (const token of state.pereperes) {
    if (!checkForAdjacentOpponent(token.position, state)) {
      token.enabled = false; //disable token if no opposition token has been found
    }
  }
  return state;
};

module.exports = {
  findOpenPosition,
  checkAndSetAllSurounded,
  updateForAdjacentOpponent,
};
