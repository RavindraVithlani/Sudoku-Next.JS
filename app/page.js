'use client'
import React, { useState } from 'react';
import Game from '../components/Game';
import Toolbar from '../components/Toolbar';
import { SudokuProvider } from '../utils/SudokuContext';
import SnackBarProvider from '@/utils/SnackBarContext';
import { emptyGrid } from '@/utils/appconfig';
import { useSudoku } from '../utils/SudokuContext';



const Home = () => {
  const [editing, setEditing] = useState(false);
  return (
    <>
    <SnackBarProvider>
      <SudokuProvider>
        <Game editing={editing}/>
        <Toolbar editing ={editing} setEditing={setEditing}/>
      </SudokuProvider>
    </SnackBarProvider>
    </>
  );
};

export default Home;
