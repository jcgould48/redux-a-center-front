import {
    AUTH_USER_LOGGED_IN_SUCCESSFUL,
    // AUTH_USER_LOGOUT,
} from "../actionTypes/authUserActionType";
// import { History } from '../lib/helpers/History/History';
import setAuthToken from '../lib/Axios/setAuthToken'
import jwt_decode from 'jwt-decode'
import {LOGOUT} from '../constants/authUserConstant'
import Axios from '../lib/Axios/Axios'

export const signupApi = (userInfo) => async (dispatch) => {
  console.log(userInfo)
  try {
    await Axios.post('/api/users/sign-up', userInfo)
    return Promise.resolve()
  } catch (e) {
    console.log(JSON.stringify(e))
    if (e.message) {
      return Promise.reject(e.message)
    } else {
      return Promise.reject(e.response.data.message)
    }
  }
}

export const login = (userInfo) => async (dispatch) => {
    try {
      let success = await Axios.post("/api/users/login", userInfo);
        console.log("AAAAA", success.data.jwtToken)
      let { jwtToken, jwtRefreshToken } = success.data;
  
      dispatch(setAuthSuccessUser(jwtToken, jwtRefreshToken));
  
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

export const logout = () => (dispatch)=> {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  dispatch({
    type: LOGOUT
  })
}
export const setAuthSuccessUser = (jwtToken, jwtRefreshToken) => (dispatch) => {
    setAuthToken(jwtToken);
    localStorage.setItem("jwtToken", jwtToken);
    localStorage.setItem("jwt-refresh-Token", jwtRefreshToken);
  
    let decoded = jwt_decode(jwtToken);
  
    dispatch({
      type: AUTH_USER_LOGGED_IN_SUCCESSFUL,
      payload: decoded,
    });
  };

export const checkReloadToken = (decoded) => (dispatch) => {
  dispatch({
    type:AUTH_USER_LOGGED_IN_SUCCESSFUL,
    payload:decoded,
  })
}


