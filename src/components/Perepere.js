import React from "react";

const Perepere = (props) => {
  if (props.team === null) {
    return null;
  }
  return (
    <svg
      width="100"
      height="100"
      className={"pos" + props.position}
      onClick={() => props.onTokenClick(props.position)}
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="black"
        strokeWidth="4"
        fill={props.team}
      />
    </svg>
  );
};

export default Perepere;
