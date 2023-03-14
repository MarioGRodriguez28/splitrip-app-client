import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Navigate } from "react-router-dom"

function IsPrivate(props) {
  const { isLoggedIn } = useContext(AuthContext)

  if (isLoggedIn === true) {
    // solo renderiza el componente envuelto si el usuario está activo
    return props.children
  } else {
    // el sistema no me permitira hacer navigate con useNavigate en la base del componente

    // si no estas activo e intentas acceder al componente envuelto, te redirecciono a /login
    return <Navigate to="/login"/>
  }

}

export default IsPrivate