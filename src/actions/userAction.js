import * as actionTypes from '../constant/actionTypes';
import axios from 'axios';
import { toast } from "react-toastify";


axios.defaults.withCredentials = true

// get User

export const getUserRequest=()=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.GET_USERS_REQUEST
    });

    try{
const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`)
  
    dispatch({
        type:actionTypes.GET_USERS_SUCCESS,
        payload: res.data
    })
  
     
}
catch(err){
  
     dispatch({
        type:actionTypes.GET_USERS_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};



export const deleteUserRequest=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.DELETE_USER_REQUEST
    });

    try{
const res= await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`)
  
    dispatch({
        type:actionTypes.DELETE_USER_SUCCESS,
        payload:id
    })
     
    toast.success('User Delete successfull');
       
}
catch(err){
  
     dispatch({
        type:actionTypes.DELETE_USER_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};