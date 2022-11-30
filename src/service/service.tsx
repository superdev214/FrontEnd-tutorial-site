import { typeTutorial, typeUser } from "../types/typeData";
import axios from "axios";

// const baseURL = "http://localhost:3000";
const http = axios.create({ baseURL: "http://localhost:3000" });
//Tutorial
const saveToken = () => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
  http.defaults.headers.common["x-access-token"] = token;
};
const getAll = () => {
  saveToken();
  return http.get<Array<typeTutorial>>("/");
};
const addTutorial = (data: typeTutorial) => {
  saveToken();
  return http.post<typeTutorial>("/", data);
};
const deleteAllTutorial = () => {
  saveToken();
  return http.delete("/");
};
const getByTitle = (data: string | null) => {
  saveToken();
  return http.get<Array<typeTutorial>>(`/?title=${data}`);
};
//User router
const checkLogin = (data: typeUser) => {
  return http.post<typeUser>("/login", data);
};
const checkRegister = (data: typeUser) => {
  return http.post<typeUser>("/register", data);
};
const Service = {
  getAll,
  addTutorial,
  deleteAllTutorial,
  getByTitle,
  //user
  checkLogin,
  checkRegister,
};

export default Service;
