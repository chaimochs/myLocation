import React from 'react';

const ViewCategory = (presentCat) => {

    return(
        <div> 
            Name: {presentCat.name}
            <br />
            Address: {presentCat.address}
            <br />
            Coordinates: {presentCat.coordinates}
        </div>    
    );
}

export default ViewCategory;