import {useEffect} from "react";
import {useState} from "react";
import {getAllGroupsServices} from "../services/groups.services";
import {Link} from "react-router-dom";
import AddForm from "../components/AddForm";

function listGroups() {
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
      <AddForm getData={getData} />
      <hr />
      <h3>Lista de Grupos</h3>

      {allGroups.map((eachTodo) => {
        return (
          <p key={eachTodo._id}>
            <Link to={`/todos/${eachTodo._id}/details`}>{eachTodo.title}</Link>
          </p>
        );
      })}
    </div>
  );
}

export default listGroups;
