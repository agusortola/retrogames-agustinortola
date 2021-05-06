import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { SearchBar } from './components/NavBar/SearchBar';
import {ItemDetailContainer} from './components/Product/ItemDetailContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ItemListContainer} from './components/Product/ItemListContainer';


function App() {



  return (
    <Router>
      <div className="background">
        <NavBar />
        <Switch>
          <SearchBar>
            <Route exact path="/category/:categoryId" component = { ItemListContainer } /> 
          </SearchBar>
        </Switch>
        <Switch>
          <Route exact path="/" component = { ItemListContainer } />
          <Route exact path="/item/:id" component = { ItemDetailContainer }  /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
