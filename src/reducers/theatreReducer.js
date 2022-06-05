import * as actionTypes from '../constant/actionTypes';

const initialState={
    data:[],
    theatre:{},
    error:null,
    loading:false

}
const theatreReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case actionTypes.CREATE_THEATRE_REQUEST:
             return {
                ...state,
              error:null,
              loading:true
            }
         case actionTypes.CREATE_THEATRE_SUCCESS:
         
            //console.log([...state.data, action.payload.data]);
             return {
                ...state,
             error:null,
             theatre:{},
             loading:false
            }
        case actionTypes.CREATE_THEATRE_ERROR:
             return {
                ...state,
               theatre:{},
               error:action.error,
               loading:false
            }

          case actionTypes.GET_THEATRES_REQUEST:
             return {
                ...state,
              data:[],
              theatre:{},
              error:null,
              loading:true,
            }
         case actionTypes.GET_THEATRES_SUCCESS:
             return {
                ...state,
             error:null,
             theatre:{},
             data:action.payload.data,
             loading:false
            }
        case actionTypes.GET_THEATRES_ERROR:
             return {
                ...state,
               theatre:{},
               error:action.error,
               data:[],
               loading:false
            }

         case actionTypes.GET_THEATRE_BY_ID_REQUEST:
             return {
                ...state,
              theatre:{},
              error:null,
              loading:true,
            }
         case actionTypes.GET_THEATRE_BY_ID_SUCCESS:
             return {
                ...state,
             error:null,
             theatre:action.payload.data,
             loading:false
            }
        case actionTypes.GET_THEATRE_BY_ID_ERROR:
             return {
                ...state,
               theatre:{},
               error:action.error,
               loading:false
            }
 //update theatre
         case actionTypes.UPDATE_THEATRE_REQUEST:
             return {
                ...state,
              error:null,
              loading:true,
            }
         case actionTypes.UPDATE_THEATRE_SUCCESS:
             return {
                ...state,
             error:null,
             theatre:{},
             loading:false
            }
        case actionTypes.UPDATE_THEATRE_ERROR:
             return {
                ...state,
               error:action.error,
               loading:false
            }

            //delete theatre
         case actionTypes.DELETE_THEATRE_REQUEST:
             return {
                ...state,
              error:null,
              loading:true,
            }
         case actionTypes.DELETE_THEATRE_SUCCESS:
        
             return {
                ...state,
             error:null,
             theatre:{},
             
             data:state.data.filter(({ _id }) => _id !== action.payload),
             loading:false
            }
        case actionTypes.DELETE_THEATRE_ERROR:
             return {
                ...state,
               error:action.error,
               loading:false
            }
        default:
            return state;
    }

}

export default theatreReducer;