import {Helmet} from "react-helmet";
const NavBar = ()=> {
    return(
<header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
    <Helmet>
                <meta charSet="utf-8" />
       <title>Movie Tickets, Plays, Sports, Events &amp; Cinemas near Chennai - BookMyShow</title>
        <meta name='description' content='BookMyShow offers showtimes, movie tickets, reviews, trailers, concert tickets and events near Mumbai . Also features promotional offers, coupons and mobile app.' />
        <link rel='icon' href='/favicon.ico' />
   </Helmet>
   <div
      className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300"
      >
      <div className="flex justify-center flex-1 lg:mr-32">
      </div>
      <ul className="flex items-center flex-shrink-0 space-x-6">
         <li className="flex">
            <button
               className="rounded-md focus:outline-none focus:shadow-outline-purple"
               aria-label="Toggle color mode"
               >
            </button>
         </li>
         <li className="relative">
            <button
               className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
               aria-label="Notifications"
               aria-haspopup="true"
               >
               <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  >
                  <path
                     d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                     ></path>
               </svg>
               <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                  ></span>
            </button>
         </li>
         <li className="relative">
            <button
               className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
               >
            <img
               className="object-cover w-8 h-8 rounded-full"
               src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
               alt=""
               aria-hidden="true"
               />
            </button>
         </li>
      </ul>
   </div>
</header>

    );
}

export default NavBar;