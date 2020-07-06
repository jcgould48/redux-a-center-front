import { CREATE_ITEM, GET_ALL_ITEMS, RENT_ITEM, RETURN_ITEM, WAIT_LIST } from "../constants/itemConstant";

const initialState = {
  availability: true,
  rentalItems: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_ITEM:
    return {
        ...state,
        rentalItems: [...state.rentalItems, action.payload],
    };
    case GET_ALL_ITEMS:
      return {
        rentalItems: [...action.payload],
      };
    case RENT_ITEM:
      return {
        ...state,
        rentalItems: [action.payload],
      };
    case RETURN_ITEM:
      return {
        ...state,
        rentalItems: [action.payload],
      };
    case WAIT_LIST:
      return {
        ...state,
        rentalItems: [action.payload],
      };
    default:
      return state;
  }
}