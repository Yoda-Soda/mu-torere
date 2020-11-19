import React from "react";


const Perepere = (props) => {
    console.log(props.team);
  return (
    <svg width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="black"
        stroke-width="4"
        fill={props.team}
      />
    </svg>
  )
  ;
};

export default Perepere;
