import React, { useState } from "react";
import { createExpensesService } from "../services/expenses.services";


function GastosForm(props) {
    const [ammount, setAmmount] = useState(0);
    const [item, setItem] = useState("");
  
    const handleAmmountChange = (e) => setAmmount(e.target.value);
    const handleItemChange = (e) => setItem(e.target.value);
  
    const handleSubmit = async (e) => {

        
      setAmmount(0);
      setItem("");
      e.preventDefault();
  
      const newExpenses = {
        ammount,
        item,
      };
  
      try {
        const response = await createExpensesService(newExpenses);
        console.log(response);
        props.getData();
        props.setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <h3>Agregar Gasto</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="item">Concepto: </label>
          <input
            type="text"
            name="item"
            onChange={handleItemChange}
            value={item}
            required
          />
          <br />
          <label htmlFor="ammount">Importe: </label>
          <input
            type="number"
            name="ammount"
            onChange={handleAmmountChange}
            value={ammount}
          />
          <br />
          <button type="submit">Agregar</button>
        </form>
      </div>
    );
  }
  
  export default GastosForm;
  
  
