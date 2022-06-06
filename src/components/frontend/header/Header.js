import {Helmet} from "react-helmet";
import MobileNavBar from "../NavBar/MobileNavBar";
import DesktopNavBar from "../NavBar/DesktopNavBar";
const NavBar = ()=> {

    return(
       <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Movie Tickets, Plays, Sports, Events &amp; Cinemas near Chennai - BookMyShow</title>
        <meta name='description' content='BookMyShow offers showtimes, movie tickets, reviews, trailers, concert tickets and events near Mumbai . Also features promotional offers, coupons and mobile app.' />
        <link rel='icon' href='/favicon.ico' />
        </Helmet>
        <div className="flex bg-gray-50 dark:bg-gray-900">
        <MobileNavBar />
        <div className="flex flex-col flex-1 w-full">
       <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
       <DesktopNavBar />
       </header>
      </div>
    </div>
     </>
    );
}

export default NavBar;