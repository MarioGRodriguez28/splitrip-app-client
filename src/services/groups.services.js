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

const updateGroupServices = (groupId, updatedGroup) => {
  return service.patch(`/groups/${groupId}` , updatedGroup);
};

const getUserGroupsService = (userId) => {
  return service.get(`/users/${userId}/groups`);
};


const addUserToGroupServices = (groupId, userId) =>{
 
  return   service.put(`/users/${userId}/groups/${groupId}`);
    

  
}
export {
  getAllGroupsServices,
  createGroupServices,
  singleGroupServices,
  deleteGroupServices,
  updateGroupServices,
  getUserGroupsService,
  addUserToGroupServices
};
