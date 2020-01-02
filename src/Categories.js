import React from 'react';
import { ListGroup } from 'react-bootstrap';
import history from './history';

const Categories = (props) => {

    const goToCategory = catName => {
        // props.setPresentCat(cat)
        history.push('/Category/' + catName) 
    };

    let categories = JSON.parse(localStorage.getItem("cats"));
    console.log(categories)
    if(categories !== null && categories !== undefined) {
        return(
            <div>
                <ListGroup>
                {categories.map((cat, i) => {
                    return(
                        <div key={i}
                             className={"catNames"}
                             onClick={() => goToCategory(cat.name)}   
                        >
                            <ListGroup.Item action variant="light">{cat.name}</ListGroup.Item>
                        <br/>
                        </div>
                    )
                })}
                </ListGroup>
            </div>
        )
    } else return '';
};

export default Categories