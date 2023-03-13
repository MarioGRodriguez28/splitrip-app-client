import React, { useState } from 'react'
import { createGroupServices } from '../services/groups.services'

function AddGroup(props) {
  const [groupName, setgroupName] = useState('')
  const [members, setMembers] = useState('')

  const handleGroupNameChange = (e) => setgroupName(e.target.value)
  const handleMembersChange = (e) => setMembers(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newGroup = {
      groupName: groupName,
      members: members,
    }

    try {
      const response = await createGroupServices(newGroup)
      console.log('Hola', newGroup, response)
      props.getData()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h3>Agregar grupo</h3>

      <form onSubmit={handleSubmit} key={'_id'}>
        <label htmlFor="groupName ">Nombre del grupo</label>
        <input
          type="text"
          name=" groupName"
          onChange={handleGroupNameChange}
          value={groupName}
          required
        />
        <br />
       
        <label htmlFor="members">Miembros</label>
        <input
          type="text"
          name="members"
          onChange={handleMembersChange}
          value={members}
          required
        />
        <br />

        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}

export default AddGroup
