import service from "./config.services";

const getAllGroupsServices = () => {
  return service.get("/groups");
};

const createGroupServices = (newGroup) => {
  return service.post("/groups", newGroup);
};

const singleGroupServices = (groupId) => {
  return service.get(`/groups/${groupId}`);
};

const deleteGroupServices = (todoId) => {
  return service.delete(`/groups/${todoId}`);
};

const updateGroupServices = (todoId) => {
  return service.patch(`/groups/${todoId}`);
};


export {
  getAllGroupsServices,
  createGroupServices,
  singleGroupServices,
  deleteGroupServices,
  updateGroupServices
};
