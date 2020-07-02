import Axios from "../lib/Axios/Axios";
import setAuthToken from "../lib/Axios/setAuthToken"
import {CREATE_ITEM, GET_ALL_ITEMS} from "../constants/itemConstant"


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