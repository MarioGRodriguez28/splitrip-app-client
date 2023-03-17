import React, { useState, useEffect } from 'react'
import AddGroup from '../components/AddGroup'
// import GastosForm from '../components/GastosForm'
// import ListExpenses from '../components/ListExpenses'
import ListGroups from '../components/ListGroups'


function Profile() {
  const [shouldUpdate, setShouldUpdate] = useState(false)

  const handleUpdate = () => {
    setShouldUpdate(true)
  }

  useEffect(() => {
    if (shouldUpdate) {
      setShouldUpdate(false)
    }
  }, [shouldUpdate])

  return (
    <div className="text-white container">
      <h3 className="text-lg">Perfil de usuario</h3>
      <AddGroup getData={handleUpdate} />
      <ListGroups shouldUpdate={shouldUpdate} />
    </div>
  )
}

export default Profile
