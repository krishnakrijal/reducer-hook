import React, { useState } from 'react';
import './App.css';
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import Example from './components/Example'
import DataFetching from './components/DataFetching';
import UseState from './components/UseState';

function App() {
  return (
    <div className="App">
    {/* <DataFetching/> */}
    <UseState/>
      {/* <CounterOne/> */}
     {/* <CounterTwo/> */}
     
    </div>
  );
}

export default App;
