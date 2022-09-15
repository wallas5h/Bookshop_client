import { useEffect, useRef, useState } from "react";
import { A11y, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "./Box";
import "./review.scss";

export const Review = () => {
  const isRunned = useRef(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    !isRunned.current &&
      (async () => {
        await fetch("https://reqres.in/api/users")
          .then((res) => res.json())
          .then((data) => {
            setUsers(data.data);
          });
      })();

    return () => {
      isRunned.current = true;
    };
  });

  return (
    <section className="reviews" id="review">
      <h1 className="heading">
        {" "}
        <span>client's reviews</span>{" "}
      </h1>

      <div className="review-slider">
        <Swiper
          modules={[Autoplay, Navigation, A11y]}
          spaceBetween={20}
          loop={true}
          navigation
          autoplay={{
            delay: 5500,
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
          {users
            ? users.map((user, index) => (
                <SwiperSlide key={index}>
                  <Box key={index} user={user} />
                </SwiperSlide>
              ))
            : ""}
        </Swiper>
      </div>
    </section>
  );
};
