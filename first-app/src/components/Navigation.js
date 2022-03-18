import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact to="/" className={({ isActive }) => (isActive ? 'nav-active' : "")}>
                Accueil
            </NavLink>
            <NavLink exact to="/about" className={({ isActive }) => (isActive ? 'nav-active' : "")}>
                A propos
            </NavLink>
            <NavLink exact to="/countries" className={({ isActive }) => (isActive ? 'nav-active' : "")}>
                Pays
            </NavLink>
            <NavLink exact to="/register" className={({ isActive }) => (isActive ? 'nav-active' : "")}>
                Inscription
            </NavLink>
            <NavLink exact to="/crud" className={({ isActive }) => (isActive ? 'nav-active' : "")}>
                Le CRUD
            </NavLink>
        </div>
    );
};

export default Navigation;