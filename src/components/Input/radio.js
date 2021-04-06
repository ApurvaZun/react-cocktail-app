import React from "react";

function Radio({ handleSelectChange, typeOfSearch }) {
  return (
    <div className="input-container">
      <label>
        <strong>Choose the filter type</strong>
      </label>{" "}
      &nbsp;
      <input
        type="radio"
        value="Name"
        name="type"
        checked = {typeOfSearch === 'Name'} 
        onChange={handleSelectChange}
      />{" "}
      Name
      <input
        type="radio"
        value="Ingredient"
        name="type"
        checked = {typeOfSearch === 'Ingredient'}
        onChange={handleSelectChange}
      />{" "}
      Ingrediant
    </div>
  );
}

export default Radio;
