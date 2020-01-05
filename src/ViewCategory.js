import React from 'react';
import queryString from 'query-string'

const ViewCategory = (props) => {
    const values = queryString.parse(props.location.search)
    const presentCat = values.cat;

    return(
        <div>
        { props.view ? 
            <div> 
                Name: {presentCat.name}
                <br />
                Address: {presentCat.address}
                <br />
                Coordinates: {presentCat.coordinates}
            </div> :
        null}   
        </div>    
    );
}

export default ViewCategory;