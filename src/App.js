import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import TrafficCarProvider from './context/TrafficCarProvider';

function App() {
  return (
    <div className="container">
      <TrafficCarProvider>
      <Cars />
      <TrafficSignal />
      </TrafficCarProvider>
    </div>
  );
}

export default App;
