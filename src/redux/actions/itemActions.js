import Axios from "../lib/Axios/Axios";
import setAuthToken from "../lib/Axios/setAuthToken"
import {CREATE_ITEM, GET_ALL_ITEMS, RENT_ITEM, RETURN_ITEM, WAIT_LIST, PROFILE_ITEMS} from "../constants/itemConstant"


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
  } catch (e) {
    console.log("ERROR", e)
    return Promise.reject(e.response.data.message);
  }
};

export const waitListItem = (itemInfo) => async (dispatch) => {
  try {
    // console.log("Check?")
    let success = await Axios.put("/api/items/wait-list-item", itemInfo)
    dispatch({
      type: WAIT_LIST,
      payload: success.data,
    });
  } catch (e) {
    console.log("ERROR", e)
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
    console.log("ERROR", e)
    return Promise.reject(e.response.data.message);
  }
};
export const getAllProfileItems = (itemInfo) => async (dispatch) => {
  try {
    // console.log("Check?")
    let success = await Axios.get("/api/items/all-profile-items", itemInfo)
    dispatch({
      type: PROFILE_ITEMS,
      payload: success.data
      // success.data.created
    });
  } catch (e) {
    console.log("ERROR", e)
    return Promise.reject(e.response.data.message);
  }
};



