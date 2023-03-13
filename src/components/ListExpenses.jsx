import React, {useState, useEffect} from "react";

import {getAllExpensesService} from "../services/expenses.services";


function ListExpenses() {
  const [allExpenses, setAllExpenses] = useState (null)
  const [isFetching, setIsFetching] = useState (true)

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

  if (isFetching === true) {
    return <h3>... spinners</h3>;
  }

  return (
    <div>
      
      <hr />
      <h3>Listado de Gastos</h3>

      {allExpenses.map((eachExpense) => {
       
        return (
            <div>
          <p >
        Concepto: {eachExpense.item}
        <br />
        Importe: {eachExpense.ammount}
          </p>
          </div>
        );
      })}
    </div>
  );
}

export default ListExpenses;