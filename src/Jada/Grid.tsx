import React, { useState } from "react";

// interface gridProps {
//     rows
// }

const Grid: React.FC = () => {
  //use Array.from to create 3 new array grid
  const grid = Array.from({ length: 3 }, () => new Array(3).fill("X"));
  const [on, setOn] = useState(false);

  return (
    <div>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className={`cell ${on ? "on" : "off"}`}
              onClick={() => {
                setOn(!on);
              }}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
