import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import Cell from './Cell';
import { useSudoku } from '../utils/SudokuContext';
import { emptyGrid } from '@/utils/appconfig';

const Game = ({editing}) => {
  const { sudokuGrid, onCellChange,setSudokuGrid } = useSudoku();
  useEffect(()=>{

    if (editing){
      const clonedGrid = emptyGrid.map(row => 
        row.map(cell => ({
          ...cell
          }))
        );
        setSudokuGrid(clonedGrid);
    }
    else{
      const clonedGrid = sudokuGrid.map(row => 
        row.map(cell => ({
          ...cell,
          readonly: true
        })))
        setSudokuGrid(clonedGrid);
    }
    

  },[editing])
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
