import React, {useState, useEffect} from 'react';
import { ListGroup } from 'react-bootstrap';
import {useParams } from "react-router-dom";

const Category = (props) => {
    console.log(useParams())
    let {presentCat} = useParams();
    console.log({presentCat})
    return(
        <div  onMouseEnter={() => props.setShowAction(true)}>
             <ListGroup.Item action variant="light">{presentCat}</ListGroup.Item>
        </div>
    );
};

export default Category