const findOpenPosition = (state) => {
  for (let counter = 1; counter < state.length; counter++) {
    const element = state[counter];
    if (element.team === null) {
      return counter - 1;
    }
  }
};

module.exports = { findOpenPosition };
