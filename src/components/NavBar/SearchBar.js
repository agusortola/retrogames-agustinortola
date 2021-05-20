import './searchbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const SearchBar = () => {

    const [category, setCategory] = useState('');

    return (  
        <div className="searchbar">
            <div className="links">
                <nav>
                    <ul>
                        <Link to = {{pathname: `/category/${category}`}}>
                             <li onClick={()=>{setCategory('pc')}}>PC</li>
                        </Link>
                        <Link to = {{pathname: `/category/${category}`}}>
                            <li onClick={()=>{setCategory('gameboy')}}>GameBoy</li>
                        </Link>
                        <Link to = {{pathname: `/category/${category}`}}>
                            <li onClick={()=>{setCategory('nintendo')}}>Nintendo</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}