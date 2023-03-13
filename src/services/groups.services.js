import service from "./config.services";

const getAllGroupsServices = () => {
  return service.post("/auth/groups", userCredentials);
};

const createGroupServices = (newGroup) => {
  return service.post("/auth/groups", newGroup);
};

const singleGroupServices = (groupId) => {
  return service.get(`/auth/groups/${groupId}`);
};

const deleteGroupServices = (todoId) => {
  return service.delete(`/auth/${todoId}`);
};

const updateGroupServices = (todoId) => {
  return service.patch(`/auth/${todoId}`);
};


export {
  getAllGroupsServices,
  createGroupServices,
  singleGroupServices,
  deleteGroupServices,
  updateGroupServices
};
