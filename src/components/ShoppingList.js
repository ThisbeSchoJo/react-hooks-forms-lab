import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("")


  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleSearchChange(text) {
    setSearchText(text) //update search state when input changes)
  }

  //Filter items based on both category and search text
  const itemsToDisplay = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toUpperCase().includes(searchText.toUpperCase()) || searchText === ""

    return matchesCategory && matchesSearch //Both conditions must be true
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
        search={searchText}
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange} 
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
