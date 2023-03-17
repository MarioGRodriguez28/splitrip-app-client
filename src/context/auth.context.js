import { createContext, useState, useEffect } from 'react'
import { verifyService } from '../services/auth.services.js'

const AuthContext = createContext()

function AuthWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  const authenticateUser = async () => {
    setIsFetching(true)
    try {
      const response = await verifyService()
      console.log('Token es valido')
      console.log(response)
      setIsLoggedIn(true)
      setLoggedUser(response.data)
      setIsFetching(false)
    } catch (error) {
      console.log('Token invalido o no existe')
      console.log(error)
      setIsLoggedIn(false)
      setLoggedUser(null)
      setIsFetching(false)
    }
  }

  useEffect(() => {
    authenticateUser()
  }, [])

  const passedContext = {
    isLoggedIn,
    loggedUser,
    authenticateUser,
  }

  if (isFetching === true) {
    return (
      <div className="App">
        <h2>...validando credenciales</h2>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthWrapper }
