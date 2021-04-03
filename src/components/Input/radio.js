import React from 'react';

function Radio( {handleSelectChange} ){
    return (
        <div className="input-container" onChange={handleSelectChange}>
            <label><strong>Choose the filter type</strong></label> &nbsp;
            <input type="radio" value="Name" name="type" /> Name
            <input type="radio" value="Ingrediant" name="type" /> Ingrediant
        </div>
    )
}

export default Radio;