import { FaStar, FaStarHalf } from 'react-icons/fa';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import './arrivals.scss';
import { book1, book2, book3, book4 } from './imports';
// import { book1, book2, book3, book4, book5, book6 } from './imports';

export const Arrivals = () => {


  return (
    <>
      <section className="arrivals" id="arrivals">

        <h1 className="heading"> <span>new arrivals</span> </h1>


        <div className="arrivals-slider">
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
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <a href="#" className="box" key={0}>
              <SwiperSlide>
                <a href="" className='image'><img src={book1} alt="book" /></a>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">$15.99 <span>$20.99</span></div>
                  <div className="stars">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStarHalf /></i>
                  </div>
                </div>
              </SwiperSlide>
            </a>
            <a href="#" className="box" key={1}>
              <SwiperSlide>
                <a href="" className='image'><img src={book2} alt="book" /></a>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">$15.99 <span>$20.99</span></div>
                  <div className="stars">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStarHalf /></i>
                  </div>
                </div>
              </SwiperSlide>
            </a>

            <a href="#" className="box" key={2}>
              <SwiperSlide>
                <a href="" className='image'><img src={book3} alt="book" /></a>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">$15.99 <span>$20.99</span></div>
                  <div className="stars">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStarHalf /></i>
                  </div>
                </div>
              </SwiperSlide>
            </a>
            <a href="#" className="box" key={3}>
              <SwiperSlide>
                <a href="" className='image'><img src={book4} alt="book" /></a>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">$15.99 <span>$20.99</span></div>
                  <div className="stars">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStarHalf /></i>
                  </div>
                </div>
              </SwiperSlide>
            </a>




          </Swiper>
        </div>

      </section>
    </>
  )
}