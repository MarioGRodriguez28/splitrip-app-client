import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { createGroupServices } from '../services/groups.services'
import { getUsersService } from '../services/auth.services'

function AddGroup(props) {
  const [groupName, setGroupName] = useState('')
  const [members, setMembers] = useState([])
  const [userList, setUserList] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsersService()
      setUserList(
        response.data.sort((a, b) => a.username.localeCompare(b.username)),
      )
    }
    fetchUsers()
  }, [])

  const handleGroupNameChange = (e) => setGroupName(e.target.value)

  const handleMembersChange = (selectedMembers) => {
    setMembers(selectedMembers)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const membersArr = members.map((member) => {
      const user = userList.find((user) => user.username === member.value)
      return user._id
    })

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
  const options = userList.map((user) => ({
    value: user.username,
    label: user.username,
    color: 'green',
  }))

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      borderRadius: 'none',
      borderColor: 'gray',
      '&:hover': {
        borderColor: 'gray',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'gray' : 'white',
      color: 'black',
      '&:hover': {
        backgroundColor: 'gray',
      },
    }),
  }

  return (
    <div className="container">
      <h3>Agregar grupo</h3>

      <form onSubmit={handleSubmit} key={'_id'}>
        <div className="form-group">
          <label htmlFor="groupName">Nombre del grupo</label>
          <input
            type="text"
            className="form-control"
            name="groupName"
            onChange={handleGroupNameChange}
            value={groupName}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="members">Miembros</label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isMulti
            name="members"
            options={options}
            onChange={handleMembersChange}
            value={members}
            styles={customStyles}
            required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-secondary">
          Agregar
        </button>
      </form>
    </div>
  )
}

export default AddGroup
