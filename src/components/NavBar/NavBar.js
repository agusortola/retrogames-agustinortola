import React from 'react';
import './NavBar.css'
import  ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

export const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
            <NavLink className="navbar-brand" to={"/"}>
                <img className= "logo-img" src="https://i.imgur.com/mhwuTrG.png" alt=""/>
            </NavLink>
            </div>
            <div className="cart">
            <span>0</span>
                <CartWidget/>
            </div>
       </nav> 

    );
}