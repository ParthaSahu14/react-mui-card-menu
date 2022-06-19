import axios from "axios";

export const triggerLogin = () => {
    return axios.get('http://localhost:9999/triggerAuth');
}