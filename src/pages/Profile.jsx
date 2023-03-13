import React from 'react'
import AddGroup from '../components/AddGroup'
import GastosForm from '../components/GastosForm'
import ListExpenses from '../components/ListExpenses'
import ListGroups from '../components/ListGroups'

function Profile() {


  
  return (
    <div> <h3>Perfil de usuario</h3>
    <AddGroup />
    <ListGroups/>
   
    </div>
  )
}

export default Profile