import axios from "axios";

const instance = axios.create({
    baseURL: "https://my-burger-app-6b60d.firebaseio.com/"
});
 export default instance;
