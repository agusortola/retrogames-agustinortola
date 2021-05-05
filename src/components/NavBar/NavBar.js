import React from 'react';
import './NavBar.css'
import  ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
            <NavLink className="navbar-brand" to={"/"}>
                <img className= "logo-img" src="https://i.imgur.com/mhwuTrG.png" alt=""/>
            </NavLink>
            </div>
            <div className="cart">
                <IconButton color="primary" aria-label="add to shopping cart">
                    <ShoppingCartIcon                     
                        style={{
                            padding:0,
                            margin:0
                        }}  
                    />
                </IconButton>    
            </div>
       </nav> 

    );
}
 
