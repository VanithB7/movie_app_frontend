import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_ERROR} from '../constant/actionTypes';

const initialState={
    data:[],
    is_logged_in:false,
    error:null,
    loading:false

}
const authReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case LOGIN_REQUEST:
             return {
                ...state,
              data:[],
              error:null,
              loading:true,
            }
         case LOGIN_SUCCESS:
             return {
                ...state,
             is_logged_in:true,
             error:null,
             data:action.payload.data,
             loading:false
            }
        case LOGIN_ERROR:
             return {
                ...state,
               is_logged_in:false,
               error:action.error,
               data:[],
               loading:false
            }
        default:
            return state;
    }

}

export default authReducer;