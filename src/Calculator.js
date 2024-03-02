import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState(''); 
  const [output, setOutput] = useState(''); 

  const handleButtonClick = (value) => {
    setInput(input + value); 
  };

  const clearInput = () => {
    setInput(''); 
    setOutput(''); 
  };

  const calculate = () => {
    const numbers = input.split('+').map(Number); 
    const result = numbers.reduce((acc, curr) => acc + curr, 0); 
    setOutput(result.toString()); 
  };

  return (
    <div className="container">
      <div className="output">
          <div className="title">Calculator</div>
          <div className="overoutput">{input}</div>
          <div className="underoutput">{output}</div>
          <div className="tempoutput"></div>
      </div>
      <button className="number" onClick={() => handleButtonClick('1')}>1</button>
      <button className="number" onClick={() => handleButtonClick('2')}>2</button>
      <button className="number" onClick={() => handleButtonClick('3')}>3</button>
      <button className="number" onClick={() => handleButtonClick('4')}>4</button>
      <button className="number" onClick={() => handleButtonClick('5')}>5</button>
      <button className="number" onClick={() => handleButtonClick('6')}>6</button>
      
      <button className="number" onClick={() => handleButtonClick('7')}>7</button>
      <button className="number" onClick={() => handleButtonClick('8')}>8</button>
      <button className="number" onClick={() => handleButtonClick('9')}>9</button>
      <button className="number" onClick={() => handleButtonClick('0')}>0</button>
      <button className="number" onClick={() => handleButtonClick('00')}>00</button>
      <button className="number" onClick={() => handleButtonClick('.')}>.</button>
      
      <button className="clear" onClick={clearInput}>Clear</button>
    
      <button className="operation" onClick={() => handleButtonClick('+')}>+</button>
      <button className="delete">Delete</button>
    
     
      <button className="result" onClick={calculate}>=</button>
    </div>
  );
}

export default Calculator;
