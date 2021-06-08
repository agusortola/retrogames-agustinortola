import React, { useContext } from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import { CartContext } from '../CartContext';

export const NavBar = () => {

    const { quantity } = useContext(CartContext)    

    return ( 
        <nav className="navbar">
            <div className="logo">
            <NavLink className="navbar-brand" to={"/"}>
                <img className= "logo-img" src="https://i.imgur.com/ulvf9KC.png" alt=""/>
            </NavLink>
            </div>
            <div className="cart">
                <span className="qty-cart">{quantity}</span>
                <CartWidget/>
            </div>
       </nav> 
    );
}