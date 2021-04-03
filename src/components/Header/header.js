import React from 'react';
import { Link } from 'react-router-dom';

const headerText = {
    title: "COCKTAIL LIBRARY",
    home: "HOME"
}

function Header(){
    return(
        <div className="header-box">
          <span>{headerText.title}</span>
          <Link to="/">{headerText.home}</Link>
        </div>
    )
}

export default Header;