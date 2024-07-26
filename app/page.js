'use client'
import React, { useState } from 'react';
import Game from '../components/Game';
import Toolbar from '../components/Toolbar';
import { SudokuProvider } from '../components/SudokuContext';
import SnackBarProvider from '@/components/SnackBarContext';
import { emptyGrid } from '@/utils/appconfig';
import { useSudoku } from '../components/SudokuContext';



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
