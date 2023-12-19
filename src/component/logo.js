import React  from "react";
import logo from '../images/Projects-logo.png';
import './logo.css';

function Logo() {
    return(
        <div className="logo-container">
            <img src={logo} alt="projects logo" className="logo" />
        </div>
    )
}

export default Logo;