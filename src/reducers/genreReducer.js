import * as actionTypes from '../constant/actionTypes';

const initialState={
    data:[],
    genre:{},
    error:null,
    loading:false

}
const genreReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case actionTypes.CREATE_GENRE_REQUEST:
             return {
                ...state,
              error:null,
              loading:true
            }
         case actionTypes.CREATE_GENRE_SUCCESS:
         
            //console.log([...state.data, action.payload.data]);
             return {
                ...state,
             error:null,
             genre:{},
             loading:false
            }
        case actionTypes.CREATE_GENRE_ERROR:
             return {
                ...state,
               genre:{},
               error:action.error,
               loading:false
            }

          case actionTypes.GET_GENRES_REQUEST:
             return {
                ...state,
              data:[],
              genre:{},
              error:null,
              loading:true,
            }
         case actionTypes.GET_GENRES_SUCCESS:
             return {
                ...state,
             error:null,
             genre:{},
             data:action.payload.data,
             loading:false
            }
        case actionTypes.GET_GENRES_ERROR:
             return {
                ...state,
               genre:{},
               error:action.error,
               data:[],
               loading:false
            }

         case actionTypes.GET_GENRE_BY_ID_REQUEST:
             return {
                ...state,
              genre:{},
              error:null,
              loading:true,
            }
         case actionTypes.GET_GENRE_BY_ID_SUCCESS:
             return {
                ...state,
             error:null,
             genre:action.payload.data,
             loading:false
            }
        case actionTypes.GET_GENRE_BY_ID_ERROR:
             return {
                ...state,
               genre:{},
               error:action.error,
               loading:false
            }
 //update city
         case actionTypes.UPDATE_GENRE_REQUEST:
             return {
                ...state,
              error:null,
              loading:true,
            }
         case actionTypes.UPDATE_GENRE_SUCCESS:
             return {
                ...state,
             error:null,
             genre:{},
             loading:false
            }
        case actionTypes.UPDATE_GENRE_ERROR:
             return {
                ...state,
               error:action.error,
               loading:false
            }

            //delete city
         case actionTypes.DELETE_GENRE_REQUEST:
             return {
                ...state,
              error:null,
              loading:true,
            }
         case actionTypes.DELETE_GENRE_SUCCESS:
        
             return {
                ...state,
             error:null,
             genre:{},
             data:state.data.filter(({ _id }) => _id !== action.payload),
             loading:false
            }
        case actionTypes.DELETE_GENRE_ERROR:
             return {
                ...state,
               error:action.error,
               loading:false
            }
        default:
            return state;
    }

}

export default genreReducer;