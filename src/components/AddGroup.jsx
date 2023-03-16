import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import { createGroupServices } from '../services/groups.services'
import { getUsersService } from '../services/auth.services'

function AddGroup(props) {
  const [groupName, setGroupName] = useState('')
  const [members, setMembers] = useState([])
  const [userList, setUserList] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsersService()
      setUserList(response.data.sort((a, b) => a.username.localeCompare(b.username)))
    }
    fetchUsers()
  }, [])

  const handleGroupNameChange = (e) => setGroupName(e.target.value)

  const handleMembersChange = (selectedMembers) => {
    setMembers(selectedMembers)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const membersArr = members.map(member => member.value)

    for (let i = 0; i < membersArr.length; i++) {
      if (!userList.find(user => user.username === membersArr[i])) {
        alert(`El usuario ${membersArr[i]} no está registrado`)
        return
      }
    }

    const newGroup = {
      groupName: groupName,
      members: membersArr,
    }

    try {
      const response = await createGroupServices(newGroup)
      console.log(response)
      setGroupName('')
      setMembers([])
      props.getData()
    } catch (error) {
      console.log(error)
    }
  }

  // Opciones del select
  const options = userList.map(user => ({ value: user.username, label: user.username }))

  return (
    <div>
      <h3>Agregar grupo</h3>

      <form onSubmit={handleSubmit} key={'_id'}>
        <label htmlFor="groupName">Nombre del grupo</label>
        <input
          type="text"
          name="groupName"
          onChange={handleGroupNameChange}
          value={groupName}
          required
        />
        <br />

        <label htmlFor="members">Miembros</label>
        <Select
          isMulti
          name="members"
          options={options}
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
