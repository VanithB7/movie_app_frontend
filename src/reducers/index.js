import authReducer from "./authReducer";
import cityReducer from './cityReducer';
import userReducer from './userReducer';
import bannerReducer from './bannerReducer';
import genreReducer from './genreReducer';
import movieReducer from './movieReducer';
import showReducer from './showReducer';
import theatreReducer from './theatreReducer';
import {combineReducers} from 'redux';

const rootReducer= combineReducers({
    auth:authReducer,
    citys:cityReducer,
    users:userReducer,
    banners:bannerReducer,
    genres:genreReducer,
    movies:movieReducer,
    shows:showReducer,
    theatres:theatreReducer

});

export default rootReducer;
