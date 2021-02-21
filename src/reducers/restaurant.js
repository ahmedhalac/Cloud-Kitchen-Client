import {
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
  FETCH_FOOD,
  FETCH_MENU_NAMES,
  ADD_GROUP_MENU,
  FETCH_GROUP_MENUS,
  FETCH_ORDER_DATA,
  ADD_ORDER,
  FETCH_ORDERS,
} from "../actions/types";

const initialState = {
  resTypes: [],
  foodTypes: [],
  foodDetails: [],
  rest: [],
  food: [],
  menuNames: [],
  groupMenu: [],
  orderData: [],
  orders: [],
};

export default function restaurantReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_RESTAURANT_TYPE:
      return {
        ...state,
        resTypes: { ...state.restTypes, ...payload },
      };
    case ADD_FOOD_TYPE:
      return {
        ...state,
        foodTypes: { ...state.foodTypes, ...payload },
      };
    case ADD_FOOD_DETAILS:
      return {
        ...state,
        foodDetails: { ...state.foodDetails, ...payload },
      };

    case ADD_GROUP_MENU:
      return {
        ...state,
        groupMenu: { ...state.groupMenu, ...payload },
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: { ...state.orders, ...payload },
      };
    case FETCH_RESTAURANT_TYPES:
      return {
        ...state,
        resTypes: payload,
      };
    case FETCH_RESTAURANTS:
      return {
        ...state,
        rest: payload,
      };
    case FETCH_FOOD_TYPE:
      return {
        ...state,
        foodTypes: payload,
      };

    case FETCH_ORDERS:
      return {
        ...state,
        orders: payload,
      };

    case EDIT_RESTAURANT:
      return {
        ...state,
        rest: { ...state.rest, ...payload },
      };
    case EDIT_RESTAURANT_TYPE:
      return {
        ...state,
        resTypes: { ...state.resTypes, ...payload },
      };
    case EDIT_FOOD_TYPE:
      return {
        ...state,
        foodTypes: { ...state.foodTypes, ...payload },
      };
    case DELETE_RESTAURANT_TYPE:
      let newState = Object.keys(state.resTypes).reduce((r, e) => {
        if (!payload[e]) r[e] = state.resTypes[e];
        return r;
      }, {});

      return { ...state, resTypes: newState };

    case DELETE_FOOD_TYPE:
      let newState2 = Object.keys(state.foodTypes).reduce((r, e) => {
        if (!payload[e]) r[e] = state.foodTypes[e];
        return r;
      }, {});

      return { ...state, foodTypes: newState2 };

    case FETCH_FOOD:
      return {
        ...state,
        food: payload,
      };

    case FETCH_MENU_NAMES:
      return {
        ...state,
        menuNames: payload,
      };
    case FETCH_GROUP_MENUS:
      return {
        ...state,
        menuNames: payload,
      };

    case FETCH_ORDER_DATA:
      return {
        ...state,
        orderData: payload,
      };

    default:
      return state;
  }
}
