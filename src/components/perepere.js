import React from "react";


const Perepere = (posistion, perepereColor) => {
    let color;
    if (perepereColor === "b"){
        color = "black"
    }
  return (
    <svg width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke={color}
        stroke-width="4"
        fill="black"
      />
    </svg>
  )
  ;
};

export default Perepere;
