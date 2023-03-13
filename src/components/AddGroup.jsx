import React from 'react'

function AddGroup() {
  return (
    <div>
    
    <h3>Agregar grupo</h3>

      <form >
        <label htmlFor=" ">Nombre del grupo</label>
        <input
          type="text"
          name=" "
         
          
        />
        <br />
        <label htmlFor=" ">Miembros</label>
        <input
          type="text"
          name=" "
       
         
        />
        <br />
        
        <button type="submit">Agregar</button>
      </form>
    
    
    
    
    </div>
  )
}

export default AddGroup