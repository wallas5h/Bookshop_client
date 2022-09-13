import { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperSlide } from "swiper/react";
import "./box.scss";

interface Props {
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}

export const Box = (props: Props) => {
  const { first_name, last_name, avatar } = props.user;

  const [personData, setPersonData] = useState({
    first: "",
    last: "",
    img: "",
  });

  return (
    <>
      <SwiperSlide>
        <div className="box__review">
          <img
            src={
              avatar
                ? avatar
                : "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2019/10/blank-person-icon-9.jpg"
            }
            alt=""
          />
          <h3>{first_name ? `${first_name} ${last_name}` : "John Doe"}</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.
          </p>
          <div className="stars">
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStarHalf />
            </i>
          </div>
        </div>
      </SwiperSlide>
    </>
  );
};
