
import Carousel from '../../components/frontend/carousel/index';
import Header from '../../components/frontend/header/Header';
import Footer from '../../components/frontend/footer/Footer';
const Theatres = ()=> {
    return(
<>
<Header/>
<Carousel  />
 <section class="py-8 px-4 container">
           <h1 className='text-center mb-5 underline text-3xl'>Theatres</h1>  
           <div className='h-96 flex justify-center align-middle'>
               <h1 className='text-3xl '>Comming Soon </h1>
        </div>
      </section>
<Footer />
</>
    );
}

export default Theatres;