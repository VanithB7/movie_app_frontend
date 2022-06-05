import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {createGenreRequest} from '../../../actions/genreAction';
import {useDispatch} from 'react-redux';
const GenreCreate = ()=> {
  const history = useNavigate();
  const dispatch= useDispatch();
const [genre, setGenre] = useState('');
const handleSubmit= (e)=>{
  e.preventDefault();
const postData={
  name:genre
};
//console.log(postData);
  dispatch(createGenreRequest(postData,history))


}
    return(
       <div className="container px-6 mx-auto grid">
        
                <div className="flex justify-between  my-6">
                      
            <h2
              className=" text-2xl font-semibold text-gray-700 dark:text-gray-200"
            >
            Create Genre
            </h2>
            
                </div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto grid grid-cols-3">
                <form  onSubmit={handleSubmit}>
                 <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Name</span>
                <input
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="ActionThriller" value={genre}
                  onChange={(e)=>setGenre(e.target.value)}
                  required
                />

              </label>
              <div className="mt-4">
                 
               <button type="submit" className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#b2385f] border border-transparent rounded-lg active:bg-[#b2385f] hover:bg-[#b2385f] focus:outline-none focus:shadow-outline-[#b2385f]">
                  Create
                </button>
                
                 <Link to="/admin/genres/">
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

export default GenreCreate;