import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllGroupsServices } from '../services/groups.services'
import { useNavigate } from 'react-router-dom'

function ListGroups(props) {
  const [allGroups, setAllgroups] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    getData()
  }, [props.shouldUpdate])

  const getData = async () => {
    setIsFetching(true)
    try {
      const response = await getAllGroupsServices()
      setAllgroups(response.data)
      setIsFetching(false)
    } catch (error) {
      navigate(error)
    }
  }

  if (isFetching === true) {
    return <h3>...Cargando</h3>
  }

  return (
    <div className="text-white my-5">
      <h3>Lista de Grupos</h3>

      <div className="list-group">
        {allGroups.map((eachGroup) => {
          return (
            <Link
              to={`/groups/${eachGroup._id}`}
              key={eachGroup._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {eachGroup.groupName}
              <i className="fas fa-chevron-right"></i>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ListGroups
