import service from "./config.services";

const getAllExpensesService = () => {
  return service.get("/expenses");
};

const createExpensesService = (newExpenses) => {
  return service.post("/expenses", newExpenses);
};

const singleExpensesService = (expensesId) => {
  return service.get(`/expenses/${expensesId}`);
};

const deleteExpensesService = (expensesId) => {
  return service.delete(`/expenses/${expensesId}`);
};

const updateExpensesService = (expensesId, updateExpenses) => {
  return service.delete(`/expenses/${expensesId}`, updateExpenses);
};

export {
  getAllExpensesService,
  createExpensesService,
  singleExpensesService,
  deleteExpensesService,
  updateExpensesService,
};
