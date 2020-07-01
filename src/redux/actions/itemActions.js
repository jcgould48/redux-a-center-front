import Axios from "../lib/Axios/Axios";
import setAuthToken from "../lib/Axios/setAuthToken"
import {CREATE_ITEM} from "../constants/itemConstant"


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