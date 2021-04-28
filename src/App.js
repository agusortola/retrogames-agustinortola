import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { SearchBar } from './components/NavBar/SearchBar';
//import { Product } from './components/Product/Product';
import { ItemList } from './components/Product/ItemList';
import {useState} from 'react'

function App() {

  const items = [
    {
      img: 'https://i.imgur.com/4l2kSvN.jpg',
      title: 'Monkey Island I',
      price: 9.90,
      console: 'PC',
      description: 'Aventura gráfica - 1990.'
    },
    {
      img: 'https://i.imgur.com/Qx6xnVG.jpg',
      title: 'Ristar',
      price: 7.30,
      console: 'SEGA',
      description: 'Plataforma - 1995'    
    },
    {
      img: 'https://i.imgur.com/FRQhWjZ.jpg',
      title: 'Road Rash',
      price: 12.60,
      console: 'PC',
      description: 'Carreras - 1991'    
    }
  ]


  return (
    <div className="background">
    <NavBar />
    <SearchBar />    
    <ItemList productList={items} />
    </div>
  );
}

export default App;
