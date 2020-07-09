import Axios from "../lib/Axios/Axios";
import setAuthToken from "../lib/Axios/setAuthToken"
import {
  CREATE_ITEM, 
  GET_ALL_ITEMS, 
  RENT_ITEM, 
  RETURN_ITEM, 
  WAIT_LIST, 
  PROFILE_ITEMS, 
  DELETE_ITEM,
  REMOVE_ITEM_WAIT_LIST, 
  GET_CREATED_ITEMS,
  GET_RENTED_ITEMS, 
  GET_WAIT_LIST_ITEMS
} from "../constants/itemConstant"


export const createItem = (itemInfo) => async (dispatch) => {
  try {
    let success = await Axios.post("/api/items/create-item", itemInfo);
    dispatch({
      type: CREATE_ITEM,
      payload: success.data,
    });
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e.response.data.message);
  }
};

export const getAllItems = () => async (dispatch) => {
  try {
    let success = await Axios.get("/api/items/all-rental-items");
    // console.log("$$$$$", success)
    dispatch({
      type: GET_ALL_ITEMS,
      payload: success.data,
    });
  } catch (e) {
    console.log("ERROR", e)
    return Promise.reject(e.response.data.message);
  }
};

export const rentItem = (itemInfo) => async (dispatch) => {
  try {
    // console.log("Check?")
    let success = await Axios.put("/api/items/rent-item", itemInfo)
    dispatch({
      type: RENT_ITEM,
      payload: success.data,
    });
    // console.log("PAYLOAD",success.data)
  } catch (e) {
    // console.log("ERROR", e)
    return Promise.reject(e.response.data.message);
  }
};

export const waitListItem = (itemInfo) => async (dispatch) => {
  try {
    console.log("Check?")
    let success = await Axios.put("/api/items/wait-list-item", itemInfo)
    console.log("Check#2", success)
    dispatch({
      type: WAIT_LIST,
      payload: success.data,
    });
    console.log("Test Test")
    return Promise.resolve();
  } catch (e) {
    // console.log("ERROR", e)
    return Promise.reject(e.response.data.message);
  }
};
export const returnItem = (itemInfo) => async (dispatch) => {
  try {
    // console.log("Check?")
    let success = await Axios.put("/api/items/return-item", itemInfo)
    dispatch({
      type: RETURN_ITEM,
      payload: success.data,
    });
  } catch (e) {
    // console.log("ERROR", e)
    return Promise.reject(e.response.data.message);
  }
};
export const removeWaitList = (itemInfo) => async (dispatch) => {
  try {
    let success = await Axios.put("/api/items/remove-wait-list", itemInfo)
    dispatch({
      type: REMOVE_ITEM_WAIT_LIST,
      payload: success.data,
    });
    return Promise.resolve();
  } catch (e) {
    // console.log("ERROR", e)
    return Promise.reject(e.response.data.message);
  }
};
// export const getAllProfileItems = (itemInfo) => async (dispatch) => {
//   try {
//     // console.log("Check?")
//     let success = await Axios.get("/api/items/all-profile-items", itemInfo)
//     dispatch({
//       type: PROFILE_ITEMS,
//       payload: success.data,
//       // type: RESET_APP,
//     });
//   } catch (e) {
//     // console.log("ERROR", e)
//     return Promise.reject(e.response.data.message);
//   }
// };
export const getAllCreatedItems = (itemInfo) => async (dispatch) => {
  try {
    // console.log("Check?")
    let success = await Axios.get("/api/items/all-created-items", itemInfo)
    dispatch({
      type: GET_CREATED_ITEMS,
      payload: success.data,
      // type: RESET_APP,
    });
  } catch (e) {
    // console.log("ERROR", e)
    return Promise.reject(e.response.data.message);
  }
};
export const getAllRentedItems = (itemInfo) => async (dispatch) => {
  try {
    // console.log("Check?")
    let success = await Axios.get("/api/items/all-rented-items", itemInfo)
    dispatch({
      type: GET_RENTED_ITEMS,
      payload: success.data,
      // type: RESET_APP,
    });
  } catch (e) {
    // console.log("ERROR", e)
    return Promise.reject(e.response.data.message);
  }
};
export const getAllWaitListItems = (itemInfo) => async (dispatch) => {
  try {
    // console.log("Check?")
    let success = await Axios.get("/api/items/all-wait-list-items", itemInfo)
    dispatch({
      type: GET_WAIT_LIST_ITEMS,
      payload: success.data,
      // type: RESET_APP,
    });
  } catch (e) {
    // console.log("ERROR", e)
    return Promise.reject(e.response.data.message);
  }
};
export const getAllProfileItems = (itemInfo) => async (dispatch) => {
  try {
    // console.log("Check?")
    let success = await Axios.get("/api/items/all-profile-items", itemInfo)
    dispatch({
      type: PROFILE_ITEMS,
      payload: success.data,
      // type: RESET_APP,
    });
  } catch (e) {
    // console.log("ERROR", e)
    return Promise.reject(e.response.data.message);
  }
};
export const deleteItem = (id) => async (dispatch) => {
  try {
    let success = await Axios.delete(`/api/items/delete-item/${id}`)
    dispatch({
      type: DELETE_ITEM,
      payload: success.data
    });
  } catch (e) {
    // console.log("ERROR", e)
    return Promise.reject(e.response.data.message);
  }
};



