import React from 'react';


const checkBox = (props) => (
    <React.Fragment>
    <label for="rating"> Sort by rating</label>
    <input type="checkbox" id="rating" onClick={props.sortByRating} />
    </React.Fragment>
)

export default checkBox