import {combineReducers} from 'redux';
import authUserReducer from './authUserReducer'
import itemReducer from './itemReducer'

export default  combineReducers({
    authUser: authUserReducer,
    rentalItem: itemReducer
})