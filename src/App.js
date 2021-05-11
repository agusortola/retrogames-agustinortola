import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { SearchBar } from './components/NavBar/SearchBar';
import {ItemDetailContainer} from './components/Product/ItemDetailContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ItemListContainer} from './components/Product/ItemListContainer';
import { CartProvider } from './components/CartContext';


function App() {



  return (
    <Router>
      <div className="background">
        <CartProvider>
          <NavBar />
            <SearchBar>
            </SearchBar>
          <Switch>
            <Route exact path="/" component = { ItemListContainer } />
            <Route exact path="/item/:id" component = { ItemDetailContainer }  />
            <Route exact path="/category/:categoryId" component = { ItemListContainer } />  
          </Switch>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
