import React from 'react';
import './bottom.css';

function Boton(props){
    const isOperator = (valor) => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    }
    return (
        <div className={`boton-container ${isOperator(props.children) ? 'operator' : null}`}
        onClick={()=>props.clickAccion(props.children)}>
            {props.children}
        </div>
    ) 
}

export default Boton;