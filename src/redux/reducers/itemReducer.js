import { CREATE_ITEM, GET_ALL_ITEMS  } from "../constants/itemConstant";

const initialState = {
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
    default:
      return state;
  }
}