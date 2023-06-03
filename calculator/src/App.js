import './App.css';
import React from 'react';
import Logo from './images/logo.png';
import Button from './Components/Button';
import Screen from './Components/Screen';
import ClearButton from './Components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  //state of user inputs
  const [input, setInput] =useState('');

  const addInput = value => {
      setInput(input + value);
    };
  
  const countResult = value => {
   
    try {
    //las cadenas de caracteres vacías son False, las que no lo estan son True
      if(input){
        setInput(evaluate(input));
      } else {
        alert('please enter values');
      } 
    }
    catch(err) {
      alert(err);
    }
    
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img className='logo' src={Logo} alt='Logo' />
      </div>
      <div className="calculator-container">
        <Screen input={input} />
        <div className="row">
          <Button clickManager = {addInput}>1</Button>
          <Button clickManager = {addInput}>2</Button>
          <Button clickManager = {addInput}>3</Button>
          <Button clickManager = {addInput}>+</Button>
        </div>
        <div className="row">
          <Button clickManager = {addInput}>4</Button>
          <Button clickManager = {addInput}>5</Button>
          <Button clickManager = {addInput}>6</Button>
          <Button clickManager = {addInput}>-</Button>
        </div>
        <div className="row">
          <Button clickManager = {addInput}>7</Button>
          <Button clickManager = {addInput}>8</Button>
          <Button clickManager = {addInput}>9</Button>
          <Button clickManager = {addInput}>*</Button>
        </div>
        <div className="row">
          <Button clickManager = {countResult}>=</Button>
          <Button clickManager = {addInput}>0</Button>
          <Button clickManager = {addInput}>.</Button>
          <Button clickManager = {addInput}>/</Button>
        </div>
        <div className="row">
          <ClearButton clearManager={() => setInput('')}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
