import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { SearchBar } from './components/NavBar/SearchBar';
//import { Product } from './components/Product/Product';
import { ItemList } from './components/Product/ItemList';
import { Item } from './components/Product/Item';
import {useState} from 'react'
import {ItemDetailContainer} from './components/Product/ItemDetailContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [products, setProducts] = useState([])
  const items = [
    {
      img: 'https://i.imgur.com/4l2kSvN.jpg',
      title: 'Monkey Island I',
      price: 9.90,
      console: 'PC',
      description: 'Aventura gráfica - 1990.',
      id: 1
    },
    {
      img: 'https://i.imgur.com/Qx6xnVG.jpg',
      title: 'Ristar',
      price: 7.30,
      console: 'SEGA',
      description: 'Plataforma - 1995'  ,
      id:2
    },
    {
      img: 'https://i.imgur.com/FRQhWjZ.jpg',
      title: 'Road Rash',
      price: 12.60,
      console: 'PC',
      description: 'Carreras - 1991',
      id:3
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
    <Router>
      <div className="background">
        <NavBar />
        <SearchBar />
        <Switch>
          <Route exact path="/">  
            <ItemList productList={products} />
          </Route>
          <Route exact path="/detail/:id">
            <ItemDetailContainer productList={products}>
              </ItemDetailContainer> 
          </Route>  
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
