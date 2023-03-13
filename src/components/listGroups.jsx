import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {getAllGroupsServices} from "../services/groups.services";


function ListGroups() {
  const [allGroups, setAllgroups] = useState (null)
  const [isFetching, setIsFetching] = useState (true)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsFetching(true); 
    try {
      const response = await getAllGroupsServices();
      console.log(response);
      setAllgroups(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      // aqui deberia haber un navigate("/error")
    }
  };

  if (isFetching === true) {
    return <h3>... spinners</h3>;
  }

  return (
    <div>
      
      <hr />
      <h3>Lista de Grupos</h3>

      {allGroups.map((eachGroup) => {
        console.log(eachGroup)
        return (
          <p >
        
        <Link to={`/groups/${eachGroup._id}`}>{eachGroup.groupName}</Link>
          </p>
        );
      })}
    </div>
  );
}

export default ListGroups;
