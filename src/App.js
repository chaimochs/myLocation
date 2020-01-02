import React, {useState} from 'react';
import { Router } from 'react-router';
import {Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './NavBar'
import Categories from './Categories';
import Category from './Category';
import AddCategory from './AddCategory';
import history from './history';

function App (props) {
const [showAction, setShowAction] = useState(false);

  const newCategory = (cat) => {
    let oldCats = JSON.parse(localStorage.getItem("cats"))
    let newCats = oldCats ? [...oldCats, {name: cat}] : [{name: cat}]
    localStorage.setItem("cats", JSON.stringify(newCats));
    history.push('/')
  };

  return (
    <div className="App">
      <Router history={history}>
        <div className={'wrapper'}>
        <NavBar showAction={showAction} setShowAction={setShowAction}/>
            <Switch>
                <Route exact path={'/'}    render={(props) => <Categories {...props}  />} />
                <Route path='/AddCategory' render={(props) => <AddCategory {...props} newCategory={newCategory} />    } />
                <Route path='/Category/:presentCat'    render={(props) => <Category {...props} setShowAction={setShowAction} />      } />
            </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
