import { useEffect, useState } from "react";
import {  singleGroupServices, updateGroupServices} from "../services/groups.services"
import { useParams, useNavigate } from "react-router-dom"

function GroupEdit() {

  const params = useParams()
  const navigate = useNavigate()

  const [groupName, setGroupName] = useState("");
 
  const handleNameChange = (e) => setGroupName(e.target.value);


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    
    try {
      
      
      const response = await singleGroupServices(params.groupId)
      // console.log(response)

      setGroupName(response.data.groupName)
     

    

    } catch (error) {
      navigate("/error")
    }

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      
      const updatedGroup = {
        groupName
        
      }

      await updateGroupServices(params.groupId, updatedGroup)

      navigate(`/groups/${params.groupId}`)

    } catch (error) {
      navigate("/error")
    }

  };

  return (
    <div>
      <h3>Renombrar Grupo</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="groupName">Nuevo Nombre: </label>
        <input
          type="text"
          name="groupName"
          onChange={handleNameChange}
          value={groupName}
        />
        
      
        <br />
        <button type="submit">Editar</button>
      </form>
    </div>
  );
}

export default GroupEdit;
