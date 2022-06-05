import * as actionTypes from '../constant/actionTypes';
import axios from 'axios';
import { toast } from "react-toastify";


axios.defaults.withCredentials = true
//  create theatre
export const createTheatreRequest=(data,history)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.CREATE_THEATRE_REQUEST
    });

    try{
const res= await axios.post(`${process.env.REACT_APP_BACKEND_URL}/theatres`,data)
  
    dispatch({
        type:actionTypes.CREATE_THEATRE_SUCCESS,
        payload: res.data
    })
  
    history("/admin/theatres");
    toast.success('theatre created successfull');
     
}
catch(err){
  
     dispatch({
        type:actionTypes.CREATE_THEATRE_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// get theatre

export const getTheatreRequest=()=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.GET_THEATRES_REQUEST
    });

    try{
const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/theatres`)
  
    dispatch({
        type:actionTypes.GET_THEATRES_SUCCESS,
        payload: res.data
    })
  
     
}
catch(err){
  
     dispatch({
        type:actionTypes.GET_THEATRES_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// edit theatre 

export const editTheatreRequest=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.GET_THEATRE_BY_ID_REQUEST
    });

    try{
const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/theatres/${id}`)
  
    dispatch({
        type:actionTypes.GET_THEATRE_BY_ID_SUCCESS,
        payload: res.data
    })
       
}
catch(err){
  
     dispatch({
        type:actionTypes.GET_THEATRE_BY_ID_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// UPDATE theatre

export const updateTheatreRequest=(id,data,history)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.UPDATE_THEATRE_REQUEST
    });

    try{
const res= await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/theatres/${id}`,data)
  
    dispatch({
        type:actionTypes.UPDATE_THEATRE_SUCCESS,
         payload:res.data
    })
        history("/admin/theatres");
    toast.success('theatre Updated successfull');
       
}
catch(err){
  
     dispatch({
        type:actionTypes.UPDATE_THEATRE_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};


// Delete theatre

export const deleteTheatreRequest=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.DELETE_THEATRE_REQUEST
    });

    try{
 await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/theatres/${id}`)
  
    dispatch({
        type:actionTypes.DELETE_THEATRE_SUCCESS,
        payload:id
    })
     
    toast.success('theatre Delete successfull');
       
}
catch(err){
  
     dispatch({
        type:actionTypes.DELETE_THEATRE_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};