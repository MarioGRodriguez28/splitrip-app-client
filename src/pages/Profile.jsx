import React from 'react'
import AddGroup from '../components/AddGroup'
import GastosForm from '../components/GastosForm'
import ListGroups from '../components/ListGroups'

function Profile() {
  return (
    <div> <h3>Perfil de usuario</h3>
    <AddGroup/>
    <ListGroups/>
   <GastosForm/>
    
    </div>
  )
}

export default Profile