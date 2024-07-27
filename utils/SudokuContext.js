import React, { createContext, useContext, useState } from 'react';
import { checkColumn, checkGroup, checkRow } from '@/utils/gameUtils';
import { useSnackbar } from './SnackBarContext';
// Create the context
const SudokuContext = createContext();
import { emptyGrid } from '@/utils/appconfig';

// Create a provider component
export const SudokuProvider = ({ children }) => {
    const clonedGrid = emptyGrid.map(row => row.map(cell => ({ ...cell })));
    const [sudokuGrid, setSudokuGrid] = useState(clonedGrid);
    const showSnackbar = useSnackbar();
      

  // Function to update the cell value
  const onCellChange = (rowIndex, colIndex, value, group, target) => {
    
    if(value== "" || checkColumn(rowIndex,colIndex,value,sudokuGrid)&& checkRow(rowIndex,colIndex,value,sudokuGrid)&& checkGroup(group,value, target))
    {
      const updatedGrid = [...sudokuGrid];
      updatedGrid[rowIndex][colIndex] = { ...updatedGrid[rowIndex][colIndex], value };
      setSudokuGrid(updatedGrid);
    }
    else{
      showSnackbar("Invalid Entry",'error','red');
    }

    

  };

  return (
    <SudokuContext.Provider value={{ sudokuGrid, onCellChange,setSudokuGrid }}>
      {children}
    </SudokuContext.Provider>
  );
};

// Custom hook to use the Sudoku context
export const useSudoku = () => useContext(SudokuContext);
