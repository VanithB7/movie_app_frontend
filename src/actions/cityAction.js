import * as actionTypes from '../constant/actionTypes';
import axios from 'axios';
import { toast } from "react-toastify";


axios.defaults.withCredentials = true
//  create city
export const createCityRequest=(data,history)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.CREATE_CITY_REQUEST
    });

    try{
const res= await axios.post(`${process.env.REACT_APP_BACKEND_URL}/citys`,data)
  
    dispatch({
        type:actionTypes.CREATE_CITY_SUCCESS,
        payload: res.data
    })
  
    history("/admin/citys");
    toast.success('city created successfull');
     
}
catch(err){
  
     dispatch({
        type:actionTypes.CREATE_CITY_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// get city

export const getCityRequest=()=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.GET_CITYS_REQUEST
    });

    try{
const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/citys`)
  
    dispatch({
        type:actionTypes.GET_CITYS_SUCCESS,
        payload: res.data
    })
  
     
}
catch(err){
  
     dispatch({
        type:actionTypes.GET_CITYS_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// edit city 

export const editCityRequest=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.GET_CITY_BY_ID_REQUEST
    });

    try{
const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/citys/${id}`)
  
    dispatch({
        type:actionTypes.GET_CITY_BY_ID_SUCCESS,
        payload: res.data
    })
       
}
catch(err){
  
     dispatch({
        type:actionTypes.GET_CITY_BY_ID_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// UPDATE CITY

export const updateCityRequest=(id,data,history)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.UPDATE_CITY_REQUEST
    });

    try{
const res= await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/citys/${id}`,data)
  
    dispatch({
        type:actionTypes.UPDATE_CITY_SUCCESS,
         payload:res.data
    })
        history("/admin/citys");
    toast.success('city Updated successfull');
       
}
catch(err){
  
     dispatch({
        type:actionTypes.UPDATE_CITY_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};


// Delete CITY

export const deleteCityRequest=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.DELETE_CITY_REQUEST
    });

    try{
const res= await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/citys/${id}`)
  
    dispatch({
        type:actionTypes.DELETE_CITY_SUCCESS,
        payload:id
    })
     
    toast.success('city Delete successfull');
       
}
catch(err){
  
     dispatch({
        type:actionTypes.DELETE_CITY_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};