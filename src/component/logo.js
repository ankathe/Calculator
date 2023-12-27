import React  from "react";
import logo from '../images/Projects-logo.png';
import './logo.css';

function Logo() {
    return(
        <div className="logo-container">
            <a href="https://www.linkedin.com/in/katherine-cruz-7588b763" className="link">
                <img src={logo} alt="projects logo" className="logo" />
            </a>
        </div>
    )
}

export default Logo;