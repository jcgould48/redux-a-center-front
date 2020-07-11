import { 
  CREATE_ITEM, 
  GET_ALL_ITEMS, 
  RENT_ITEM, RETURN_ITEM, 
  WAIT_LIST, 
  PROFILE_ITEMS, 
  DELETE_ITEM, 
  REMOVE_ITEM_WAIT_LIST,
  GET_WAIT_LIST_ITEMS,
  GET_RENTED_ITEMS,
  GET_CREATED_ITEMS
} from "../constants/itemConstant";

const initialState = {
  availability: true,
  rentalItems: [],
  createdItems: [],
  rentedItems: [],
  waitListItems: [],
};
// const usersDefaultState = []

export default function (state = initialState, action) {
  switch (action.type) {
    // case "RESET_APP":
    // return usersDefaultState;

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
        let mapper = state.rentalItems.map(item => {
          if (item._id === action.payload._id) {
            return {
              ...item,
              availability:false,
            }
          }
          return item
        });
      return {
        ...state,
        rentalItems: mapper
        };
       
    case RETURN_ITEM:
      return {
        ...state,
        rentalItems: [action.payload],
        rentedItems: state.rentedItems.filter(
          (item)=> item._id !== action.payload._id)
      };
    case WAIT_LIST:
      // console.log("Check#3", action.payload)
      // console.log("Check#3", action.payload.itemsWaitListed)
      return {
        ...state,
        // rentalItems: [action.payload],
        rentalItems: [...state.rentalItems],
        // waitListItems: [...state.waitListItems, ...action.payload.itemsWaitListed],
      };
    case GET_CREATED_ITEMS:
      return {
        ...state,
        createdItems: [...state.createdItems, ...action.payload.created],
      };
    case GET_RENTED_ITEMS:
      // console.log("Rented Items problems1", action.payload.rented)
      return {
        ...state,
        rentedItems: [...state.rentedItems, ...action.payload.rented],
      };
    case GET_WAIT_LIST_ITEMS:
      // console.log("WaitList problems1", action.payload.waitListed)
      return {
        ...state,
        waitListItems: [...state.waitListItems, ...action.payload.waitListed],
      };
    case DELETE_ITEM:
      return {
        ...state,
        createdItems: state.createdItems.filter(
             (item)=> item._id !== action.payload._id)
      };
    case REMOVE_ITEM_WAIT_LIST:
      // console.log("WaitList problems2", state.waitListItems)
      return {
        ...state,
        // rentalItems: [action.payload],
        waitListItems: state.waitListItems.filter(
          (item)=> item._id !== action.payload._id)
      };
    default:
      return state;
  }
}