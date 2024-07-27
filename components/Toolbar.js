import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useSudoku } from '../utils/SudokuContext';
import { emptyGrid } from '@/utils/appconfig';
import { useSnackbar } from '../utils/SnackBarContext';
import { solve } from '@/utils/solve';
import TemplateModal from './TemplateModal';


const Toolbar = ({editing,setEditing}) => {
  const [loaded, setLoaded] = useState(false);
  const { sudokuGrid, setSudokuGrid } = useSudoku();
  const showSnackbar = useSnackbar();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
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
  const getName= ()=>{
    return "template"
  }
  
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
    const templates = JSON.parse(window.localStorage.getItem('sudokuTemplates')) || {};
    let name = getName();
    templates[name] = clonedGrid;
    localStorage.setItem('sudokuTemplates', JSON.stringify(templates));
    setEditing(false);
    handleReset();
}
const handleOpenModal = () => setModalOpen(true);

const handleCloseModal = () => setModalOpen(false);

const handleSelectTemplate = (name) => {
  const templates = JSON.parse(localStorage.getItem('sudokuTemplates')) || {};
  setSelectedTemplate(templates[name]);
  setModalOpen(false);
};

useEffect(()=>{
  if (selectedTemplate){
    setSudokuGrid(selectedTemplate);
    setLoaded(true);
    showSnackbar("Template Loaded successfully", "success","green");
  }
  else{
    setLoaded(false);
    showSnackbar("No template selected. Edit or Load a Template",'error','red');
  }
},[selectedTemplate])
  
  return (
    <>
    <ButtonGroup color="primary" variant="contained" aria-label="sudoku toolbar">
      
      {loaded &&
        <Button onClick={handleSolve}>Solve</Button>
      }
      
      {editing ?
        <>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleReset}>Reset</Button>
        </>
        :
        <>
        <Button onClick={handleEdit}>Edit</Button>
        <Button onClick={handleOpenModal}>Load Template</Button>
        </>
      }
    </ButtonGroup>
    <TemplateModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSelect={handleSelectTemplate}
      />
    </>
  );
};

export default Toolbar;
