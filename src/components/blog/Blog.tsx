import { A11y, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from './Box';



export const Blog = () => {


  return (
    <section className="blogs" id="blogs">
      <h1 className="heading"> <span>our blogs</span> </h1>

      <div className="blog-slider">
        <Swiper
          modules={[Autoplay, Navigation, A11y]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 5500
          }}
          breakpoints={{
            450: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <Box />
          </SwiperSlide>
          <SwiperSlide>
            <Box />
          </SwiperSlide>
          <SwiperSlide>
            <Box />
          </SwiperSlide>


        </Swiper>


      </div>


    </section>
  )
}