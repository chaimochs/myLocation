import React from 'react';
import { Router } from 'react-router';
import {Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './NavBar'
import Categories from './Categories';
import AddCategory from './AddCategory';
import history from './history';

function App (props) {
  const newCategory = (cat) => {
    let oldCats = JSON.parse(localStorage.getItem("cats"))
    let newCats = [...oldCats, cat]
    localStorage.setItem("cats", JSON.stringify(newCats));
    history.push('/')
  };

  return (
    <div className="App">
      <Router history={history}>
        <div className={'wrapper'}>
        <NavBar/>
            <Switch>
               <Route exact path={'/'} component={Categories}/>
               <Route path='/AddCategory' render={(props) => <AddCategory {...props}  newCategory={newCategory}/>} />
            
            </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
