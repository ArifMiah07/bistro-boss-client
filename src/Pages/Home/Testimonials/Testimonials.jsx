import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'

const Testimonials = () => {


  const [reviews, setReviews] = useState([]);

  useEffect(()=>{
    fetch('reviews.json')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setReviews(data);
    })
  },[])
  return (
    <section>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}></SectionTitle>
      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col justify-center items-center p-12 gap-5">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <div>
                  <img className="w-20 my-4" src="https://www.svgrepo.com/show/123881/quotation-mark.svg" alt="" />
                </div>
                <p>{review.details}</p>
                <h2 className="text-3xl">{review.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
