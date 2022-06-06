import { Routes,Route } from 'react-router-dom';
import DashBoard from './pages/admin/dashboard/DashBoard';
import UsersList from './pages/admin/users/UserList';
import BannerList from './pages/admin/banners/BannerList';
import CityList from './pages/admin/citys/CityList';
import GenreList from './pages/admin/genres/GenreList';
import MovieList from './pages/admin/movies/MovieList';
import ShowList from './pages/admin/shows/ShowList';
import TheatreList from './pages/admin/theatres/TheatreList';


import BannerCreate from './pages/admin/banners/BannerCreate';
import CityCreate from './pages/admin/citys/CityCreate';
import GenreCreate from './pages/admin/genres/GenreCreate';
import MovieCreate from './pages/admin/movies/MovieCreate';
import ShowCreate from './pages/admin/shows/ShowCreate';
import TheatreCreate from './pages/admin/theatres/TheatreCreate';


import BannerEdit from './pages/admin/banners/BannerEdit';
import CityEdit from './pages/admin/citys/CityEdit';
import GenreEdit from './pages/admin/genres/GenreEdit';
import MovieEdit from './pages/admin/movies/MovieEdit';
import ShowEdit from './pages/admin/shows/ShowEdit';
import TheatreEdit from './pages/admin/theatres/TheatreEdit';
import Login  from './pages/admin/login/Login';
import Layout from './components/admin/layout/Layout';
import FourOhFour from './pages/admin/FourOhFour';
import HomePage from './pages/frontend/HomePage';
import Movies from './pages/frontend/Movies';
import Theatres from './pages/frontend/Theatres';
import Events from './pages/frontend/Events';
const MainRoutes = ()=> {
    return(
         <Routes>
                <Route path='/' element={<HomePage />}  />
                <Route path='/movies' element={<Movies />}  />
                <Route path='/theatres' element={<Theatres />}  />
                <Route path='/events' element={<Events />}  />
                
                <Route path='/admin/login' element={<Login />}  />
                <Route path='/admin' element={<Layout />}  >
              
                 <Route path='dashboard' element={<DashBoard />}  />
                 <Route path='users' element={<UsersList />}  />
                 {/* banner */}
                 <Route path='banners'  element={<BannerList/>} />
                 <Route path='banners/create' element={<BannerCreate />} />
                 <Route path='banners/edit/:id' element={<BannerEdit />} />
                 {/* city */}
                 <Route path='citys' element={<CityList />} />
                 <Route path='citys/create' element={<CityCreate />} />
                 <Route path='citys/edit/:id' element={<CityEdit />} />
                {/* genres */}
                <Route path='genres' element={<GenreList />} />
                <Route path='genres/create' element={<GenreCreate />} />
              
                <Route path='genres/edit/:id' element={<GenreEdit />} />
                {/* movies */}
                <Route path='movies/create' element={<MovieCreate />} />
                <Route path='movies' element={<MovieList />} />
                <Route path='movies/edit/:id' element={<MovieEdit />} />
                {/* shows */}
                <Route path='shows/create' element={<ShowCreate />} />
                <Route path='shows' element={<ShowList />} />
                <Route path='shows/edit/:id' element={<ShowEdit />} />
                {/* theatre */}
                <Route path='theatres/create' element={<TheatreCreate />} />
                <Route path='theatres' element={<TheatreList />} />
                <Route path='theatres/edit/:id' element={<TheatreEdit />} />
                
            </Route>
               
               
            <Route path='*' element={<FourOhFour />} />
        </Routes>
    );
}

export default MainRoutes;