import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {loginService} from "../../services/auth.services";

import {AuthContext} from "../../context/auth.context";

function Login() {
  const {authenticateUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    const userCredentials = {
      username: username,
      password: password,
    };

    try {
      const response = await loginService(userCredentials);
      console.log(response);

      localStorage.setItem("authToken", response.data.authToken);

      authenticateUser();
      console.log(
        "Token fue validado"
      );
      navigate("/profile");
    } catch (error) {
      console.log(error);

      console.log(error.response.status);
      console.log(error.response.data.errorMessage);
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div>
      <h1>Log In</h1>

      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <br />

        {errorMessage !== "" ? <p>{errorMessage}</p> : null}

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
