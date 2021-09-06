import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    return (
        <nav className="navigation-bar">
            <Link to="/">
                <div className="logo" ></div>
            </Link >
        </nav>
    )
}

export default Header;