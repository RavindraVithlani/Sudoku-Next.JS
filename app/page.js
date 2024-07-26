'use client'
import React, { useState } from 'react';
import Game from '../components/Game';
import Toolbar from '../components/Toolbar';
import { SudokuProvider } from '../components/SudokuContext';
import SnackBarProvider from '@/components/SnackBarContext';
import { emptyGrid } from '@/utils/appconfig';
import { useSudoku } from '../components/SudokuContext';



const Home = () => {
  

  return (
    <>
    <SnackBarProvider>
      <SudokuProvider>
        <Game/>
        <Toolbar />
      </SudokuProvider>
    </SnackBarProvider>
    </>
  );
};

export default Home;
