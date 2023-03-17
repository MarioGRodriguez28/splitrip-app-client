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
  console.log('params - dg', params)

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

  return (
    <div className="container">
      {isFetching === true ? (
        <h3 className="text-center my-5">...buscando</h3>
      ) : (
        <div>
          <h3 className="text-center my-3">
            GRUPO DE VIAJE : {singleGroup.groupName}{' '}
          </h3>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  <h1>Miembros</h1>
                </li>
                {singleGroup.members.map((member, index) => (
                  <li className="list-group-item" key={index}>
                    <h3>{member.username}</h3>
                  </li>
                ))}
              </ul>
              <div className="my-3">
                <button
                  className="btn btn-danger mr-2"
                  onClick={handleDeleteGroup}
                >
                  Borrar Grupo
                </button>
                <Link
                  to={`/groups/${params.groupId}/edit`}
                  className="btn btn-secondary"
                >
                  Editar Grupo
                </Link>
              </div>
            </div>
          </div>
          <ListExpenses members={singleGroup.members} />
        </div>
      )}
    </div>
  )
}

export default DetailsGroups
