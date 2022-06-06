
import Carousel from '../../components/frontend/carousel/index';
import Header from '../../components/frontend/header/Header';
import Footer from '../../components/frontend/footer/Footer';
import Grid  from '../../components/frontend/grid/Grid';
import {useDispatch,useSelector} from 'react-redux';
import {getMovieRequest} from '../../actions/movieAction';
import {getGenreRequest} from '../../actions/genreAction';

import { useEffect,useState } from "react";
const Movies = ()=> {
     const dispatch= useDispatch();
     const movies =useSelector(state=>state.movies);
       const genres =useSelector(state=>state.genres);
     const languages = [... new Set(movies.data.map(data => data.language))]
     const [filterMovie,setFilterMovie]=useState([]);
     const [genre,setGenre]=useState([]);
      const [language,setLanguage]=useState([]);
        useEffect(()=>{

if(movies)
{
setFilterMovie(movies.data)
}

    },[movies]);
     
        useEffect(()=>{

 dispatch(getMovieRequest())
  dispatch(getGenreRequest())

    },[]);

  const filtergenrehandle = e => {
    if (e.target.checked) {
      setGenre([...genre, e.target.value]);
    } else {
      setGenre(genre.filter(id => id !== e.target.value));
    }
    
  };

  useEffect(() => {
   if (genre.length === 0) {
    setFilterMovie(movies.data)
  } else {
   
       const newdate2 = movies.data.filter(movie2 =>{
       
if (genre.includes(movie2.genre_id._id)) {
    return movie2;
}
    });
    setFilterMovie(newdate2);
  }
  }, [genre]);

   useEffect(() => {
   if (language.length === 0) {
    setFilterMovie(movies.data)
  } else {
    const newdata = movies.data.filter(movie1 =>{
if (language.includes(movie1.language)) {
    return movie1;
}
    });
    setFilterMovie(newdata);
  }
  }, [language]);

  const filterlanguagehandle=(e)=>{
      if (e.target.checked) {
      setLanguage([...language, e.target.value]);
    } else {
      setLanguage(language.filter(id => id !== e.target.value));
    }

  }
  
    return(
<>
<Header/>
<Carousel  />
    <section class="py-8 px-4 container">
           <h1 className='text-center mb-5 underline text-3xl'>Movies</h1>
        <div class="flex flex-wrap p-2 sm:p-6 lg:p-12">
          <div class="hidden md:block md:w-1/4 px-4">
 <h1 className=' mb-5  text-3xl'>Filter By</h1>
 <hr></hr>
  <h1 className='mb-5 mt-5  text-1xl'>Genre</h1>
  <div>

        { genres && genres.data.map((genre)=>{

return(
  <div key={genre._id}>
   <label class="inline-flex items-center mb-2">
      <input type="checkbox" class="w-4 h-4" value={genre._id} onChange={filtergenrehandle}  />
      <span class="ml-2 capitalize">{genre.name}</span>
    </label>
  </div>
)

          })}
    
  </div>
  
  <h1 className='mb-5 mt-5 text-1xl'>Language</h1>
   <hr></hr>
 <div className='mb-5 mt-5'>
  
 { languages && languages.map((language)=>{

return(
  <div key={language}>
   <label class="inline-flex items-center mb-2">
      <input type="checkbox" class="w-4 h-4" value={language} name="language" onChange={filterlanguagehandle}  />
      <span class="ml-2 capitalize">{language}</span>
    </label>
  </div>
)

          })}

  </div>

          </div>
          <div class="w-full md:w-3/4 h-auto px-4">
            <div class="grid grid-col-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-col-3 gap-3 ">
                {filterMovie && filterMovie.map((movie)=>{
    return (
        <Grid image_url={movie.image_url} name={movie.name} key={movie._id} />
    )
})}
            </div>
          </div>
        </div>
      </section>
<Footer />
</>
    );
}

export default Movies;