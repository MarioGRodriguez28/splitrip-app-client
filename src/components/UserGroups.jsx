import React, { useState, useEffect } from 'react'
import { getUserGroupsService } from '../services/groups.services'

function UserGroups(props) {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await getUserGroupsService(props.userId)
        console.log('Jojoto', response.data)
        setGroups(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchGroups()
  }, [props.userId])

  return (
    <div>
      <h3>Grupos de usuario</h3>
      {groups.length === 0 ? (
        <p>No hay grupos para mostrar.</p>
      ) : (
        <ul>
          {groups.map((group) => (
            <li key={group._id}>{group.groupName}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UserGroups
