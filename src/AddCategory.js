import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

const AddCategory = props => {
    const [cat, setCat] = useState('');
   
    const addCat = e => {
        e.preventDefault()
        setCat(e.target.value)    
    };

    const addNewCat = () => {
    props.newCategory(cat);
    setCat('')
   };  


    return(
        <div>
            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Add a Category</Form.Label>
                    <Form.Control type="string"
                                  value={cat}  
                                  placeholder="Category Name" 
                                  onChange={e => addCat(e)}
                                  />
                </Form.Group>
                <Button variant="primary"
                        type="button"
                        onClick={() => addNewCat()}
                        >
                Submit
                </Button>
                <Button variant="secondary" >
                clear
                </Button>
            </Form>
        </div>
    )
};

export default AddCategory