import React, {useState, useEffect} from "react";
import {
  getAllExpensesService,
  deleteExpensesService,
} from "../services/expenses.services";
import {getUsersService} from "../services/auth.services";
import GastosForm from "./GastosForm";

function ListExpenses() {
  const [allExpenses, setAllExpenses] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getData();
    getUsers();
  }, []);

  const getData = async () => {
    setIsFetching(true);
    try {
      const response = await getAllExpensesService();
      setAllExpenses(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await getUsersService();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDataChange = (data) => {
    setAllExpenses(data);
  };

  const handleDeleteExpense = async (expenseId) => {
    const shouldDelete = window.confirm(
      "¿Está seguro que desea eliminar este gasto?"
    );
    if (shouldDelete) {
      try {
        await deleteExpensesService(expenseId);
        const updatedExpenses = allExpenses.filter(
          (expense) => expense._id !== expenseId
        );
        setAllExpenses(updatedExpenses);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getUsernameById = (id) => {
    const user = users && users.find((user) => user._id === id);
    return user ? user.username : "Desconocido";
  };

  const getTotalExpenses = () => {
    if (allExpenses) {
      return allExpenses.reduce((total, expense) => {
        return total + expense.ammount;
      }, 0);
    } else {
      return 0;
    }
  };

  if (isFetching === true || users === null) {
    return <h3>... spinners</h3>;
  }

  return (
    <div>
      <GastosForm getData={getData} setData={handleDataChange} />
      <p>
        Gasto Total: <strong>{getTotalExpenses()}</strong>
      </p>
      <h3>Listado de Gastos</h3>

      {allExpenses.map((eachExpense) => {
        return (
          <div key={eachExpense._id}>
            <p>
              {getUsernameById(eachExpense.id_user)} : {eachExpense.item} :{" "}
              {eachExpense.ammount} &#128176;
              <button
                className="boton1"
                onClick={() => handleDeleteExpense(eachExpense._id)}>
                <span className="icocor1">&#10060; </span>
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ListExpenses;
