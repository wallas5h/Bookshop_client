import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import './home.scss';
import { book1, book2, book3, book4, book5, book6, stand } from './imports';


export const Home = () => {


  return (
    <>
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>upto 75% off</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit
              necessitatibus, aliquid ex minima at!</p>
            <a href="/cart/resume" className="btn">shop now</a>
          </div>


          <div className="books-slider">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2500
              }}
              breakpoints={{
                450: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
            >

              <SwiperSlide>
                <a href=""><img src={book1} alt="book" /></a>
              </SwiperSlide>
              <SwiperSlide>
                <a href=""><img src={book2} alt="book" /></a>
              </SwiperSlide>
              <SwiperSlide>
                <a href=""><img src={book3} alt="book" /></a>
              </SwiperSlide>
              <SwiperSlide>
                <a href=""><img src={book4} alt="book" /></a>
              </SwiperSlide>
              <SwiperSlide>
                <a href=""><img src={book5} alt="book" /></a>
              </SwiperSlide>
              <SwiperSlide>
                <a href=""><img src={book6} alt="book" /></a>
              </SwiperSlide>
              <img src={stand} className='stand' alt="stand" />
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}