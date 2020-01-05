import React, {useState, useEffect} from 'react';
import { ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import history from './history';
import queryString from 'query-string'

const Category = (props) => {
    const values = queryString.parse(props.location.search)
    const presentCat = values.cat;

    const [cat, setCat] = useState(props.cat);
   
    const addCat = e => {
        e.preventDefault()
        setCat(e.target.value)    
    };

    const editCat = () => {
    if(cat.length < 4) {
        alert('New Category Name must contain at least four letters.'); 
        setCat('')
        return;
    } else   
    props.editCategory(presentCat, cat)
    setCat('')
   };  

    return (
        <div>
            {props.editable ? 
            <div>
             <label htmlFor="basic-url">Edit Category</label>
             
        <InputGroup className="mb-3">
            <FormControl
             value={cat}  
             onChange={e => addCat(e)}
             placeholder={presentCat}
            />
        </InputGroup> 
        <Button variant="primary"
                        type="button"
                        onClick={() => editCat()}
                        >
                Submit
                </Button>
                <Button variant="secondary" 
                        onClick={() => props.setEditable(false)}
                >
                cancel
                </Button>
        </div>:
            <div>
             <h1 className={'categories'}>Category</h1>
            <ListGroup.Item className="category" action variant="light" >{presentCat}</ListGroup.Item>
            </div>}     
       <div>
        { props.viewLocation ? 
            <div> 
                Name: {presentCat.name}
                <br />
                Address: {presentCat.address}
                <br />
                Coordinates: {presentCat.coordinates}
            </div> :
        null}  
       </div>
       </div>
    );
};

export default Category