import React, { useEffect, useState } from "react";
import "./Grid.css";

const Grid: React.FC = () => {
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
  const [clickOrder, setClickOrder] = useState<{ row: number; cell: number }[]>(
    []
  );

  // Function to check if the entire grid is completed (i.e., all cells are true)
  const checkGridCompleted = (gridState: boolean[][]) => {
    for (let i = 0; i < gridState.length; i++) {
      for (let j = 0; j < gridState[i].length; j++) {
        if (!gridState[i][j]) {
          return false;
        }
      }
    }
    return true;
  };

  const isGridCompleted = checkGridCompleted(gridState);

  useEffect(() => {
    if (isGridCompleted) {
      // All cells clicked, reset them in the same order

      clickOrder.forEach(({ row, cell }) => {
        setTimeout(() => {
          setGridState((prevState) => {
            const newState = prevState.map((r, rowIndex) =>
              r.map((c, cellIndex) =>
                rowIndex === row && cellIndex === cell ? false : c
              )
            );
            return newState;
          });
        }, 1000);
      });

      // Clear the click order after reset
      setClickOrder([]);
    }
  }, [isGridCompleted, clickOrder]);

  const handleClick = (rowIndex: number, cellIndex: number) => {
    if (!gridState[rowIndex][cellIndex]) {
      // Proceed only if the cell is currently "off"
      const newGridState = gridState.map((row, currentRowIndex) =>
        row.map((cell, currentCellIndex) =>
          currentRowIndex === rowIndex && currentCellIndex === cellIndex
            ? true
            : cell
        )
      );
      setGridState(newGridState);

      // Add to the click order for reset later
      setClickOrder((prevOrder) => [
        ...prevOrder,
        { row: rowIndex, cell: cellIndex },
      ]);
    }
  };

  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => (
            <div key={`${rowIndex}-${cellIndex}`} className="grid-cell">
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
