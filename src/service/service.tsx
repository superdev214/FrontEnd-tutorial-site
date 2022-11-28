import TutorialData from "../types/tutorial";
import axios from "axios";

// const baseURL = "http://localhost:3000";
const http = axios.create({baseURL:"http://localhost:3000"});
const getAll = () => {
    return http.get<Array<TutorialData>>("/");
}
const addTutorial = (data : TutorialData) => {
    return http.post<TutorialData>("/",data);
}
const deleteAllTutorial = () => {
    return http.delete("/");
}
const Service = {
    getAll,
    addTutorial,
    deleteAllTutorial
};

export default Service;