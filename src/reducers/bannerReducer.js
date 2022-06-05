import * as actionTypes from '../constant/actionTypes';

const initialState={
    data:[],
    banner:{},
    error:null,
    loading:false

}
const bannerReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case actionTypes.CREATE_BANNER_REQUEST:
             return {
                ...state,
              error:null,
              loading:true
            }
         case actionTypes.CREATE_BANNER_SUCCESS:
         
            //console.log([...state.data, action.payload.data]);
             return {
                ...state,
             error:null,
             banner:{},
             loading:false
            }
        case actionTypes.CREATE_BANNER_ERROR:
             return {
                ...state,
               banner:{},
               error:action.error,
               loading:false
            }

          case actionTypes.GET_BANNERS_REQUEST:
             return {
                ...state,
              data:[],
              banner:{},
              error:null,
              loading:true,
            }
         case actionTypes.GET_BANNERS_SUCCESS:
             return {
                ...state,
             error:null,
             banner:{},
             data:action.payload.data,
             loading:false
            }
        case actionTypes.GET_BANNERS_ERROR:
             return {
                ...state,
               banner:{},
               error:action.error,
               data:[],
               loading:false
            }

         case actionTypes.GET_BANNER_BY_ID_REQUEST:
             return {
                ...state,
              banner:{},
              error:null,
              loading:true,
            }
         case actionTypes.GET_BANNER_BY_ID_SUCCESS:
             return {
                ...state,
             error:null,
             banner:action.payload.data,
             loading:false
            }
        case actionTypes.GET_BANNER_BY_ID_ERROR:
             return {
                ...state,
               banner:{},
               error:action.error,
               loading:false
            }
 //update city
         case actionTypes.UPDATE_BANNER_REQUEST:
             return {
                ...state,
              error:null,
              loading:true,
            }
         case actionTypes.UPDATE_BANNER_SUCCESS:
             return {
                ...state,
             error:null,
             banner:{},
             loading:false
            }
        case actionTypes.UPDATE_BANNER_ERROR:
             return {
                ...state,
               error:action.error,
               loading:false
            }

            //delete city
         case actionTypes.DELETE_BANNER_REQUEST:
             return {
                ...state,
              error:null,
              loading:true,
            }
         case actionTypes.DELETE_BANNER_SUCCESS:
        
             return {
                ...state,
             error:null,
             banner:{},
             
             data:state.data.filter(({ _id }) => _id !== action.payload),
             loading:false
            }
        case actionTypes.DELETE_BANNER_ERROR:
             return {
                ...state,
               error:action.error,
               loading:false
            }
        default:
            return state;
    }

}

export default bannerReducer;