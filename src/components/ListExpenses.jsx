import React, {useState, useEffect} from "react";

import {getAllExpensesService} from "../services/expenses.services";
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
              </p>
              </div>
            ); 
          //  console.log(eachExpense)
          })}
        </div>
      );
      
  }

export default ListExpenses;