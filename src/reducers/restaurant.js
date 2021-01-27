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
} from "../actions/types";

const initialState = {
  resTypes: [],
  foodTypes: [],
  foodDetails: [],
  rest: [],
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

    default:
      return state;
  }
}
