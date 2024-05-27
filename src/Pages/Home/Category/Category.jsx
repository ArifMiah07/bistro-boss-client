import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {

    // const heading = ''
    // const subHeading = ''
  return (
    <div>
      <section>
        <SectionTitle 
            heading={'ORDER ONLINE'}
            subHeading={'From 11:00am to 10:00pm'}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24">
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text-3xl uppercase text-center text-white -mt-16">
              salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="text-3xl uppercase text-center text-white -mt-16">
              pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text-3xl uppercase text-center text-white -mt-16">
              soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="text-3xl uppercase text-center text-white -mt-16">
              desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="text-3xl uppercase text-center text-white -mt-16">
              Salad
            </h3>
          </SwiperSlide>
          {/* <SwiperSlide>
        <img src={slide} alt="" />
        <h3 className="text-3xl uppercase text-center text-white -mt-16"></h3>
    </SwiperSlide>
        <SwiperSlide>
        <img src={slide} alt="" />
        <h3 className="text-3xl uppercase text-center text-white -mt-16"></h3>
    </SwiperSlide>
        <SwiperSlide>
        <img src={slide} alt="" />
        <h3 className="text-3xl uppercase text-center text-white -mt-16"></h3>
    </SwiperSlide>
        <SwiperSlide>
        <img src={slide} alt="" />
        <h3 className="text-3xl uppercase text-center text-white -mt-16"></h3>
    </SwiperSlide> */}
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
