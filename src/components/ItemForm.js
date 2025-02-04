import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")
  
  function handleSubmit(e) {
    e.preventDefault()

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }

    onItemFormSubmit(newItem); //Pass new item to parent

    setItemName("") //Clear input after submit
    setItemCategory("Produce") //Reset category to default
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name"
          value={itemName} //controlled input
          onChange={(e) => setItemName(e.target.value)} //Update state on change
        /> 
      </label>

      <label>
        Category:
        <select 
          name="category"
          value={itemCategory} //Controlled select
          onChange={(e) => setItemCategory(e.target.value)} //Update state on change
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
