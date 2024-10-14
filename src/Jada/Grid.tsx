import React, { useEffect, useState } from "react";
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
  const [clickOrder, setclickOrder] = useState<{ row: number; cell: number }[]>(
    []
  );

  function checkGridCompleted(gridState: boolean[][]) {
    return gridState.every((row) => row.every((cell) => cell));
  }

  // const isGridCompleted = checkGridCompleted(gridState);

  const handleClick = (rowIndex: number, cellIndex: number) => {
    const newGridState = gridState.map((row, currentRowIndex) =>
      row.map((cell, currentCellIndex) =>
        currentRowIndex === rowIndex && currentCellIndex === cellIndex
          ? !cell
          : cell
      )
    );
    setclickOrder([...clickOrder, { row: rowIndex, cell: cellIndex }]);
    setGridState(newGridState);

    if (checkGridCompleted(newGridState)) {
      clickOrder.forEach(({ row, cell }) => {
        setGridState((prevGridState) =>
          prevGridState.map((r, rowIndex) =>
            r.map((c, cellIndex) =>
              rowIndex === row && cellIndex === cell ? !c : c
            )
          )
        );
      });
    }
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
