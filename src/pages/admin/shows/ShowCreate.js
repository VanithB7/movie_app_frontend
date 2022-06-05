import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {createShowRequest} from '../../../actions/showAction';
import {useDispatch} from 'react-redux';
const ShowCreate = ()=> {
  const history = useNavigate();
  const dispatch= useDispatch();
const [date, setDate] = useState('');
const [startTime, setStartTime] = useState('');
const [endTime, setEndTime] = useState('');
const [theatre_id, setTheatre_id] = useState('');
const [movie_id, setMovie_id] = useState('');
const handleSubmit= (e)=>{
  e.preventDefault();
const postData={
  date:date,
  startTime:startTime,
  endTime:endTime,
  theatre_id:theatre_id,
  movie_id:movie_id,
};
//console.log(postData);
  dispatch(createShowRequest(postData,history))


}
    return(
       <div className="container px-6 mx-auto grid">
        
                <div className="flex justify-between  my-6">
                      
            <h2
              className=" text-2xl font-semibold text-gray-700 dark:text-gray-200"
            >
            Create Show
            </h2>
            
                </div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto grid grid-cols-3">
                <form  onSubmit={handleSubmit}>
                 <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Date</span>
                <input
                type="date"
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                   value={date}
                  onChange={(e)=>setDate(e.target.value)}
                  required
                />

              </label>
                <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">StartTime</span>
                <input
                type="text"
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="11:20" value={startTime}
                  onChange={(e)=>setStartTime(e.target.value)}
                  required
                />

              </label>
                <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">EndTime</span>
                <input
                type="text"
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="01:40" value={endTime}
                  onChange={(e)=>setEndTime(e.target.value)}
                  required
                />

              </label>
                 <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Threate</span>
               <select
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                 value={theatre_id}
                  onChange={(e)=>setTheatre_id(e.target.value)}
                  required
                >
                    <option value='dd'>dd</option>
                    <option value='dd'>dd</option>
                    <option value='dd'>dd</option>
                    </select>

              </label>
               <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Movie </span>
               <select
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    value={movie_id}
                  onChange={(e)=>setMovie_id(e.target.value)}
                  required
                >
                    <option value='dd'>sss</option>
                    <option value='dd'></option>
                    <option value='dd'></option>
                    </select>

              </label>
              <div className="mt-4">
                 
               <button type="submit" className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#b2385f] border border-transparent rounded-lg active:bg-[#b2385f] hover:bg-[#b2385f] focus:outline-none focus:shadow-outline-[#b2385f]">
                  Create
                </button>
                
                 <Link to="/admin/shows/">
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

export default ShowCreate;