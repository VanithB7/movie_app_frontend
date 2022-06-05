import { data } from 'autoprefixer';
import * as actionTypes from '../constant/actionTypes';

const initialState={
    data:[],
    city:{},
    error:null,
    loading:false

}
const cityReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case actionTypes.CREATE_CITY_REQUEST:
             return {
                ...state,
              error:null,
              loading:true
            }
         case actionTypes.CREATE_CITY_SUCCESS:
         
            //console.log([...state.data, action.payload.data]);
             return {
                ...state,
             error:null,
             city:{},
             loading:false
            }
        case actionTypes.CREATE_CITY_ERROR:
             return {
                ...state,
               city:{},
               error:action.error,
               loading:false
            }

          case actionTypes.GET_CITYS_REQUEST:
             return {
                ...state,
              data:[],
              city:{},
              error:null,
              loading:true,
            }
         case actionTypes.GET_CITYS_SUCCESS:
             return {
                ...state,
             error:null,
             city:{},
             data:action.payload.data,
             loading:false
            }
        case actionTypes.GET_CITYS_ERROR:
             return {
                ...state,
               city:{},
               error:action.error,
               data:[],
               loading:false
            }

         case actionTypes.GET_CITY_BY_ID_REQUEST:
             return {
                ...state,
              city:{},
              error:null,
              loading:true,
            }
         case actionTypes.GET_CITY_BY_ID_SUCCESS:
             return {
                ...state,
             error:null,
             city:action.payload.data,
             loading:false
            }
        case actionTypes.GET_CITY_BY_ID_ERROR:
             return {
                ...state,
               city:{},
               error:action.error,
               loading:false
            }
 //update city
         case actionTypes.UPDATE_CITY_REQUEST:
             return {
                ...state,
              error:null,
              loading:true,
            }
         case actionTypes.UPDATE_CITY_SUCCESS:
             return {
                ...state,
             error:null,
             city:{},
             loading:false
            }
        case actionTypes.UPDATE_CITY_ERROR:
             return {
                ...state,
               error:action.error,
               loading:false
            }

            //delete city
         case actionTypes.DELETE_CITY_REQUEST:
             return {
                ...state,
              error:null,
              loading:true,
            }
         case actionTypes.DELETE_CITY_SUCCESS:
        
             return {
                ...state,
             error:null,
             city:{},
             
             data:state.data.filter(({ _id }) => _id !== action.payload),
             loading:false
            }
        case actionTypes.DELETE_CITY_ERROR:
             return {
                ...state,
               error:action.error,
               loading:false
            }
        default:
            return state;
    }

}

export default cityReducer;