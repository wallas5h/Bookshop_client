import { FaEye, FaHeart } from "react-icons/fa";
import { A11y, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import './featured.scss';
import { book1, book2, book3 } from "./imports";




export const Featured = () => {


  return (
    <section className="featured" id="featured">
      <h1 className="heading"> <span>featured books</span> </h1>

      <div className="featured-slider">
        <Swiper
          modules={[Autoplay, Navigation, A11y]}
          spaceBetween={20}
          loop={true}
          navigation
          autoplay={{
            delay: 2500
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
            <div className="box">
              <div className="icons">
                <a href="#">< FaHeart /></a>
                <a href="#" ><FaEye /></a>
              </div>
              <div className="image">
                <img src={book1} alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <p>Abraham Lincoln</p>
                <div className="price">$15.99 <span>$20.99</span></div>
                <a href="#" className="btn">add to cart</a>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="box">
              <div className="icons">
                <a href="#">< FaHeart /></a>
                <a href="#" ><FaEye /></a>
              </div>
              <div className="image">
                <img src={book2} alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <p>Abraham Lincoln</p>
                <div className="price">$15.99 <span>$20.99</span></div>
                <a href="#" className="btn">add to cart</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="box">
              <div className="icons">
                <a href="#">< FaHeart /></a>
                <a href="#" ><FaEye /></a>
              </div>
              <div className="image">
                <img src={book3} alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <p>Abraham Lincoln</p>
                <div className="price">$15.99 <span>$20.99</span></div>
                <a href="#" className="btn">add to cart</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>


      </div>


    </section>
  )
}