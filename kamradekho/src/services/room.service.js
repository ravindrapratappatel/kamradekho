import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/data/';
class UserService {
  getrooms() {
    return axios.get(API_URL + "rooms")
      .then((response) => {
        return response.data;
      });
  }
  getroomsbylocation(location) {
    const params = {
      'location' : location
    }
    return axios.get(API_URL + "roomsbylocation" , {params})
      .then((response) => {
        return response.data;
      });
  }

  getPublicContent() {
    return axios.get(API_URL + 'all');
  }
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}
export default new UserService();