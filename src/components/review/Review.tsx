import { A11y, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from "./Box";
import './review.scss';




export const Review = () => {


  return (
    <section className="reviews" id="review">
      <h1 className="heading"> <span>client's reviews</span> </h1>

      <div className="review-slider">
        <Swiper
          modules={[Autoplay, Navigation, A11y]}
          spaceBetween={20}
          loop={true}
          navigation
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