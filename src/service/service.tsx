import {typeTutorial, typeUser} from "../types/typeData";
import axios from "axios";

// const baseURL = "http://localhost:3000";
const http = axios.create({baseURL:"http://localhost:3000"});
//Tutorial
const getAll = () => {
    return http.get<Array<typeTutorial>>("/");
}
const addTutorial = (data : typeTutorial) => {
    return http.post<typeTutorial>("/",data);
}
const deleteAllTutorial = () => {
    return http.delete("/");
}
const getByTitle = (data : string | null) => {
    return http.get<Array<typeTutorial>>(`/?title=${data}`);
}
//User
const checkLogin = (data : typeUser) => {
    return http.post<typeUser>("/login",data);
}
const checkRegister = (data : typeUser) => {
    return http.post<typeUser>("/register",data);
}
const Service = {
    getAll,
    addTutorial,
    deleteAllTutorial,
    getByTitle,
    //user
    checkLogin,
    checkRegister
};

export default Service;