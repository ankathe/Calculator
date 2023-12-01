import './App.css';
import logo from './images/Projects logo.png';
import Boton from './component/bottom';
import Screen from './component/pantalla';
import Clear from './component/clear';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const addInput = valor => {
    setInput(input + valor);
  }
  const clearAccion =() =>setInput('');
  
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="projects logo" className="logo" 
        />
      </div>
      <div className="calculator-container">
        <Screen input={input}/>
        <div className="fila">
          <Boton clickAccion={addInput}>1</Boton>
          <Boton clickAccion={addInput}>2</Boton>
          <Boton clickAccion={addInput}>3</Boton>
          <Boton clickAccion={addInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton clickAccion={addInput}>4</Boton>
          <Boton clickAccion={addInput}>5</Boton>
          <Boton clickAccion={addInput}>6</Boton>
          <Boton clickAccion={addInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton clickAccion={addInput}>7</Boton>
          <Boton clickAccion={addInput}>8</Boton>
          <Boton clickAccion={addInput}>9</Boton>
          <Boton clickAccion={addInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton clickAccion={addInput}>=</Boton>
          <Boton clickAccion={addInput}>0</Boton>
          <Boton clickAccion={addInput}>.</Boton>
          <Boton clickAccion={addInput}>/</Boton>
        </div>
        
        <div className="fila">
        <Clear clearAccion={clearAccion} >
          Clear</Clear>
        </div>
      </div>
      
    </div>
  );
}

export default App;
