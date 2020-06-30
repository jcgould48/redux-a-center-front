import { CREATE_ITEM } from "../constants/itemConstant";

const initialState = {
  rentalItems: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_ITEM:
    return {
        ...state,
        rentalItems: [...state.items, action.payload],
    };
    
    default:
      return state;
  }
}