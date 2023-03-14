import service from './config.services'

const signupService = (newUser) => {
  return service.post('/auth/signup', newUser)
}

const loginService = (userCredentials) => {
  return service.post('/auth/login', userCredentials)
}

const verifyService = () => {
  return service.get('/auth/verify')
}

const getUsersService = () => {
  return service.get('/auth/users')
}

export { signupService, loginService, verifyService, getUsersService }
