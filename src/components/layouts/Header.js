import React from "react";
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header id="header">
            <div className="header__port"><Link to="./Portfolio">Portfolio</Link></div>
            <div className="header__logo"><Link to="./">KIMSEONYOUNG</Link></div>
            <nav className="header__menu">
                <ul>
                    <li><Link to="./About">About</Link></li>
                    <li><Link to="./Reference">Reference</Link></li>
                    <li><Link to="./Youtube">Youtube</Link></li>
                    <li><Link to="./Script">Script</Link></li>
                    <li><Link to="./Contact">Contact</Link></li>
                </ul>
                <a href="/" className="ham">
                    <span className="sr-only">menu</span>
                </a>
            </nav>
        </header>
    )
}

export default Header;