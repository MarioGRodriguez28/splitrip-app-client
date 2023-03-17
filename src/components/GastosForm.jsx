import React, { useState } from 'react'
import { createExpensesService } from '../services/expenses.services'

function GastosForm(props) {
  const [ammount, setAmmount] = useState(0)
  const [item, setItem] = useState('')

  const handleAmmountChange = (e) => setAmmount(e.target.value)
  const handleItemChange = (e) => setItem(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newExpenses = {
      ammount,
      item,
      id_group: props.id_group,
    }
    try {
      const response = await createExpensesService(newExpenses)
      console.log(response)

      props.getData()
      props.setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mt-3">
      <h3 className="text-center mb-3">Agregar Gasto</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="item">Concepto:</label>
          <input
            type="text"
            className="form-control"
            id="item"
            name="item"
            onChange={handleItemChange}
            value={item}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ammount">Importe:</label>
          <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <input
             
              class="form-control"
              type="number"
              className="form-control"
              id="ammount"
              name="ammount"
              onChange={handleAmmountChange}
              value={ammount}
              min="0"
              aria-label="Amount (to the nearest dollar)"
              required
            />
            <span class="input-group-text">.00</span>
          </div>
        </div>

        <br />
        <button type="submit" className="btn btn-secondary">
          Agregar
        </button>
      </form>
    </div>
  )
}

export default GastosForm
