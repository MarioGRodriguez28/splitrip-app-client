import React, { useState } from "react";
import { createExpensesService } from "../services/expenses.services";

function GastosForm(props) {
  const [item, setItem] = useState("");

  const handleItemChange = (e) => setItem(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExpenses = {
      item,
    };

    try {
      const response = await createExpensesService(newExpenses);
      console.log(response);
      props.getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Agregar Gasto</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Importe</label>
        <input type="number" name="item" onChange={handleItemChange} value={item} />
        <br />
      
        <button type="submit">Agregar</button>
        
      </form>
      
    </div>
    
  );
}

export default GastosForm;

