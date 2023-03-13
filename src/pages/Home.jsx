import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
	return (
		<div>
			<h3>Bienvenidos a mi "Splitrip"</h3>

			<NavLink to={"/signup"}>Sign up</NavLink>
			<br />
			<NavLink to={"/login"}>Log in</NavLink>
			<br />
			<NavLink to={"/profile"}>Perfil de usuario</NavLink>
		</div>
	);
}

export default Home;
