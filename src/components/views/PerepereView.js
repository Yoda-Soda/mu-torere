import Perepere from "../Perepere";

const PerepereView = (props) => {
  console.log("🔥", props.data);
  return props.data.pereperes.map((token) => {
    return (
      <Perepere
        key={token.position}
        position={token.position}
        team={token.team}
        enabled={token.enabled}
        onTokenClick={props.onShowClick}
      />
    );
  });
};

export default PerepereView;
