import axios from 'axios';
const API_URL = 'http://localhost:8080/api/data/';
class DataService {
  getlocations() {
    return axios.get(API_URL + "roomlocations")
      .then((response) => {
        return response.data;
      });
  }
}
export default new DataService();