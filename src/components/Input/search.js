import React from 'react';

function Radio( {handleChange, searchText} ){
    return (
        <div className="input-container">
            <input 
                className="input" 
                type="text" value={searchText} 
                placeholder="Search Cocktail by name or ingrediant"
                onChange={handleChange} 
            />
        </div>
    )
}

export default Radio;