import * as actionTypes from '../constant/actionTypes';
import axios from 'axios';
import { toast } from "react-toastify";


axios.defaults.withCredentials = true
//  create show
export const createShowRequest=(data,history)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.CREATE_SHOW_REQUEST
    });

    try{
const res= await axios.post(`${process.env.REACT_APP_BACKEND_URL}/shows`,data)
  
    dispatch({
        type:actionTypes.CREATE_SHOW_SUCCESS,
        payload: res.data
    })
  
    history("/admin/shows");
    toast.success('show created successfull');
     
}
catch(err){
  
     dispatch({
        type:actionTypes.CREATE_SHOW_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// get show

export const getShowRequest=()=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.GET_SHOWS_REQUEST
    });

    try{
const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/shows`)
  
    dispatch({
        type:actionTypes.GET_SHOWS_SUCCESS,
        payload: res.data
    })
  
     
}
catch(err){
  
     dispatch({
        type:actionTypes.GET_SHOWS_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// edit show 

export const editShowRequest=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.GET_SHOW_BY_ID_REQUEST
    });

    try{
const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/shows/${id}`)
  
    dispatch({
        type:actionTypes.GET_SHOW_BY_ID_SUCCESS,
        payload: res.data
    })
       
}
catch(err){
  
     dispatch({
        type:actionTypes.GET_SHOW_BY_ID_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// UPDATE show

export const updateShowRequest=(id,data,history)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.UPDATE_SHOW_REQUEST
    });

    try{
const res= await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/shows/${id}`,data)
  
    dispatch({
        type:actionTypes.UPDATE_SHOW_SUCCESS,
         payload:res.data
    })
        history("/admin/shows");
    toast.success('show Updated successfull');
       
}
catch(err){
  
     dispatch({
        type:actionTypes.UPDATE_SHOW_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};


// Delete show

export const deleteShowRequest=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.DELETE_SHOW_REQUEST
    });

    try{
 await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/shows/${id}`)
  
    dispatch({
        type:actionTypes.DELETE_SHOW_SUCCESS,
        payload:id
    })
     
    toast.success('show Delete successfull');
       
}
catch(err){
  
     dispatch({
        type:actionTypes.DELETE_SHOW_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};