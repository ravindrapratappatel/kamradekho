import axios from 'axios';
// const API_URL = 'http://localhost:5000/api/data/';
const API_URL = 'http://139.59.40.65:5000/api/data/';
class DataService {
  getlocations() {
    return axios.get(API_URL + "roomlocations")
      .then((response) => {
        return response.data;
      });
  }
}
export default new DataService();