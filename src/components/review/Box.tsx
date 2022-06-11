import { FaStar, FaStarHalf } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperSlide } from 'swiper/react';
import './box.scss';
import { blog1 } from "./imports";

export const Box = () => {
  return (
    <>
      <SwiperSlide>
        <div className="box__review">
          <img src={blog1} alt="" />
          <h3>john deo</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint,
            eos ex similique facere hic.</p>
          <div className="stars">
            <i><FaStar /></i>
            <i><FaStar /></i>
            <i><FaStar /></i>
            <i><FaStar /></i>
            <i><FaStarHalf /></i>
          </div>
        </div>
      </SwiperSlide>
    </>
  )
}