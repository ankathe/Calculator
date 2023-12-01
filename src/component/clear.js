import React from 'react';
import './clear.css';

const Clear = (props) => {
    return (
    <div className='clear' onClick={props.clearAccion}>
        {props.children}
    </div>
    )
};

export default Clear;