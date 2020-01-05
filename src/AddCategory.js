import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import history from './history';


const AddCategory = props => {
   const [cat, setCat] = useState(props.cat);
   
   const addCat = e => {
       e.preventDefault()
       setCat(e.target.value)    
   };

   const addNewCat = () => {
   if(cat.length < 4) {
       alert('Category Name must contain at least four letters.'); 
       setCat('')
       return;
   } else   
   props.newCategory(cat);
   setCat('')
   props.setViewLocation(false);
  };  

  return(
   <div>
       <Form>
           <Form.Group controlId="formBasicPassword">
               <Form.Control 
                    className="addCategory"
                    type="string"
                    value={cat}  
                    placeholder="Category Name" 
                    onChange={e => addCat(e)}
                    />
           </Form.Group>
            <Button className="addCategory-button add"
                    variant="primary"
                    size="lg"
                    type="button"
                    onClick={() => addNewCat()}
                   >
           Add
           </Button>
           <Button  className="addCategory-button"
                    variant="secondary" 
                    size="lg" 
                    onClick={() => setCat('')}
           >
           Clear
           </Button>
           <Button  className="addCategory-button"
                    variant="warning" 
                    size="lg" 
                    onClick={() =>  {
                        props.setViewLocation(false);
                        props.setEditable(false); 
                        history.push('/')
                    }}
           >
           Cancel
           </Button>
       </Form>
   </div>
)
};

export default AddCategory