import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useSudoku } from './SudokuContext';
import { emptyGrid } from '@/utils/appconfig';
import { useSnackbar } from './SnackBarContext';


const Toolbar = ({editing,setEditing}) => {
  const [loaded, setLoaded] = useState(false);
  const { sudokuGrid, setSudokuGrid } = useSudoku();
  const showSnackbar = useSnackbar();
  
  const handleReset = () => {
    const clonedGrid = emptyGrid.map(row => row.map(cell => ({ ...cell })));
    setSudokuGrid(clonedGrid);
  };

  const handleSolve = () => {
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
      showSnackbar("Template Loaded successfully");
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
      {editing &&
        <>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleReset}>Reset</Button>
        </>
      }
      <Button onClick={handleLoad}>Load Template</Button>
    </ButtonGroup>
  );
};

export default Toolbar;
