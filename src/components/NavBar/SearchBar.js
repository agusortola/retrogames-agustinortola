import React from 'react';
import './searchbar.css';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

export const SearchBar = (props) => {

    const [category, setcategory] = useState('');

    function handleClick(e) {
            if (e.target.innerText.toString().toLowerCase() == 'all games'){
                setcategory('')
            }
            else if (e.target.innerText.toString().toLowerCase() == 'family'){
                setcategory('family')
            }
            else if (e.target.innerText.toString().toLowerCase() == 'nintendo'){
                setcategory('nintendo')
            }
            else if (e.target.innerText.toString().toLowerCase() == 'sega'){
                setcategory('sega')
            }
            else if (e.target.innerText.toString().toLowerCase() == 'gameboy'){
                setcategory('gameboy')
            }
      }

    return (  
        <div className="searchbar">
            <div className="links">
                <nav>
                    <ul>
                        <Link to = {{pathname: `/category/${category}`}}>
                            <li onClick={handleClick}>SEGA</li>
                        </Link>
                        <Link to = {{pathname: `/category/${category}`}}>
                            <li onClick={handleClick}>GameBoy</li>
                        </Link>
                        <Link to = {{pathname: `/category/${category}`}}>
                            <li onClick={handleClick}>Nintendo</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}