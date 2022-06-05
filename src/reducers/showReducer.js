import { data } from 'autoprefixer';
import * as actionTypes from '../constant/actionTypes';

const initialState={
    data:[],
    show:{},
    error:null,
    loading:false

}
const showReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case actionTypes.CREATE_SHOW_REQUEST:
             return {
                ...state,
              error:null,
              loading:true
            }
         case actionTypes.CREATE_SHOW_SUCCESS:
         
            //console.log([...state.data, action.payload.data]);
             return {
                ...state,
             error:null,
             show:{},
             loading:false
            }
        case actionTypes.CREATE_SHOW_ERROR:
             return {
                ...state,
               show:{},
               error:action.error,
               loading:false
            }

          case actionTypes.GET_SHOWS_REQUEST:
             return {
                ...state,
              data:[],
              show:{},
              error:null,
              loading:true,
            }
         case actionTypes.GET_SHOWS_SUCCESS:
             return {
                ...state,
             error:null,
             show:{},
             data:action.payload.data,
             loading:false
            }
        case actionTypes.GET_SHOWS_ERROR:
             return {
                ...state,
               show:{},
               error:action.error,
               data:[],
               loading:false
            }

         case actionTypes.GET_SHOW_BY_ID_REQUEST:
             return {
                ...state,
              show:{},
              error:null,
              loading:true,
            }
         case actionTypes.GET_SHOW_BY_ID_SUCCESS:
             return {
                ...state,
             error:null,
             show:action.payload.data,
             loading:false
            }
        case actionTypes.GET_SHOW_BY_ID_ERROR:
             return {
                ...state,
               show:{},
               error:action.error,
               loading:false
            }
 //update show
         case actionTypes.UPDATE_SHOW_REQUEST:
             return {
                ...state,
              error:null,
              loading:true,
            }
         case actionTypes.UPDATE_SHOW_SUCCESS:
             return {
                ...state,
             error:null,
             show:{},
             loading:false
            }
        case actionTypes.UPDATE_SHOW_ERROR:
             return {
                ...state,
               error:action.error,
               loading:false
            }

            //delete show
         case actionTypes.DELETE_SHOW_REQUEST:
             return {
                ...state,
              error:null,
              loading:true,
            }
         case actionTypes.DELETE_SHOW_SUCCESS:
        
             return {
                ...state,
             error:null,
             show:{},
             
             data:state.data.filter(({ _id }) => _id !== action.payload),
             loading:false
            }
        case actionTypes.DELETE_SHOW_ERROR:
             return {
                ...state,
               error:action.error,
               loading:false
            }
        default:
            return state;
    }

}

export default showReducer;