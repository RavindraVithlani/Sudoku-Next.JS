import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useSudoku } from '../utils/SudokuContext';
import { emptyGrid } from '@/utils/appconfig';
import { useSnackbar } from '../utils/SnackBarContext';
import { solve } from '@/utils/solve';


const Toolbar = ({editing,setEditing}) => {
  const [loaded, setLoaded] = useState(false);
  const { sudokuGrid, setSudokuGrid } = useSudoku();
  const showSnackbar = useSnackbar();
  
  const handleReset = () => {
    const clonedGrid = emptyGrid.map(row => row.map(cell => ({ ...cell })));
    setSudokuGrid(clonedGrid);
  };

  const handleSolve = () => {
    const solvedGrid = solve(sudokuGrid);
    if (solvedGrid){
      showSnackbar("Sudoku Solved", "success","green");
      setSudokuGrid(solvedGrid);
    }
    else{
      showSnackbar("No Solution","error","red");
    }
  };

  
  const handleEdit = ()=>{
    setEditing(true);
  }
  const handleSave = ()=>{
    const clonedGrid = sudokuGrid.map(row => 
      row.map(cell => ({
        ...cell,
        readonly: cell.value !== '' ? true : cell.readonly
      }))
    );
    localStorage.setItem('sudokuTemplate', JSON.stringify(clonedGrid));   
    setEditing(false);
    handleReset();
    handleLoad();
  }

  const handleLoad = () => {
    const savedGrid = localStorage.getItem('sudokuTemplate');
    if (savedGrid) {
      setSudokuGrid(JSON.parse(savedGrid));
      setLoaded(true);
      showSnackbar("Template Loaded successfully", "success","green");
    } else {
      setLoaded(false);
      showSnackbar("No saved template found. Kindly edit and save a new template.",'error','red');
    }
  };
  useEffect(()=>{
    handleLoad();
  },[])
  return (
    <ButtonGroup color="primary" variant="contained" aria-label="sudoku toolbar">
      
      {loaded &&
        <Button onClick={handleSolve}>Solve</Button>
      }
      <Button onClick={handleEdit}>Edit</Button>
      {editing ?
        <>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleReset}>Reset</Button>
        </>
        :
        <Button onClick={handleLoad}>Load Template</Button>
      }
    </ButtonGroup>
  );
};

export default Toolbar;
