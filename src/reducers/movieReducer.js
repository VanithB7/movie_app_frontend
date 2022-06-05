import { data } from 'autoprefixer';
import * as actionTypes from '../constant/actionTypes';

const initialState={
    data:[],
    movie:{},
    error:null,
    loading:false

}
const movieReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case actionTypes.CREATE_MOVIE_REQUEST:
             return {
                ...state,
              error:null,
              loading:true
            }
         case actionTypes.CREATE_MOVIE_SUCCESS:
         
            //console.log([...state.data, action.payload.data]);
             return {
                ...state,
             error:null,
             movie:{},
             loading:false
            }
        case actionTypes.CREATE_MOVIE_ERROR:
             return {
                ...state,
               movie:{},
               error:action.error,
               loading:false
            }

          case actionTypes.GET_MOVIES_REQUEST:
             return {
                ...state,
              data:[],
              movie:{},
              error:null,
              loading:true,
            }
         case actionTypes.GET_MOVIES_SUCCESS:
             return {
                ...state,
             error:null,
             movie:{},
             data:action.payload.data,
             loading:false
            }
        case actionTypes.GET_MOVIES_ERROR:
             return {
                ...state,
               movie:{},
               error:action.error,
               data:[],
               loading:false
            }

         case actionTypes.GET_MOVIE_BY_ID_REQUEST:
             return {
                ...state,
              movie:{},
              error:null,
              loading:true,
            }
         case actionTypes.GET_MOVIE_BY_ID_SUCCESS:
             return {
                ...state,
             error:null,
             movie:action.payload.data,
             loading:false
            }
        case actionTypes.GET_MOVIE_BY_ID_ERROR:
             return {
                ...state,
               movie:{},
               error:action.error,
               loading:false
            }
 //update movie
         case actionTypes.UPDATE_MOVIE_REQUEST:
             return {
                ...state,
              error:null,
              loading:true,
            }
         case actionTypes.UPDATE_MOVIE_SUCCESS:
             return {
                ...state,
             error:null,
             movie:{},
             loading:false
            }
        case actionTypes.UPDATE_MOVIE_ERROR:
             return {
                ...state,
               error:action.error,
               loading:false
            }

            //delete movie
         case actionTypes.DELETE_MOVIE_REQUEST:
             return {
                ...state,
              error:null,
              loading:true,
            }
         case actionTypes.DELETE_MOVIE_SUCCESS:
        
             return {
                ...state,
             error:null,
             movie:{},
             
             data:state.data.filter(({ _id }) => _id !== action.payload),
             loading:false
            }
        case actionTypes.DELETE_MOVIE_ERROR:
             return {
                ...state,
               error:action.error,
               loading:false
            }
        default:
            return state;
    }

}

export default movieReducer;