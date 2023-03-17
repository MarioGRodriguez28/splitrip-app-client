import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signupService } from '../../services/auth.services.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleUsernameChange = (e) => setUsername(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleSignup = async (e) => {
    e.preventDefault()

    const newUser = {
      username: username,
      password: password,
    }

    try {
      await signupService(newUser)
      navigate('/login')
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      } else {
        navigate('/error')
      }
    }
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <Form onSubmit={handleSignup}>
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

        {errorMessage !== '' ? (
          <Alert variant="danger">{errorMessage}</Alert>
        ) : null}
        <br />
        <Button variant="secondary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  )
}

export default Signup
