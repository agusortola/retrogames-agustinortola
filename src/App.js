import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { SearchBar } from './components/NavBar/SearchBar';

import {useState} from 'react'
import {ItemDetailContainer} from './components/Product/ItemDetailContainer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemListContainer from './components/Product/ItemListContainer';

function App() {



  return (
    <Router>
      <div className="background">
        <NavBar />
        <SearchBar />
        <Switch>
          <Route exact path="/" component = { ItemListContainer } />
          <Route path="/itemdetail/:id" component = { ItemDetailContainer }  /> 
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
