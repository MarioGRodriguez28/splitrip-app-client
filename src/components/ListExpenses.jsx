import React, {useState, useEffect} from "react";

import {getAllExpensesService, deleteExpensesService} from "../services/expenses.services";
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
    }
    
  
    if (isFetching === true) {
      return <h3>... spinners</h3>;
    }
  
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
      
  }

export default ListExpenses;