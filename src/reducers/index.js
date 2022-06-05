import authReducer from "./authReducer";
import cityReducer from './cityReducer';
import userReducer from './userReducer';
import bannerReducer from './bannerReducer';
import genreReducer from './genreReducer';
import {combineReducers} from 'redux';

const rootReducer= combineReducers({
    auth:authReducer,
    citys:cityReducer,
    users:userReducer,
    banners:bannerReducer,
    genres:genreReducer

});

export default rootReducer;
