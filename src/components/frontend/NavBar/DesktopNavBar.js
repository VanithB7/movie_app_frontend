import { Link } from 'react-router-dom';


const DesktopNavBar = ()=> {
    
    return(
<>
<div className="h-12 container px-6 mx-auto text-purple-200 dark:text-purple-200"
      >
      <div className="flex justify-center flex-1 lg:mr-32">
      </div>
      <div className="hidden md:flex justify-between  items-center flex-shrink-0 space-x-6">
       <Link to="/" className="pl-4 text-lg font-bold text-gray-800 dark:text-gray-200">
        <img className="object-cover w-full h-full logo-height" src="/logo.svg"alt="Office"  />
        </Link>
        <ul className="flex  items-center flex-shrink-0 space-x-6">
         <li className="relative hover:text-[#ffc107]">
           <Link to="/"> Home
           </Link>
         </li>
         <li className="relative hover:text-[#ffc107]">
                <Link to="/movies">
           Movies
           </Link>
         </li>
         <li className="relative hover:text-[#ffc107]">
             <Link to="/theatres">
           Theatres
           </Link>
         </li>
           <li className="relative hover:text-[#ffc107]">
               <Link to="/events">
           Events
           </Link>
         </li>
         </ul>
      </div>
   </div>
    </>
    );

};

export default DesktopNavBar;