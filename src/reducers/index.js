import authReducer from "./authReducer";
import cityReducer from './cityReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

const rootReducer= combineReducers({
    auth:authReducer,
    citys:cityReducer,
    users:userReducer
});

export default rootReducer;
