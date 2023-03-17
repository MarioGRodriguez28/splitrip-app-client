import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginService } from '../../services/auth.services'
import { AuthContext } from '../../context/auth.context'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login() {
  const { authenticateUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleUsernameChange = (e) => setUsername(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleLogin = async (e) => {
    e.preventDefault()

    const userCredentials = {
      username: username,
      password: password,
    }

    try {
      const response = await loginService(userCredentials)
      console.log(response)

      localStorage.setItem('authToken', response.data.authToken)

      authenticateUser()
      console.log('Token fue validado')
      navigate('/profile')
    } catch (error) {
      console.log(error)

      console.log(error.response.status)
      console.log(error.response.data.errorMessage)
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      } else {
        navigate('/error')
      }
    }
  }

  return (
    <div className="container">
      <h1>Log In</h1>

      <Form onSubmit={handleLogin}>
        <Form.Group controlId="username">
          <Form.Label>Nombre de usuario</Form.Label>
          <br />
          <Form.Control
            class="col-xs-3"
            type="text"
            placeholder="Introduce tu nombre"
            value={username}
            onChange={handleUsernameChange}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <br />

        {errorMessage !== '' ? <p>{errorMessage}</p> : null}

        <Button variant="secondary" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  )
}

export default Login
