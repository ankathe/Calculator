import './App.css';
import Boton from './component/bottom';
import Screen from './component/pantalla';
import Clear from './component/clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Logo from './component/logo';

function App() {
  const [input, setInput] = useState('');
  
  const addInput = valor => {
    const hasOperator = input.endsWith('+') || input.endsWith('-')|| input.endsWith('*') || input.endsWith('/') 
    const valueIsOperator = valor === '+' || valor === '-' || valor === '*' || valor === '/' 


    if(hasOperator && valueIsOperator){
      alert('Please only one operation')
    }else{
      setInput(input + valor); 
    } 
  };

  const clearAccion =() =>{
    setInput('')
  };

  const resultCalculation = () => {
    if(input){
    setInput(evaluate(input));
    }else{
    alert('Please add numbers in the screen');
  }  
  }; 



  return (
    <div className="App">
      <Logo/>
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
          <Boton clickAccion={resultCalculation}>=</Boton>
          <Boton clickAccion={addInput}>0</Boton>
          <Boton clickAccion={addInput}>.</Boton>
          <Boton clickAccion={addInput}>/</Boton>
        </div>
        
        <div className="fila">
        <Clear clearAccion={clearAccion}>
          Clear</Clear>
        </div>
      </div>
      
    </div>
  );
}

export default App;
