import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='flex'>
            <div>
                <h1>Skill Checker</h1>
            </div>
            <div>
                <NavLink to='/'>Subject</NavLink>
                <NavLink to='/chart'>Chart</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        </nav>
    );
};

export default Header;