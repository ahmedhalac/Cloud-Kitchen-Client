/*The service uses Axios for HTTP requests and Local Storage for user information & JWT.
It provides following important methods:

login(): POST {username, password} & save JWT to Local Storage
logout(): remove JWT from Local Storage
register(): POST {username, email, password}*/

import axios from "axios";

const API_URL = "http://localhost:3000/api/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", { email, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data)); //moguce Users
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(first_name, last_name, email, address, password, roles) {
    return axios.post(API_URL + "signup", {
      first_name,
      last_name,
      email,
      address,
      password,
      roles,
    });
  }

  addRestaurant(name, address, city, stars, typeId) {
    return axios.post(API_URL + "add-restaurant", {
      name,
      address,
      city,
      stars,
      typeId,
    });
  }

  addRestaurantType(name) {
    return axios.post(API_URL + "add-restaurant-type", {
      name,
    });
  }

  //GET Restaurant Types
  getRestaurantTypes(id, name) {
    return axios.get(API_URL + "get-restaurant-types", {
      id,
      name,
    });
  }

  getRestaurants(name, address, city, stars, rt_name) {
    return axios.get(API_URL + "get-restaurants", {
      name,
      address,
      city,
      stars,
      rt_name,
    });
  }

  editRestaurant(id, name, address, city, stars, typeId, deliver_distance) {
    return axios.put(API_URL + `edit-restaurant/${id}`, {
      name,
      address,
      city,
      stars,
      typeId,
      deliver_distance,
    });
  }

  editRestaurantType(id, name) {
    return axios.put(API_URL + `edit-restaurant-type/${id}`, {
      name,
    });
  }

  addFoodDetails(
    name,
    price,
    ingredients,
    typeId,
    image,
    discount_end_time,
    discount_price
  ) {
    return axios.post(API_URL + "add-food", {
      name,
      price,
      ingredients,
      typeId,
      image,
      discount_end_time,
      discount_price,
    });
  }

  addFoodType(name) {
    return axios.post(API_URL + "add-food-type", {
      name,
    });
  }

  getFood(name) {
    return axios.get(API_URL + "get-food", {
      name,
    });
  }

  getFoodType(name) {
    return axios.get(API_URL + "get-food-type", {
      name,
    });
  }

  editFoodType(id, name) {
    return axios.put(API_URL + `edit-food-type/${id}`, {
      name,
    });
  }

  deleteRestaurantType(id) {
    return axios.delete(API_URL + `delete-restaurant-type/${id}`);
  }

  deleteFoodType(id) {
    return axios.delete(API_URL + `delete-food-type/${id}`);
  }

  addMenuName(menu_name) {
    return axios.post(API_URL + "add-menu-name", {
      menu_name,
    });
  }

  getMenuName(menu_name) {
    return axios.get(API_URL + "get-menu-name", {
      menu_name,
    });
  }

  addGroupMenu(restaurantId, menuNameId, foodId) {
    return axios.post(API_URL + "add-group-menu", {
      restaurantId,
      menuNameId,
      foodId,
    });
  }

  getGroupMenus(res_name, menu_name, food_name, price) {
    return axios.get(API_URL + "get-group-menus", {
      res_name,
      menu_name,
      food_name,
      price,
    });
  }

  getOrderData(food_type, food_name, ingredients, image, id) {
    return axios.get(API_URL + "get-order-data", {
      food_type,
      food_name,
      ingredients,
      image,
      id,
    });
  }

  addOrder(selected_food, quantity, price) {
    return axios.post(API_URL + "add-order", {
      selected_food,
      quantity,
      price,
    });
  }

  getOrders(id, selected_food, quantity, price) {
    return axios.get(API_URL + "get-orders", {
      id,
      selected_food,
      quantity,
      price,
    });
  }

  deleteOrder(id) {
    return axios.delete(API_URL + `delete-order/${id}`);
  }

  addOrderDetails(
    first_name,
    last_name,
    email,
    phone,
    payment_type,
    order_time,
    note
  ) {
    return axios.post(API_URL + "add-order-details", {
      first_name,
      last_name,
      email,
      phone,
      payment_type,
      order_time,
      note,
    });
  }
}

export default new AuthService();
