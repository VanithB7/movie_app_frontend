import * as actionTypes from '../constant/actionTypes';
import axios from 'axios';
import { toast } from "react-toastify";


axios.defaults.withCredentials = true
//  create movie
export const createMovieRequest=(data,history)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.CREATE_MOVIE_REQUEST
    });

    try{
const res= await axios.post(`${process.env.REACT_APP_BACKEND_URL}/movies`,data)
  
    dispatch({
        type:actionTypes.CREATE_MOVIE_SUCCESS,
        payload: res.data
    })
  
    history("/admin/movies");
    toast.success('movie created successfull');
     
}
catch(err){
  
     dispatch({
        type:actionTypes.CREATE_MOVIE_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// get movie

export const getMovieRequest=()=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.GET_MOVIES_REQUEST
    });

    try{
const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies`)
  
    dispatch({
        type:actionTypes.GET_MOVIES_SUCCESS,
        payload: res.data
    })
  
     
}
catch(err){
  
     dispatch({
        type:actionTypes.GET_MOVIES_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// edit movie 

export const editMovieRequest=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.GET_MOVIE_BY_ID_REQUEST
    });

    try{
const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies/${id}`)
  
    dispatch({
        type:actionTypes.GET_MOVIE_BY_ID_SUCCESS,
        payload: res.data
    })
       
}
catch(err){
  
     dispatch({
        type:actionTypes.GET_MOVIE_BY_ID_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// UPDATE movie

export const updateMovieRequest=(id,data,history)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.UPDATE_MOVIE_REQUEST
    });

    try{
const res= await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/movies/${id}`,data)
  
    dispatch({
        type:actionTypes.UPDATE_MOVIE_SUCCESS,
         payload:res.data
    })
        history("/admin/movies");
    toast.success('movie Updated successfull');
       
}
catch(err){
  
     dispatch({
        type:actionTypes.UPDATE_MOVIE_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};


// Delete movie

export const deleteMovieRequest=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.DELETE_MOVIE_REQUEST
    });

    try{
 await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/movies/${id}`)
  
    dispatch({
        type:actionTypes.DELETE_MOVIE_SUCCESS,
        payload:id
    })
     
    toast.success('movie Delete successfull');
       
}
catch(err){
  
     dispatch({
        type:actionTypes.DELETE_MOVIE_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};