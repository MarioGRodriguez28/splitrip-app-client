import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { deleteGroupServices, singleGroupServices, updateGroupServices} from "../services/groups.services"
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
      
      await deleteGroupServices(params.groupId)
      navigate("/profile")

    } catch (error) {
      navigate("/error")
    }

  }
  const handleEditGroup = async () => {

    try {
      
      await updateGroupServices(params.groupId)
      navigate("/profile")

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
        
        
     
        <button onClick={handleDeleteGroup}>Borrar Grupo</button>
        <Link to={`/groups/${params.groupId}/edit`}>
          <button>Editar Grupo</button>
        </Link>
        <ListExpenses/>
    
     
      </div>
    }

    </div>
  );
}

export default DetailsGroups;
