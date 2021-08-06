import React, { useState } from "react";

const colorNames = [
  "Aquamarine",
  "BlueViolet",
  "Chartreuse",
  "CornflowerBlue",
  "Thistle",
  "SpringGreen",
  "SaddleBrown",
  "PapayaWhip",
  "MistyRose",
];

export default function ColorPicker_Map() {
  const [color, setColor] = useState("Tomato"); //Se define el valor inicial del estado.

  const divStyle2 = { backgroundColor: color };
  // Se rendea todos los botones con un map, utilizando el array colorNames
  return (
    <div style={divStyle2}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName) => (
        <button onClick={() => setColor(colorName)} key={colorName}>
          {colorName}
        </button>
      ))}
    </div>
  );
}
