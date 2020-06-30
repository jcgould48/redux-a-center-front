import Axios from "../lib/Axios/Axios";
import setAuthToken from "../lib/Axios/setAuthToken"
import {CREATE_FRIEND, GET_ALL_FRIENDS} from "../constants/birthdayConstant"


export const createItem = (itemInfo) => async (dispatch) => {
  try {
    let success = await Axios.post("/api/items/create-rental-item", itemInfo);
    dispatch({
      type: CREATE_ITEM,
      payload: success.data,
    });
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e.response.data.message);
  }
};