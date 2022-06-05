import * as actionTypes from '../constant/actionTypes';
import axios from 'axios';
import { toast } from "react-toastify";


axios.defaults.withCredentials = true
//  create banner
export const createBannerRequest=(data,history)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.CREATE_BANNER_REQUEST
    });

    try{
const res= await axios.post(`${process.env.REACT_APP_BACKEND_URL}/banners`,data)
  
    dispatch({
        type:actionTypes.CREATE_BANNER_SUCCESS,
        payload: res.data
    })
  
    history("/admin/banners");
    toast.success('banner created successfull');
     
}
catch(err){
  
     dispatch({
        type:actionTypes.CREATE_BANNER_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// get banner

export const getBannerRequest=()=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.GET_BANNERS_REQUEST
    });

    try{
const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/banners`)
  
    dispatch({
        type:actionTypes.GET_BANNERS_SUCCESS,
        payload: res.data
    })
  
     
}
catch(err){
  
     dispatch({
        type:actionTypes.GET_BANNERS_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// edit banner 

export const editBannerRequest=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.GET_BANNER_BY_ID_REQUEST
    });

    try{
const res= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/banners/${id}`)
  
    dispatch({
        type:actionTypes.GET_BANNER_BY_ID_SUCCESS,
        payload: res.data
    })
       
}
catch(err){
  
     dispatch({
        type:actionTypes.GET_BANNER_BY_ID_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};

// UPDATE banner

export const updateBannerRequest=(id,data,history)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.UPDATE_BANNER_REQUEST
    });

    try{
const res= await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/banners/${id}`,data)
  
    dispatch({
        type:actionTypes.UPDATE_BANNER_SUCCESS,
         payload:res.data
    })
        history("/admin/banners");
    toast.success('banner Updated successfull');
       
}
catch(err){
  
     dispatch({
        type:actionTypes.UPDATE_BANNER_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};


// Delete banner

export const deleteBannerRequest=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:actionTypes.DELETE_BANNER_REQUEST
    });

    try{
await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/banners/${id}`)
  
    dispatch({
        type:actionTypes.DELETE_BANNER_SUCCESS,
        payload:id
    })
     
    toast.success('banner Delete successfull');
       
}
catch(err){
  
     dispatch({
        type:actionTypes.DELETE_BANNER_ERROR,
        error: err.response.data.message
    })
      toast.error(err.response.data.message);
}

};