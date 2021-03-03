import axios from "axios";

const instance = axios.create({
  baseURL: "https://project-tinder-backends.herokuapp.com",
});

export default instance;

//https://project-mern-tinder-app.web.app
