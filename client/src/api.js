import axios from 'axios';
const baseURL = 'http://localhost:8080/api';

export const API = {
    emailImg() {
        return axios.get(`${baseURL}/emailImage`)
    }
}
