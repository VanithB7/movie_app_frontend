
import NavBar from "../navbar/NavBar";
import SideBar from "../sidebar/SideBar";
import {Outlet} from 'react-router-dom';

const Layout = ()=> {
    return(
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">

    <SideBar/>
    
      <div className="flex flex-col flex-1 w-full">

     <NavBar/>
      <main className="h-full overflow-y-auto">
     <Outlet/>
      </main>

      </div>
    </div>
    );
}

export default Layout;