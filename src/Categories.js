import React from 'react';

const Categories = () => {
    let categories = JSON.parse(localStorage.getItem("cats"));
    console.log(categories)
    if(categories !== null && categories !== undefined) {
        return(
            <div>
                {categories.map((cat, i) => {
                    return(
                        <div key={i}>
                            <h4>{cat}</h4>
                        </div>
                    )
                })}
            </div>
        )
    } else return;
};

export default Categories