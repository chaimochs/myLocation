import React, {useState} from 'react';
import { Router } from 'react-router';
import {Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './NavBar'
import Categories from './Categories';
import Category from './Category';
import AddCategory from './AddCategory';
import history from './history';
import ViewCategory from './ViewCategory';

function App (props) {
const [currentCat, setCurrentCat] = useState(''); 
const [showAction, setShowAction] = useState(false);
const [editable, setEditable] = useState(false);
const [title, setTitle] = useState('Categories');
const [viewLocation, setViewLocation] = useState(false);

const action = () => {
  setShowAction(true);
};  

const newCategory = (cat) => {
    let oldCats = JSON.parse(localStorage.getItem("cats"))
    let newCats = oldCats ? [...oldCats, {name: cat}] : [{name: cat}]
    localStorage.setItem("cats", JSON.stringify(newCats));
    setViewLocation(false);
    history.push('/')
  };

  const editCategory = (oldCategory, newCategory) => {
    let categories = JSON.parse(localStorage.getItem("cats"));
    let catIndex = categories.findIndex(x => x.name === oldCategory);
    categories[catIndex].name = newCategory;
    localStorage.setItem("cats", JSON.stringify(categories));
    setEditable(false);
    setViewLocation(false);
    history.push('/')
  };

  const deleteCategory = (category) => {
    let categories = JSON.parse(localStorage.getItem("cats"));
    let catIndex = categories.findIndex(x => x.name === category);
    categories.splice(catIndex, 1)
    localStorage.setItem("cats", JSON.stringify(categories));
    setViewLocation(false);
    history.push('/')
  };

  const viewCategory = cat => {
    history.push(`/View/?cat=${cat}`)
    setViewLocation(true);
  };

  return (
    <div className="App">
      <Router history={history}>
        <div className={'wrapper'}>
        <NavBar viewLocation={viewLocation} 
                showAction={showAction} 
                viewCategory={viewCategory} 
                editable={editable} 
                deleteCategory={deleteCategory} 
                setEditable={setEditable} 
                setViewLocation={setViewLocation}
        />
            <Switch>
                <Route  exact path={'/'} 
                        render={(props) => <Categories {...props} 
                          setCurrentCat={setCurrentCat}  
                          title={title} 
                          setShowAction={setShowAction} 
                          setViewLocation={setViewLocation}
                          />}
                />
                <Route  path='/AddCategory' 
                        render={(props) => <AddCategory {...props} 
                        newCategory={newCategory} 
                        setEditable={setEditable} 
                        setViewLocation={setViewLocation}
                        />} 
                />
                <Route path='/Category' 
                        render={(props) => <Category {...props} 
                          currentCat={currentCat}
                          setCurrentCat={setCurrentCat}
                          setEditable={setEditable} 
                          viewLocation={viewLocation} 
                          editCategory={editCategory}
                          setTitle={setTitle} 
                          editable={editable}
                        />} 
                />
            </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;