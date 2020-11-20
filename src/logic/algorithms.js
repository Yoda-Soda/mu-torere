const findOpenPosition = (state) => {
  for (let counter = 1; counter < state.length; counter++) {
    const element = state[counter];
    if (element.team === null) {
      return counter - 1;
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

module.exports = { findOpenPosition, checkAndSetAllSurounded };
