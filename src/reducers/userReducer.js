import * as actionTypes from '../constant/actionTypes';

const initialState={
    data:[],
    error:null,
    loading:false

}
const userReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        

          case actionTypes.GET_USERS_REQUEST:
             return {
                ...state,
              data:[],
             
              error:null,
              loading:true,
            }
         case actionTypes.GET_USERS_SUCCESS:
             return {
                ...state,
             error:null,
            
             data:action.payload.data,
             loading:false
            }
        case actionTypes.GET_USERS_ERROR:
             return {
                ...state,
              
               error:action.error,
               data:[],
               loading:false
            }

      
            //delete USER
         case actionTypes.DELETE_USER_REQUEST:
             return {
                ...state,
              error:null,
              loading:true,
            }
         case actionTypes.DELETE_USER_SUCCESS:
        
             return {
                ...state,
             error:null,
           
             
             data:state.data.filter(({ _id }) => _id !== action.payload),
             loading:false
            }
        case actionTypes.DELETE_USER_ERROR:
             return {
                ...state,
               error:action.error,
               loading:false
            }
        default:
            return state;
    }

}

export default userReducer;