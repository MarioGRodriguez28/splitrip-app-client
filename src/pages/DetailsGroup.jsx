import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  deleteGroupServices,
  singleGroupServices,
} from '../services/groups.services'
import ListExpenses from '../components/ListExpenses'

function DetailsGroups() {
  const navigate = useNavigate()
  const params = useParams()
  console.log("params - dg", params)

  const [singleGroup, setSingleGroup] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await singleGroupServices(params.groupId)
      // console.log(response)
      setSingleGroup(response.data)
      setIsFetching(false)
    } catch (error) {
      navigate('/error')
    }
  }

  const handleDeleteGroup = async () => {
    const confirmDelete = window.confirm(
      '¿Estás seguro que deseas borrar el grupo?',
    )

    if (confirmDelete) {
      try {
        await deleteGroupServices(params.groupId)
        navigate('/profile')
      } catch (error) {
        navigate('/error')
      }
    }
  }
// console.log("SINGLE_DATAMEMBS:",singleGroup.data.members)
  return (
    <div>
      {isFetching === true ? (
        <h3>...buscando</h3>
      ) : (
        <div>
          
          <h3>GRUPO DE VIAJE : {singleGroup.groupName} </h3> Miembros:{' '}
          {singleGroup.members.map((member, index) => (
            <p key={index}>{member.username}</p>
          ))} 
          <button onClick={handleDeleteGroup}>Borrar Grupo</button>
          <Link to={`/groups/${params.groupId}/edit`}>
            <button>Editar Grupo</button>
          </Link>
          <ListExpenses members={singleGroup.members} />
        </div>
      )}
    </div>
  )
}

export default DetailsGroups
