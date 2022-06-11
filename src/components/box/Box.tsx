import { FaEye, FaHeart, FaSearch } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/autoplay';
import { SwiperSlide } from 'swiper/react';
import './box.scss';
import { book1 } from "./imports";


export const Box = () => {


  return (
    <>
      <div className="box">
        <SwiperSlide>
          <div className="icons">
            <a href="#" ><FaSearch /></a>
            <a href="#">< FaHeart /></a>
            <a href="#" ><FaEye /></a>
          </div>
          <div className="image">
            <img src={book1} alt="" />
          </div>
          <div className="content">
            <h3>featured books</h3>
            <div className="price">$15.99 <span>$20.99</span></div>
            <a href="#" className="btn">add to cart</a>
          </div>
        </SwiperSlide>
      </div>

    </>
  )
}