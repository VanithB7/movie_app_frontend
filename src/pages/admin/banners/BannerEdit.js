import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate,useParams } from "react-router-dom";
import {updateBannerRequest,editBannerRequest} from '../../../actions/bannerAction';
import {useDispatch,useSelector} from 'react-redux';
 
import FileBase64 from 'react-file-base64';

const BannerEdit = ()=> {
const history = useNavigate();
const dispatch= useDispatch();
const {banner} =useSelector(state=>state.banners);

let {id}= useParams();
  useEffect(()=>{
  dispatch(editBannerRequest(id))
  
 
    },[]);
    useEffect(()=>{
 if(banner)
 {
    setEditBanner(banner.image_url);
 }
 
    },[banner]);
const [editbanner, setEditBanner] = useState('');
const handleSubmit= (e)=>{
  e.preventDefault();
const postData={
  image_url:editbanner
};
  dispatch(updateBannerRequest(id,postData,history))


}

        return(
       <div className="container px-6 mx-auto grid">
        
                <div className="flex justify-between  my-6">
                      
            <h2
              className=" text-2xl font-semibold text-gray-700 dark:text-gray-200"
            >
            Edit Banner
            </h2>
            
                </div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto grid grid-cols-3">
                <form  onSubmit={handleSubmit}>
                 <label className="block text-sm mb-5">
                <span className="text-gray-700 dark:text-gray-400">Upload Banner</span>
                 </label>
                 
              <FileBase64
                
              onDone={ ({base64})=>setEditBanner(base64) } 
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                     
                  required
                />
  <label className="block text-sm mb-5 mt-5">
                <span className="text-gray-700 dark:text-gray-400">Preview Banner</span>
                 </label>

  <img src={banner.image_url} className="mb-5 h-36" alt="preview" />
             
              <div className="mt-4">
                 
               <button type="submit" className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#b2385f] border border-transparent rounded-lg active:bg-[#b2385f] hover:bg-[#b2385f] focus:outline-none focus:shadow-outline-[#b2385f]">
                  Update
                </button>
                
                 <Link to="/admin/banners/">
                 <button className="ml-4 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#b2385f] border border-transparent rounded-lg active:bg-[#b2385f] hover:bg-[#b2385f] focus:outline-none focus:shadow-outline-[#b2385f]">
                Back
                </button>
               </Link>
                </div>
              </form>
              </div>
              
            </div>
            </div>
    );
}

export default BannerEdit;