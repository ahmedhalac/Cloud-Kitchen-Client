import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  ADD_RESTAURANT,
  ADD_RESTAURANT_TYPE,
  FETCH_RESTAURANT_TYPES,
  FETCH_RESTAURANTS,
  EDIT_RESTAURANT,
  EDIT_RESTAURANT_TYPE,
  ADD_FOOD_TYPE,
  FETCH_FOOD_TYPE,
  EDIT_FOOD_TYPE,
  DELETE_RESTAURANT_TYPE,
  DELETE_FOOD_TYPE,
  ADD_FOOD_DETAILS,
  ADD_MENU_NAME,
  FETCH_FOOD,
  FETCH_MENU_NAMES,
  ADD_GROUP_MENU,
  FETCH_GROUP_MENUS,
} from "./types";

import AuthService from "../services/authService";

export const register = (
  first_name,
  last_name,
  email,
  address,
  password,
  roles
) => (dispatch) => {
  return AuthService.register(
    first_name,
    last_name,
    email,
    address,
    password,
    roles
  ).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

//LOGIN
export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

//LOGOUT
export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};

//ADD Restaurant
export const addRestaurant = (name, address, city, stars, typeId) => (
  dispatch
) => {
  return AuthService.addRestaurant(name, address, city, stars, typeId).then(
    (response) => {
      dispatch({ type: ADD_RESTAURANT, payload: response.data });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

//ADD Restaurant Types
export const addRestaurantType = (name) => (dispatch) => {
  return AuthService.addRestaurantType(name).then(
    (response) => {
      dispatch({ type: ADD_RESTAURANT_TYPE, payload: response.data });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

//GET Restaurant Types
export const getRestaurantTypes = () => async (dispatch) => {
  const response = await AuthService.getRestaurantTypes();
  dispatch({ type: FETCH_RESTAURANT_TYPES, payload: response.data });
};

//GET Restaurants
export const getRestaurants = () => async (dispatch) => {
  const response = await AuthService.getRestaurants();
  dispatch({ type: FETCH_RESTAURANTS, payload: response.data });
};

//EDIT Restaurant
export const editRestaurant = (
  id,
  name,
  address,
  city,
  stars,
  typeId,
  deliver_distance
) => (dispatch) => {
  return AuthService.editRestaurant(
    id,
    name,
    address,
    city,
    stars,
    typeId,
    deliver_distance
  ).then(
    (response) => {
      dispatch({ type: EDIT_RESTAURANT, payload: response.data });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

//EDIT Restaurant Types
export const editRestaurantType = (id, name) => (dispatch) => {
  return AuthService.editRestaurantType(id, name).then(
    (response) => {
      dispatch({ type: EDIT_RESTAURANT_TYPE, payload: response.data });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

//ADD Food Types
export const addFoodType = (name) => (dispatch) => {
  return AuthService.addFoodType(name).then(
    (response) => {
      dispatch({ type: ADD_FOOD_TYPE, payload: response.data });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

//GET Food
export const getFood = () => async (dispatch) => {
  const response = await AuthService.getFood();
  dispatch({ type: FETCH_FOOD, payload: response.data });
};

//GET Food Type
export const getFoodType = () => async (dispatch) => {
  const response = await AuthService.getFoodType();
  dispatch({ type: FETCH_FOOD_TYPE, payload: response.data });
};

//EDIT Food Types
export const editFoodType = (id, name) => (dispatch) => {
  return AuthService.editFoodType(id, name).then(
    (response) => {
      dispatch({ type: EDIT_FOOD_TYPE, payload: response.data });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

//DELETE Restaurant Type
export const deleteRestaurantType = (id) => async (dispatch) => {
  const response = await AuthService.deleteRestaurantType(id);
  dispatch({ type: DELETE_RESTAURANT_TYPE, payload: response.data });
};

//DELETE Food Type
export const deleteFoodType = (id) => async (dispatch) => {
  const response = await AuthService.deleteFoodType(id);
  dispatch({ type: DELETE_FOOD_TYPE, payload: response.data });
};

//ADD Food Details
export const addFoodDetails = (
  name,
  price,
  ingredients,
  typeId,
  image,
  discount_end_time,
  discount_price
) => (dispatch) => {
  return AuthService.addFoodDetails(
    name,
    price,
    ingredients,
    typeId,
    image,
    discount_end_time,
    discount_price
  ).then(
    (response) => {
      dispatch({ type: ADD_FOOD_DETAILS, payload: response.data });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

//ADD Menu name
export const addMenuName = (menu_name) => (dispatch) => {
  return AuthService.addMenuName(menu_name).then(
    (response) => {
      dispatch({ type: ADD_MENU_NAME, payload: response.data });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

//GET Menu name
export const getMenuName = () => async (dispatch) => {
  const response = await AuthService.getMenuName();
  dispatch({ type: FETCH_MENU_NAMES, payload: response.data });
};

//EDIT Restaurant
export const addGroupMenu = (restaurantId, menuNameId, foodId) => (
  dispatch
) => {
  return AuthService.addGroupMenu(restaurantId, menuNameId, foodId).then(
    (response) => {
      dispatch({ type: ADD_GROUP_MENU, payload: response.data });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

//GET group menus
export const getGroupMenus = () => async (dispatch) => {
  const response = await AuthService.getGroupMenus();
  dispatch({ type: FETCH_GROUP_MENUS, payload: response.data });
};
