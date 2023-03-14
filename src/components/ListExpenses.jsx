import React, { useState, useEffect } from "react";
import { getAllExpensesService, deleteExpensesService } from "../services/expenses.services";
import GastosForm from "./GastosForm";

function ListExpenses() {
  const [allExpenses, setAllExpenses] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsFetching(true);
    try {
      const response = await getAllExpensesService();
      console.log(response);
      setAllExpenses(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDataChange = (data) => {
    setAllExpenses(data);
  };

  const handleDeleteExpense = async (expenseId) => {
    const shouldDelete = window.confirm("¿Está seguro que desea eliminar este gasto?");
    if (shouldDelete) {
      try {
        await deleteExpensesService(expenseId);
        const updatedExpenses = allExpenses.filter(expense => expense._id !== expenseId);
        setAllExpenses(updatedExpenses);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getTotalExpenses = () => {
    if (allExpenses) {
      return allExpenses.reduce((total, expense) => {
        return total + expense.ammount;
      }, 0);
    } else {
      return 0;
    }
<<<<<<< HEAD
  };

  if (isFetching === true) {
    return <h3>... spinners</h3>;

  
    return  (
        <div>
          <GastosForm getData={getData} setData={handleDataChange} /> 
        
          <h3>Listado de Gastos</h3>
          {allExpenses.map((eachExpense) => {
            return ( <div>
               
              <p key={eachExpense._id}>
                
                {eachExpense.item} : {eachExpense.ammount}
              
              <button onClick={() => handleDeleteExpense(eachExpense._id)}>   &#10060;  </button>
              </p>
              </div>
            ); 
          //  console.log(eachExpense)
          })}
        </div>
      );
      
>>>>>>> 9e4dfcb24929096ffba9f05ffbca46d8081b8444
  }

  return (
    <div>
      <GastosForm getData={getData} setData={handleDataChange} />
      <p>Gasto Total: <strong>{getTotalExpenses()}</strong></p>
      <h3>Listado de Gastos</h3>
      
      {allExpenses.map((eachExpense) => {
        return (
          <div>
            <p key={eachExpense._id}>
              {eachExpense.item} : {eachExpense.ammount} &#128176;
              <button class="boton1" onClick={() => handleDeleteExpense(eachExpense._id)}>
                <span class="icocor1">&#10060; </span>
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ListExpenses;
