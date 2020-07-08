import { 
  CREATE_ITEM, 
  GET_ALL_ITEMS, 
  RENT_ITEM, RETURN_ITEM, 
  WAIT_LIST, 
  PROFILE_ITEMS, 
  DELETE_ITEM, 
  REMOVE_ITEM_WAIT_LIST 
} from "../constants/itemConstant";

const initialState = {
  availability: true,
  rentalItems: [],
  createdItems: [],
  rentedItems: [],
  waitListItems: [],
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
        ...state,
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
    case PROFILE_ITEMS:
      // console.log("payload",action.payload.waitListed)
      // console.log("payload",action.payload.rented)
      console.log("payload",action.payload.created)
      console.log("STATE",state)
      return {
        ...state,
        rentalItems: [...state.rentalItems],
        createdItems: [...state.createdItems, ...action.payload.created],
        rentedItems: [...state.rentedItems, ...action.payload.rented],
        waitListItems: [...state.waitListItems, ...action.payload.waitListed],
      };
    case DELETE_ITEM:
      return {
        ...state,
        rentalItems: state.rentalItems.filter(
             (item)=> item._id !== action.payload._id)
      };
    case REMOVE_ITEM_WAIT_LIST:
      return {
        ...state,
        rentalItems: [action.payload],
      };
    default:
      return state;
  }
}