import Axios from './Axios'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'


export const createUser = async (userInfo) => {
    try{

        let success = await Axios.post('/api/users/create-user', userInfo);
        return success.data;
    } catch(e) {
        throw Error(e.response.data.message)
    }
}

export const isAuthenticated = ( ) => {
    if (typeof window == 'undefined') return false;
    
    let foundCookie = Cookies.get('jwt-cookie-recenter')
    if (foundCookie) {
        return true
    } else {
        return false
    }
}