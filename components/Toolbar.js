import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useSudoku } from './SudokuContext';
import { emptyGrid } from '@/utils/appconfig';

const Toolbar = () => {
  const { setSudokuGrid } = useSudoku();
  const handleReset = () => {
    setSudokuGrid(emptyGrid);
  };

  const handleSolve = () => {
  };

  
  const handleEdit = ()=>{

  }
  return (
    <ButtonGroup color="primary" variant="contained" aria-label="sudoku toolbar">
      <Button onClick={handleReset}>Reset</Button>
      <Button onClick={handleSolve}>Solve</Button>
      <Button onClick={handleEdit}>Edit</Button>
    </ButtonGroup>
  );
};

export default Toolbar;
