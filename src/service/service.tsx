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
const getByTitle = (data : string | null) => {
    return http.get<Array<TutorialData>>(`/?title=${data}`);
}
const Service = {
    getAll,
    addTutorial,
    deleteAllTutorial,
    getByTitle
};

export default Service;