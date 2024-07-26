import React from 'react';
import { Grid } from '@mui/material';
import Cell from './Cell';
import { useSudoku } from './SudokuContext';

const Game = () => {
  const { sudokuGrid, onCellChange } = useSudoku();
  

  return (
    <Grid container spacing={0.5} className='sudoku'>
      {sudokuGrid.map((row, rowIndex) => (
        <Grid key={rowIndex} container item xs={10} spacing={0.5}>
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell.value}
              readonly={cell.readonly}
              group = {cell.group}
              onChange={(value,group, target) => onCellChange(rowIndex, colIndex, value,group, target)}
            />
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Game;
