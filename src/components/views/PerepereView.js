import Perepere from "../Perepere";
const state = {
  turn: "black",
  pereperes: [
    { posistion: 0, team: "white", enabled: true },
    { posistion: 1, team: "black", enabled: true },
    { posistion: 2, team: "black", enabled: true },
    { posistion: 3, team: "black", enabled: true },
    { posistion: 4, team: "black", enabled: true },
    { posistion: 5, team: "black", enabled: true },
    { posistion: 6, team: "black", enabled: true },
    { posistion: 7, team: "black", enabled: true },
    { posistion: 8, team: "black", enabled: true },
  ],
};

const PerepereView = () => {
  const testMap = state.pereperes.map((element) => {
    return (
      <Perepere
        key={element.posistion}
        position={element.posistion}
        team={element.team}
        enable={element.enabled}
      />
    );
  });
  return testMap;
};

export default PerepereView;
