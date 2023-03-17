import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Card, Col, ListGroup, Row } from 'react-bootstrap'
// import Image1 from '../assets/1191628-ffffff.svg';
// import Image2 from '../assets/1910761-ffffff.svg';
// import Image3 from '../assets/309113-ffffff.svg'

function Home() {
  const { isLoggedIn, authenticateUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    authenticateUser()
    navigate('/')
  }

  const navLinks = (
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} to="/" exact>
        Home
      </Nav.Link>
      <Nav.Link as={NavLink} to="/profile" exact>
        Perfil de usuario
      </Nav.Link>
    </Nav>
  )

  const authButtons = (
    <Nav>
      <Nav.Link as={Button} variant="light" onClick={handleLogout}>
        Logout
      </Nav.Link>
    </Nav>
  )

  const loginButtons = (
    <Nav>
      <Link to="/signup">
        <Button as={Button} variant="light" to="/signup">
          Sign up
        </Button>
      </Link>
      <Link to="/login">
        <Button as={Button} variant="light" to="/login">
          Log in
        </Button>
      </Link>
    </Nav>
  )

  return (
    <div>
      <Navbar bg="light" expand="md">
        <Navbar.Brand class="m-4" as={NavLink} to="/" exact>
          Splitrip
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {isLoggedIn ? navLinks : null}
          {isLoggedIn ? authButtons : loginButtons}
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-3">
        <h3 className="text-white">Bienvenidos a "Splitrip"</h3>
        <p className="text-white">Menos estrés a la hora de compartir gastos en viajes</p>
        {/* {!isLoggedIn ? loginButtons : null} */}
        <Link to="/signup">
          <Button size="lg" as={Button} variant="light" to="/signup">
            Sign up
          </Button>
        </Link>
        <p className="text-white">
          Lleva un registro de los gastos y saldos compartidos con compañeros de
          piso, de viaje, grupos, amigos y familia.
        </p>
        <Container className="mt-3">
  {/* <Row>
    <Col>
      <Image1 />
    </Col>
    <Col>
      <Image2 />
    </Col>
    <Col>
      <Image3 />
    </Col>
  </Row> */}
  {/* Resto de tu código aquí */}
</Container>
        <Card cclass="p-3 mb-2 bg-transparent ">
  <Card.Body class="p-3 mb-2 bg-transparent ">
    <Card.Title class="p-3 mb-2 bg-success text-whithe"><h2>Todas nuestras funciones</h2></Card.Title>
    <Card.Text class=".bg-light.bg-gradient text-dark">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Añade grupos y amigos</li>
        <li class="list-group-item">Divide gastos, registra deudas</li>
        <li class="list-group-item">Divisiones a partes iguales o desiguales</li>
        <li class="list-group-item">Calcula saldos totales</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>



      </Container>
    </div>
  )
}

export default Home
