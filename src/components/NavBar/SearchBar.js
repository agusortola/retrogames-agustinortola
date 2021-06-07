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
                        <Link to = {{pathname: `/category/pc`}}>
                        <button type="button" class="nes-btn is-warning">PC</button>
                        </Link>
                        <Link to = {{pathname: `/category/gameboy`}}>
                        <button type="button" class="nes-btn is-warning">Gameboy</button>
                        </Link>
                        <Link to = {{pathname: `/category/nintendo`}}>
                        <button type="button" class="nes-btn is-warning">Nintendo</button>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}