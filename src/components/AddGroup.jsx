import React, { useState, useEffect } from 'react'
import {
  createGroupServices,
  getUserGroupsService,
} from '../services/groups.services'
import { getUsersService } from '../services/auth.services'

function AddGroup(props) {
  const [groupName, setGroupName] = useState('')
  const [userList, setUserList] = useState([])
  const [userGroups, setUserGroups] = useState([])
  const [selectedMembers, setSelectedMembers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsersService()
      setUserList(response.data)
    }
    fetchUsers()

    const fetchUserGroups = async () => {
      const response = await getUserGroupsService(props.userId)
      setUserGroups(response.data)
    }
    fetchUserGroups()
  }, [props.userId])

  const handleGroupNameChange = (e) => setGroupName(e.target.value)
  const handleMembersChange = (e) =>
    setSelectedMembers(
      Array.from(e.target.selectedOptions, (option) => option.value),
    )
  const handleSearchTermChange = (e) => setSearchTerm(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const membersArr = selectedMembers.map((member) => member.trim())

    for (let i = 0; i < membersArr.length; i++) {
      if (!userList.find((user) => user.username === membersArr[i])) {
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
      setSelectedMembers([])
      props.getData()
    } catch (error) {
      console.log(error)
    }
  }

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
        <input
          type="text"
          placeholder="Buscar miembro"
          onChange={handleSearchTermChange}
        />
        <select
          name="members"
          multiple
          onChange={handleMembersChange}
          value={selectedMembers}
        >
          {userList
            .filter((user) =>
              user.username.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .sort((a, b) => a.username.localeCompare(b.username))
            .map((user) => (
              <option key={user._id} value={user.username}>
                {user.username}
              </option>
            ))}
        </select>
        <br />

        <button type="submit">Agregar</button>
      </form>

      <h3>Grupos del usuario</h3>
      {userGroups.map((group) => (
        <div key={group._id}>
          <p>{group.groupName}</p>
          <ul>
            {group.members.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default AddGroup
