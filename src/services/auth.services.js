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
const updateUserServices = (userId, updatedUser) => {
  return service.patch(`/user/${userId}` , updatedUser);
};

export { signupService, loginService, verifyService, getUsersService,updateUserServices }
