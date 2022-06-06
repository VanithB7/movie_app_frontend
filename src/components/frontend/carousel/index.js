import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import {getBannerRequest} from '../../../actions/bannerAction';
import {useDispatch,useSelector} from 'react-redux';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination,Autoplay } from "swiper";

const Carousel= ()=>{
 const dispatch= useDispatch();
    const {data} =useSelector(state=>state.banners);
    
        useEffect(()=>{
 dispatch(getBannerRequest())


    },[]);
 return (
    <>
      <Swiper pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      modules={[Pagination, Autoplay]} 
      
      className="mySwiper">
          {data && data.map((carouseldata,index)=>{
              return(
<SwiperSlide key={index} >
    <img  
        alt="vaishnavi" className="w-full xl:h-[calc(100vh_-_90px)] object-cover" src={carouseldata.image_url} />
</SwiperSlide>
              );
          })}
   
        
      </Swiper>
    </>
  );

};
export default Carousel;