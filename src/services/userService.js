//ACCESSING DATA
import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:3000/";

class UserService {
  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }

  getRestaurantAdminBoard() {
    return axios.get(API_URL + "restaurant_admin", { headers: authHeader() });
  }

  getCustomerBoard() {
    return axios.get(API_URL + "customer", { headers: authHeader() });
  }

  getDelivererBoard() {
    return axios.get(API_URL + "deliverer", { headers: authHeader() });
  }
}

export default new UserService();
