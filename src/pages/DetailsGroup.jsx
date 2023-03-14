import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
// import axios from "axios"
import { deleteGroupServices, singleGroupServices } from "../services/groups.services"
import ListExpenses from "../components/ListExpenses"

function DetailsGroups() {

  const navigate = useNavigate()
  const params = useParams()
  console.log(params)

  const [ singleGroup, setSingleGroup ] = useState(null)
  const [ isFetching, setIsFetching ] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      
      // const response = await axios.get(`http://localhost:5005/api/todo/${params.todoId}`)
      const response = await singleGroupServices(params.groupId)
      console.log(response)
      setSingleGroup(response.data)
      setIsFetching(false)

    } catch (error) {
      navigate("/error")
    }
  }

  const handleDeleteGroup = async () => {

    try {
      
      await deleteGroupServices(params.todoId)
      navigate("/groups")

    } catch (error) {
      navigate("/error")
    }

  }

  return (
    <div>
      

      { isFetching === true 
      ? <h3>...buscando</h3>
      : <div>
        <h3>GRUPO DE VIAJE : {singleGroup.groupName}</h3>
        
        
      <ListExpenses/>
        {/* <button onClick={handleDeleteGroup}>Borrar</button>
        <Link to={`/groups/${params.groupId}/edit`}>
          <button>Edit</button>
        </Link> */}
      </div>
    }

    </div>
  );
}

export default DetailsGroups;
