import React from "react";

function Filter({ search, onSearchChange, onCategoryChange, selectedCategory }) {

  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        value={search}
        onChange={(e) => {
          // setSearchText(e.target.value)
          onSearchChange(e.target.value)
        }}
      />
      <select name="filter" onChange={(e) => onCategoryChange(e.target.value)} value={selectedCategory}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;


//When user types in input, the list of items should be filtered
//so that only itesm with names that match the text are included

//Where do I need to add state for this feature?
//What components need to know about the search text?
  //set up initial state and connect it to the input field (want a controlled input) -- input's value should always be in sync with state