import axios from 'axios';
const baseURL = 'http://localhost:8080/api';

export const API = {
    emailImg(userEmail) {
        return axios.get(`${baseURL}/emailImage?userEmail=${userEmail}`)
    }
}
