import './searchbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const SearchBar = () => {

    const [isSelected, setIsSelected] = useState( "category" )

    return (  
        <div className="searchbar">
            <div className="links">
                <nav>
                    <ul>
                        <Link to = {{pathname: `/category/gameboy`}}>
                            <button type="button" className={isSelected === "gameboy" ? "nes-btn is-primary" : "nes-btn"} onClick={()=>setIsSelected("gameboy")}>Gameboy</button>
                        </Link>
                        <Link to = {{pathname: `/category/pc`}}>
                            <button type="button" className={isSelected === "pc" ? "nes-btn is-primary" : "nes-btn"} onClick={()=>setIsSelected("pc")}>PC</button>
                        </Link>
                        <Link to = {{pathname: `/category/nintendo`}}>
                            <button type="button" className={isSelected === "nintendo" ? "nes-btn is-primary" : "nes-btn"} onClick={()=>setIsSelected("nintendo")}>Nintendo</button>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}