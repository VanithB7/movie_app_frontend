
import Carousel from '../../components/frontend/carousel/index';
import Header from '../../components/frontend/header/Header';
import Footer from '../../components/frontend/footer/Footer';
import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Grid  from '../../components/frontend/grid/Grid';
import {getMovieRequest} from '../../actions/movieAction';
import { useEffect } from "react";
const HomePage = ()=> {
      const dispatch= useDispatch();
     const movies =useSelector(state=>state.movies);
        useEffect(()=>{

 dispatch(getMovieRequest())

    },[]);
    return(
<>
<Header/>
<Carousel />
<section className='mt-8 mb-8'>
    <h1 className='text-center mb-5 underline text-3xl'>Movies</h1>
<div className='container justify-center flex'>
<div class="grid grid-col-1 md:grid-cols-2  lg:grid-cols-3 gap-8 ">
{movies.data && movies.data.map((movie)=>{
    return (
        <Grid image_url={movie.image_url} name={movie.name} key={movie._id} />
    )
})}


</div>
<div>
    
</div>

</div>
<h3 className='text-center underline text-3xl mt-8 mb-8'> <Link to="/movies">View Movies</Link></h3>
</section>
<Footer />
</>
    );
}

export default HomePage;