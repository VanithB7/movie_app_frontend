import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {createMovieRequest} from '../../../actions/movieAction';
import {useDispatch,useSelector} from 'react-redux';
import {getGenreRequest} from '../../../actions/genreAction';
import FileBase64 from 'react-file-base64';
const MovieCreate = ()=> {
  const history = useNavigate();
  const dispatch= useDispatch();
   useEffect(()=>{
 dispatch(getGenreRequest())
 
    },[]);
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [duration, setDuration] = useState('');
const [language, setLanguage] = useState('');
const [release_date, setRelase_data] = useState('');
const [image_url, setImage_url] = useState('');
const [genre_id, setGenre_id] = useState('');
const {data} =useSelector(state=>state.genres);
const handleSubmit= (e)=>{
  e.preventDefault();
const postData={
  name:name,
  description:description,
  duration:duration,
  language:language,
  release_date:release_date,
  image_url:image_url,
  genre_id:genre_id
};
//console.log(postData);
  dispatch(createMovieRequest(postData,history))


}
    return(
       <div className="container px-6 mx-auto grid">
        
                <div className="flex justify-between  my-6">
                      
            <h2
              className=" text-2xl font-semibold text-gray-700 dark:text-gray-200"
            >
            Create Movie
            </h2>
            
                </div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto grid grid-cols-3">
                <form  onSubmit={handleSubmit}>
                 <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">NAME</span>
                <input
                type="text"
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                   value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                />

              </label>
                <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Description</span>
                <textarea
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="description" value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                  required
                >{description}</textarea>

              </label>
                 <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Duration</span>
                <input
                type="text"
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                   value={duration}
                  onChange={(e)=>setDuration(e.target.value)}
                  required
                />

              </label>
                 <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Language</span>
                <select
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                   value={language}
                  onChange={(e)=>setLanguage(e.target.value)}
                  required
                >
                  <option value="">Select</option>
<option value="Tamil">Tamil</option>
<option value="Malayalam">Malayalam</option>
<option value="Telugu">Telugu</option>
<option value="Kannada">Kannada</option>
                </select>

              </label>
                 <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Release Date</span>
                <input
                type="date"
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                   value={release_date}
                  onChange={(e)=>setRelase_data(e.target.value)}
                  required
                />

              </label>
                
                <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Genre</span>
               <select
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                   value={genre_id}
                  onChange={(e)=>setGenre_id(e.target.value)}
                  required
                >
                    <option  value='' ></option>
                       {data && data.map((genre)=> {
                        return (
                            <option  value={genre._id} >{genre.name}</option>
                        );
                    })}
                    </select>

              </label>
                 <label className="block text-sm mb-5">
                <span className="text-gray-700 dark:text-gray-400">Upload Banner</span>
                 </label>
                  <FileBase64
              
                  onDone={ ({base64})=>setImage_url(base64) } 
                  className="block w-full mt-1 px-4 py-2 rounded-md text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                 
            
                  required
                />
 <label className="block text-sm mb-5 mt-5">
                <span className="text-gray-700 dark:text-gray-400">Preview Banner</span>
                 </label>

  <img src={image_url} className="mb-5 h-36" alt="preview" />
             
              <div className="mt-4">
                 
               <button type="submit" className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#b2385f] border border-transparent rounded-lg active:bg-[#b2385f] hover:bg-[#b2385f] focus:outline-none focus:shadow-outline-[#b2385f]">
                  Create
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

export default MovieCreate;