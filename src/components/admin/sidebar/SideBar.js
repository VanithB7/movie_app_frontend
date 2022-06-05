import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const SideBar = ()=> {
      const [menu,setMenu]=useState(false);
    return(
<>
<div className=" py-4 ">
   <HiOutlineMenu color="white" fontSize="2.5em"  className='md:hidden absolute z-20 left-4'  onClick={()=>setMenu(true)} />   
</div>
<aside className={ menu ?'block  h-screen absolute z-20 w-64 overflow-y-auto bg-white dark:bg-gray-800 flex-shrink-0':'z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0'} >
  <div className="py-4 text-gray-500 dark:text-gray-400">
     <div className="flex  items-center justify-evenly">
        <Link to="/admin/dashboard" className=" text-lg font-bold text-gray-800 dark:text-gray-200">
        <img className="object-cover w-full h-full logo-height" src="/logo.svg"alt="Office"  />
        </Link>
        <MdOutlineClose color="white" fontSize="2.5em"  className='md:hidden menuclose'  onClick={()=> setMenu(false)}/>
    </div>
    <ul className="mt-6">
      <li className="relative px-6 py-3">
         <Link to="/admin/dashboard" className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100">
            <svg
               className="w-5 h-5"
               aria-hidden="true"
               fill="none"
            
               viewBox="0 0 24 24"
               stroke="currentColor"
               >
               <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
            </svg>
            <span className="ml-4">Dashboard</span>
         </Link>
      </li>
   </ul>
   <ul>
      <li className="relative px-6 py-3">
         <Link to="/admin/banners" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" >
            <svg
               className="w-5 h-5"
               aria-hidden="true"
               fill="none"
            
               viewBox="0 0 24 24"
               stroke="currentColor"
               >
               <path
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
            </svg>
            <span className="ml-4">Banners</span>
         </Link>
      </li>
      <li className="relative px-6 py-3">
         <Link  to="/admin/users" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" >
            <svg
               className="w-5 h-5"
               aria-hidden="true"
               fill="none"
              
               viewBox="0 0 24 24"
               stroke="currentColor"
               >
               <path
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
            </svg>
            <span className="ml-4">Users</span>
         </Link>
      </li>
      <li className="relative px-6 py-3">
         <Link to="/admin/theatres" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
            <svg
               className="w-5 h-5"
               aria-hidden="true"
               fill="none"
             
               viewBox="0 0 24 24"
               stroke="currentColor"
               >
               <path
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  ></path>
               <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
            </svg>
            <span className="ml-4">Theatres</span>
         </Link>
      </li>
      <li className="relative px-6 py-3">
         <Link to="/admin/movies"  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" >
            <svg
               className="w-5 h-5"
               aria-hidden="true"
               fill="none"
               
               viewBox="0 0 24 24"
               stroke="currentColor"
               >
               <path
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  ></path>
            </svg>
            <span className="ml-4">Movies</span>
         </Link>
      </li>
      <li className="relative px-6 py-3">
         <Link to="/admin/shows" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
            <svg
               className="w-5 h-5"
               aria-hidden="true"
               fill="none"
              
               viewBox="0 0 24 24"
               stroke="currentColor"
               >
               <path
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
            </svg>
            <span className="ml-4">Shows</span>
         </Link>
      </li>
      <li className="relative px-6 py-3">
         <Link to="/admin/citys" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" >
            <svg
               className="w-5 h-5"
               aria-hidden="true"
               fill="none"
              
               viewBox="0 0 24 24"
               stroke="currentColor"
               >
               <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
            </svg>
            <span className="ml-4">Citys</span>
         </Link>
      </li>
      <li className="relative px-6 py-3">
         <Link to="/admin/genres" className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" >
            <span className="inline-flex items-center">
               <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                 
                 
                 
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                  <path
                     d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                     ></path>
               </svg>
               <span className="ml-4">Genres</span>
            </span>
         </Link>
      </li>
   </ul>
</div>
</aside>
</>


    );
}

export default SideBar;