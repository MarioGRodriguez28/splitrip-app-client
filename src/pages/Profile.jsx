import React, { useState, useEffect } from 'react'
import AddGroup from '../components/AddGroup'
import ListGroups from '../components/ListGroups'
import { verifyService } from '../services/auth.services'

function Profile() {
  const [shouldUpdateGroups, setShouldUpdateGroups] = useState(false)
  const [username, setUsername] = useState('')

  const getData = () => {
    setShouldUpdateGroups(true)
  }

  useEffect(() => {
    setShouldUpdateGroups(false)
    verifyService()
      .then((response) => {
        setUsername(response.data.username)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [shouldUpdateGroups])

  return (
    <div>
      <h3>{`Hola ${username},`}</h3>
      <h3>{`nos gusta verte de nuevo por aqui`}</h3>

      <AddGroup getData={getData} />
      <ListGroups shouldUpdateGroups={shouldUpdateGroups} />
    </div>
  )
}

export default Profile
