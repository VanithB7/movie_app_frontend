import { Link } from 'react-router-dom';
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {getTheatreRequest,deleteTheatreRequest} from '../../../actions/theatreAction';
import moment from "moment";
const TheatreList = ()=> {
    const dispatch= useDispatch();
    
    useEffect(()=>{
  dispatch(getTheatreRequest())
    },[]);
    
const {data} =useSelector(state=>state.theatres);
 
 const deletehandle=(id)=>{
   if(window.confirm(`are you sure`))
   {
     dispatch(deleteTheatreRequest(id))
   }
    }
    return(
        <div className="container px-6 mx-auto grid">
                <div className="flex justify-between  my-6">
            <h2
              className=" text-2xl font-semibold text-gray-700 dark:text-gray-200"
            >
             Theatres
            </h2>
              <Link to="/admin/theatres/create">
            <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#b2385f] border border-transparent rounded-lg active:bg-[#b2385f] hover:bg-[#b2385f] focus:outline-none focus:shadow-outline-[#b2385f]">
                  Create Theatre
                </button>
                </Link>
                </div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr
                      className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                    >
                      <th className="px-4 py-3 text-center">S.no</th>
                      <th className="px-4 py-3 text-center">Name</th>
                      <th className="px-4 py-3 text-center">Address</th>
                      <th className="px-4 py-3 text-center">City</th>
                      <th className="px-4 py-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody
                    className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                  >
                    { data && data.map((theatre)=>{
                      return(
                    <tr className="text-gray-700 dark:text-gray-400" key={theatre._id}>
                        <td className="px-4 py-3 text-sm text-center">
                         {theatre._id}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm justify-center">
                         
                       {theatre.name}
                         
                        </div>
                      </td>
                     <td className="px-4 py-3">
                        <div className="flex items-center text-sm justify-center">
                         
                       {theatre.address}
                         
                        </div>
                      </td>
                       <td className="px-4 py-3">
                        <div className="flex items-center text-sm justify-center">
                         
                       {theatre.city_id && theatre.city_id.name}
                         
                        </div>
                      </td>
                      

                     
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-4 text-sm justify-center">
                                   <Link to={`edit/${theatre._id}`}>
                          <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-[#b2385f] rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                              ></path>
                            </svg>
                          </button>
                          </Link>
                          <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-[#b2385f] rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                         onClick={()=>deletehandle(theatre._id)}
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                      )
                    }) }
                  

                 
                  </tbody>
                </table>
              </div>
              <div
                className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
              >
                <span className="flex items-center col-span-3">
                  theatreing 0-10 of 1
                </span>
                <span className="col-span-2"></span>
             
               
              </div>
            </div>
            </div>
    );
}

export default TheatreList;