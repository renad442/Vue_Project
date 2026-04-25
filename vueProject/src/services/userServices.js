import axios from "axios";

const API = "http://localhost:4000/users";

export const getAllUsers = () => axios.get(API);
export const delUser = (id) => axios.delete(`${API}/${id}`);
export const getUserByID = (id) => axios.get(`${API}/${id}`);
export const addUser = (user) => axios.post(API, user);
export const editUser = (id, updatedUser) =>
  axios.patch(`${API}/${id}`, updatedUser);
