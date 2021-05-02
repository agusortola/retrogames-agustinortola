import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { SearchBar } from './components/NavBar/SearchBar';
//import { Product } from './components/Product/Product';
import { ItemList } from './components/Product/ItemList';
import {useState, useEffect} from 'react'

function App() {

  const [products, setProducts] = useState([])
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

  const getData = (data) => {
    return new Promise((res, rej) => {
      setTimeout(()=> {
        return res (setProducts(data))
      }, 2000)
    })
  }
  getData(items)




  return (
    <div className="background">
    <NavBar />
    <SearchBar />    
    <ItemList productList={products} />
    </div>
  );
}

export default App;
