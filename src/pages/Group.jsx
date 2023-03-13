import axios from 'axios'
import React, { useState, useEffect } from 'react'
import AddGroup from '../components/AddGroup'
import { Link } from "react-router-dom";


function Group() {

const [allGroups, setAllGroups] = useState(null)
const [ isFetching, setIsFetching ] = useState(true)

useEffect(() => {
  getData()
  
}, [])

const getData = async () => {
    try {

        const response = await axios.get("http://localhost:5005/api/groups/")
        console.log(response)
        setAllGroups(response.data)
        setIsFetching(false)
        
    } catch (error) {
        console.log(error)
    }
}

if (isFetching === true) {
    return <h3>... Aqui va el spinner</h3>
  }
  return (
    <div>
    <AddGroup/>

    <h3>Lista de grupos</h3>

    {allGroups.map((eachGroup) => {
        return (
          <p key={eachGroup._id}>
            <Link to={`/groups/${eachGroup._id}/details`}>{eachGroup.nameGroup}</Link>
          </p>
        )
      })}
    
    </div>
  )
}

export default Group