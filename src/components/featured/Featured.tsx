import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { BookResponseEntity } from "types";
import { apiUrl } from "../../config/api";
import { FeatureBook } from "./FeatureBook";
import "./featured.scss";

export const Featured = () => {
  const [books, setBooks] = useState<BookResponseEntity[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${apiUrl}/book/feature`);

        const data = await res.json();

        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section className="featured" id="featured">
      <h1 className="heading">
        {" "}
        <span>featured books</span>{" "}
      </h1>

      <div className="featured-slider">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation
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
          {books
            ? books.map((book) => (
                <SwiperSlide key={book._id}>
                  <FeatureBook {...book} />
                </SwiperSlide>
              ))
            : "no feature books"}
        </Swiper>
      </div>
    </section>
  );
};
