import React from 'react';
import './App.css';
import Cars from './Cars';
import CarProvider from './context/CarProvider';

function App() {
  return (
    <CarProvider>
      <Cars />
    </CarProvider>
  );
}

export default App;
