import React, {useState} from "react";
import {createGroupServices} from "../services/groups.services";

function AddGroup(props) {
  const [groupName, setgroupName] = useState("");

  const handlegroupNameChange = (e) => setgroupName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGroup = {
      groupName: groupName,
    };

    try {
      const response = await createGroupServices(newGroup);
      console.log(response);
      props.getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Agregar grupo</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="groupName ">Nombre del grupo</label>
        <input type="text" name=" groupName" onChange={handlegroupNameChange}  value={groupName} />
        <br />
        {/* <label htmlFor=" ">Miembros</label>
        <input type="text" name=" " />
        <br /> */}

        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default AddGroup;
