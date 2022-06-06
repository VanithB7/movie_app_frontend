import { Link } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import { useState } from 'react';
const MobileNavBar = ()=> {
       const [menu,setMenu]=useState(false);
    return(
<>
<div className=" py-4 ">
   <HiOutlineMenu color="white" fontSize="2.5em"  className='md:hidden absolute z-20 left-4'  onClick={()=>setMenu(true)} />   
</div>
<aside className={ menu ?'block text-purple-200 dark:text-purple-200  h-screen absolute z-20 w-64 overflow-y-auto bg-white dark:bg-gray-800 flex-shrink-0':'z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800  flex-shrink-0'} >
  <div className="py-4 text-purple-200 dark:text-purple-200">
     <div className="flex  items-center justify-evenly">
        <Link to="/" className=" text-lg font-bold text-purple-200 dark:text-purple-200">
        <img className="object-cover w-full h-full logo-height" src="/logo.svg"alt="Office"  />
        </Link>
        <MdOutlineClose color="white" fontSize="2.5em"  className='md:hidden menuclose'  onClick={()=> setMenu(false)}/>
    </div>
    <ul className="mt-6">
      <li className="relative px-6 py-3">
         <Link to="/" className="inline-flex items-center w-full text-sm font-semibold text-purple-200 dark:text-purple-200 transition-colors duration-150  hover:text-[#ffc107] dark:text-gray-100">
            
            <span className="ml-4">Home</span>
         </Link>
      </li>
   </ul>
   <ul>
      <li className="relative px-6 py-3">
         <Link to="/movies" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  hover:text-[#ffc107]" >
          
            <span className="ml-4">Movies</span>
         </Link>
      </li>
     
      <li className="relative px-6 py-3">
         <Link to="/theatres" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  hover:text-[#ffc107]" >
          
            <span className="ml-4">Theatres</span>
         </Link>
      </li>
       <li className="relative px-6 py-3">
         <Link to="/events" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  hover:text-[#ffc107]" >
          
            <span className="ml-4">Events</span>
         </Link>
      </li>
       <li className="relative px-6 py-3">
         <Link to="/admin/login" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  hover:text-[#ffc107]" >
          
            <span className="ml-4">Login</span>
         </Link>
      </li>

   </ul>
</div>
</aside>
    </>
    );

};

export default MobileNavBar;