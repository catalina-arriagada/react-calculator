import React from 'react';
import '../styles/Button.css'

function Button(props) {

  const isOperator = valor => {
    //we dont want this signs recognize like operator
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

    return (
        <div className={`button-container ${isOperator(props.children) ? 'operator' : null}`.trimEnd()}>
          {props.children}
        </div>
    )
}

export default Button;