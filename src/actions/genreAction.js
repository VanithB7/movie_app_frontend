import * as actionTypes from '../constant/actionTypes';
import axios from 'axios';
import { toast } from "react-toastify";


axios.defaults.withCredentials = true
//  create genre
export const createGenreRequest=(data,history)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.CREATE_GENRE_REQUEST
    });

    try{
const res= await axios.post(`${process.env.REACT_APP_BACKEND_URL}/genres`,data)
  
    dispatch({
        type:actionTypes.CREATE_GENRE_SUCCESS,
        payload: res.data
    })
  
    history("/admin/genres");
    toast.success('genre created successfull');
     
}
catch(err){
  
     dispatch({
        type:actionTypes.CREATE_GENRE_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// get genre

export const getGenreRequest=()=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.GET_GENRES_REQUEST
    });

    try{
const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/genres`)
  
    dispatch({
        type:actionTypes.GET_GENRES_SUCCESS,
        payload: res.data
    })
  
     
}
catch(err){
  
     dispatch({
        type:actionTypes.GET_GENRES_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// edit genre 

export const editGenreRequest=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.GET_GENRE_BY_ID_REQUEST
    });

    try{
const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/genres/${id}`)
  
    dispatch({
        type:actionTypes.GET_GENRE_BY_ID_SUCCESS,
        payload: res.data
    })
       
}
catch(err){
  
     dispatch({
        type:actionTypes.GET_GENRE_BY_ID_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// UPDATE genre

export const updateGenreRequest=(id,data,history)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.UPDATE_GENRE_REQUEST
    });

    try{
const res= await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/genres/${id}`,data)
  
    dispatch({
        type:actionTypes.UPDATE_GENRE_SUCCESS,
         payload:res.data
    })
        history("/admin/genres");
    toast.success('genre Updated successfull');
       
}
catch(err){
  
     dispatch({
        type:actionTypes.UPDATE_GENRE_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};


// Delete genre

export const deleteGenreRequest=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.DELETE_GENRE_REQUEST
    });

    try{
 await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/genres/${id}`)
  
    dispatch({
        type:actionTypes.DELETE_GENRE_SUCCESS,
        payload:id
    })
     
    toast.success('genre Delete successfull');
       
}
catch(err){
  
     dispatch({
        type:actionTypes.DELETE_GENRE_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};