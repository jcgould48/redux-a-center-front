import setAuthToken from '../lib/Axios/setAuthToken'
import jwt_decode from 'jwt-decode'
import {SIGN_UP, LOGIN, LOGOUT} from '../constants/authUserConstant'
import axios from '../lib/Axios/Axios'

export const signupApi = (userInfo) => async (dispatch) => {
  console.log(userInfo)
  try {
    await axios.post('/api/users/sign-up', userInfo)
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

export const loginApi = (userInfo) => async (dispatch) => {
  try {
    let success = await axios.post(
      "/api/users/login",
      userInfo
    );
    const { jwtToken } = success.data;
    dispatch(setAuthSuccessUser(jwtToken));
    return Promise.resolve();
  } catch (e) {
    if (e.response && e.response.status === 500) {
      return Promise.reject(e.response.data.message);
    }
    if (e.message) {
      return Promise.reject(e.message);
    }
  }
};

export const logout = () => (dispatch)=> {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  dispatch({
    type: LOGOUT
  })
}
>>>>>>> f7b7f9802c7690b3208cc2dd91ce4ec28673187a
