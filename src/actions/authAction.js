import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_ERROR} from '../constant/actionTypes';
import axios from 'axios';
import { toast } from "react-toastify";


axios.defaults.withCredentials = true
export const loginRequestAction=(data,history)=>async (dispatch,getState)=>{
    dispatch({
        type:LOGIN_REQUEST
    });

    try{
const res= await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`,data)
  
    dispatch({
        type:LOGIN_SUCCESS,
        payload: res.data
    })
  
    history("/admin/dashboard");
    toast.success('login successfull');
     
}
catch(err){
  
     dispatch({
        type:LOGIN_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};