import service from "./config.services";


const getAllExpensesService = () => {
    return service.get("/expenses")
  }
  
  const createExpensesService = () => {
    return service.get("/expenses", newExpenses)
  }
  




  export {
    getAllExpensesService,
    createExpensesService,
    getSingleTodoService,
    deleteOneTodoService,
    updateOneTodoService
  }