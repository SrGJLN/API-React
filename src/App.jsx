import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MiApi from "./components/MiApi";
import Buscador from './components/Buscador';

function App() {

  const [filterValue, setfilterValue] = useState('');
  
  const handleFilterSubmit = (value) =>{
    setfilterValue(value);
  };
  
  return (
    <>
      <div className="App">
        <h1 style={{color: 'white'}}>Imagenes</h1>
        <Buscador 
        onSubmit={handleFilterSubmit}
        />
          <MiApi 
          filterValue={filterValue}
          />
      </div>
    </>
  );
}

export default App;