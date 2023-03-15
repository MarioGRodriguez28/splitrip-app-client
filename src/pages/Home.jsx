import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Home() {
	const { isLoggedIn, authenticateUser } = useContext(AuthContext)
	const navigate = useNavigate()


	const handleLogout = () => {
		localStorage.removeItem("authToken")
		authenticateUser()	
		navigate("/")
	}



	if (isLoggedIn === true) {
		return (
		  <div>
	
			<NavLink to="/">Home</NavLink>
			<br />
			<NavLink to={"/profile"}  end={true}>Perfil de usuario</NavLink>
			<br />
			<button onClick={handleLogout}>Logout</button>
		  </div>
		);
	  } else {
		return (
		  <div>
		  	  <h3>Bienvenidos a mi "Splitrip"</h3>
			{/* <NavLink to="/">Home</NavLink> */}
			<br />
			<NavLink to={"/signup"}>Sign up</NavLink>
			<br />
			<NavLink to={"/login"}>Log in</NavLink>
			
		  </div>
		);
	  }


	//----------------------------------------------------------

	// return (
	// 	<div>
			

	// 		<NavLink to={"/signup"}>Sign up</NavLink>
	// 		<br />
	// 		<NavLink to={"/login"}>Log in</NavLink>
	// 		<br />
	// 		<NavLink to={"/profile"}>Perfil de usuario</NavLink>
	// 	</div>
	// );
}

export default Home;
