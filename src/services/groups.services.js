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

const deleteGroupServices = (groupId) => {
  return service.delete(`/groups/${groupId}`);
};

const updateGroupServices = (groupId) => {
  return service.patch(`/groups/${groupId}`);
};


export {
  getAllGroupsServices,
  createGroupServices,
  singleGroupServices,
  deleteGroupServices,
  updateGroupServices
};
