import React, {useEffect} from 'react';
import { ListGroup } from 'react-bootstrap';
import history from './history';

const Categories = (props) => {

    useEffect(() => {
        props.setViewLocation(false);
    });

    const goToCategory = catName => {
        history.push(`/Category?cat=${catName}`) 
        props.setViewLocation(false);
        props.setShowAction(true);
    };

    let categories = JSON.parse(localStorage.getItem("cats"));
    if(categories !== null && categories !== undefined) {
        return(
            <div>
                <h1 className={'categories'}>Categories</h1>
                <ListGroup>
                {categories.map((cat, i) => {
                    return(
                        <div key={i}
                             className={"catNames"}
                                onClick={() => goToCategory(cat.name)}   
                        >
                            <ListGroup.Item 
                                className="category" 
                                action 
                                variant="light">{cat.name}
                            </ListGroup.Item>
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