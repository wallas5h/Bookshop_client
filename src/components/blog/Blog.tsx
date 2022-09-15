import { A11y, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "./blog.scss";
import { booksDesc, booksImg, booksLink, booksTitle } from "./books.utils";
import { Box } from "./Box";

export const Blog = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        {" "}
        <span>our blogs</span>{" "}
      </h1>

      <div className="blog-slider">
        <Swiper
          modules={[Autoplay, Navigation, A11y]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
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
            <Box
              img={booksImg.lithub}
              title={booksTitle.lithub}
              description={booksDesc.lithub}
              link={booksLink.lithub}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              img={booksImg.broadcast}
              title={booksTitle.broadcast}
              description={booksDesc.broadcast}
              link={booksLink.broadcast}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              img={booksImg.lifeInBooks}
              title={booksTitle.lifeInBooks}
              description={booksDesc.lifeInBooks}
              link={booksLink.lifeInBooks}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              img={booksImg.fromFirstToLast}
              title={booksTitle.fromFirstToLast}
              description={booksDesc.fromFirstToLast}
              link={booksLink.fromFirstToLast}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              img={booksImg.bibliofile}
              title={booksTitle.bibliofile}
              description={booksDesc.bibliofile}
              link={booksLink.bibliofile}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              img={booksImg.bookSmugglers}
              title={booksTitle.bookSmugglers}
              description={booksDesc.bookSmugglers}
              link={booksLink.bookSmugglers}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
