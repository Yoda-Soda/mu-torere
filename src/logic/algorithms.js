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

const checkIfSurounded = (state) => {
  //check each token if it's surrounded
  for (let index = 1; index < state.length; index++) {
    const element = state[index];
    //check each adjacent token if it's not open
    for (const adjacentToken of nextToToken(element.position)) {
      if (state)
        for (let innerIndex = 1; innerIndex < state.length; innerIndex++) {
          const innerElement = state[innerIndex];
          if (
            innerElement.position === adjacentToken &&
            innerElement.team !== null
          ) {
            state;
          }
        }
    }
  }
};

module.exports = { findOpenPosition, checkSuroundings: checkIfSurounded };
