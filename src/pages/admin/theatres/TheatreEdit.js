import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate,useParams } from "react-router-dom";
import {updateTheatreRequest,editTheatreRequest} from '../../../actions/theatreAction';
import {useDispatch,useSelector} from 'react-redux';
import {getCityRequest} from '../../../actions/cityAction';

const TheatreEdit = ()=> {
const history = useNavigate();
const dispatch= useDispatch();
const {theatre} =useSelector(state=>state.theatres);
const {data} =useSelector(state=>state.citys);
let {id}= useParams();
  useEffect(()=>{
  dispatch(editTheatreRequest(id))
 dispatch(getCityRequest())
 
    },[]);
    useEffect(()=>{
 if(theatre)
 {
    setName(theatre.name);
    setAddress(theatre.address);
    setCity_id(theatre.city_id);
 
 }
 
    },[theatre]);
const [name, setName] = useState('');
const [address, setAddress] = useState('');
const [city_id, setCity_id] = useState('');

const handleSubmit= (e)=>{
  e.preventDefault();
const postData={
  name:name,
  address:address,
  city_id:city_id
};
  dispatch(updateTheatreRequest(id,postData,history))


}
        return(
       <div className="container px-6 mx-auto grid">
        
                <div className="flex justify-between  my-6">
                      
            <h2
              className=" text-2xl font-semibold text-gray-700 dark:text-gray-200"
            >
            Edit Theatres
            </h2>
            
                </div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto grid grid-cols-3">
                
                <form  onSubmit={handleSubmit}>
                 <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Name</span>
                <input
                type="text"
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                   value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                />

              </label>
                <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Address</span>
                <textarea
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="Address" value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                  required
                >{address}</textarea>

              </label>
                
                <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">City</span>
               <select
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                 value={city_id}
                  onChange={(e)=>setCity_id(e.target.value)}
                  required
                >
                    {data && data.map((city)=> {
                        return (
                            <option  value={city._id}  >{city.name}</option>
                        );
                    })}
                   
                    </select>

              </label>
             
              <div className="mt-4">
                 
               <button type="submit" className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#b2385f] border border-transparent rounded-lg active:bg-[#b2385f] hover:bg-[#b2385f] focus:outline-none focus:shadow-outline-[#b2385f]">
                  Update
                </button>
                
                 <Link to="/admin/theatres/">
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

export default TheatreEdit;