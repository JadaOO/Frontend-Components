import React, { useState } from "react";
import "./Grid.css";

// interface gridProps {
//     rows
// }

const Grid: React.FC = () => {
  //use Array.from to create 3 new array grid
  // const grid = Array.from({ length: 3 }, () => new Array(3).fill("X"));
  const initialGridState = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const [gridState, setGridState] = useState(initialGridState);

  const handleClick = (rowIndex: number, cellIndex: number) => {
    const newGridState = gridState.map((row, currentRowIndex) =>
      row.map((cell, currentCellIndex) =>
        currentRowIndex === rowIndex && currentCellIndex === cellIndex
          ? !cell
          : cell
      )
    );
    setGridState(newGridState);
  };

  // const [on, setOn] = useState(false);

  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className="grid-cell"
              // onClick={() => {
              //   setOn(!on);
              // }}
            >
              <button
                className={`grid-cell ${
                  gridState[rowIndex][cellIndex] ? "on" : "off"
                }`}
                onClick={() => handleClick(rowIndex, cellIndex)}
              >
                {cell}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
