import React from 'react';
import '../styles/Screen.css';

//input is the value that puts the user from the web
const Screen = ({ input }) => (
  <div className='input'>
    {input} 
  </div>   
);

export default Screen;