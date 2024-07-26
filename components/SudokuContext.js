import React, { createContext, useContext, useState } from 'react';
import { checkColumn, checkGroup, checkRow } from '@/utils/gameUtils';
import { useSnackbar } from './SnackBarContext';
// Create the context
const SudokuContext = createContext();
import { emptyGrid } from '@/utils/appconfig';

// Create a provider component
export const SudokuProvider = ({ children }) => {
    const [sudokuGrid, setSudokuGrid] = useState(emptyGrid);
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
      showSnackbar("Invalid Entry");
    }

    

  };

  return (
    <SudokuContext.Provider value={{ sudokuGrid, onCellChange }}>
      {children}
    </SudokuContext.Provider>
  );
};

// Custom hook to use the Sudoku context
export const useSudoku = () => useContext(SudokuContext);
