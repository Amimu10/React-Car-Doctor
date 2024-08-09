
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import quote from "../../../public/assets/icons/quote.svg"; 
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonial(data);
      })
      .catch((err) => console.error("Error fetching testimonials:", err));
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="star text-[#FF3811]" />
        ))}
        {halfStar && <FaStarHalfAlt className="star" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="star text-[#FF3811]" />
        ))}
      </>
    );
  };

  return (
   <div className="container mx-auto">
 <div className=" my-14">
      <div className="text-center mb-24">
        <h5 className="text-[20px] text-[#FF3811]">Testimonial</h5>
        <h3 className="lg:text-[45px] md:text-[32px] font-bold  ">What Customer Says</h3>
        <p className="text-[#737373] text-[16px]">the majority have suffered alteration in some form, by injected humour, or randomised<br></br> words which don't look even slightly believable. </p>
      </div>
      <Swiper
        slidesPerView={2}
        pagination={{ type: "fraction" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonial.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial px-28">
              <div className="flex space-x-4">
                {testimonial.image ? (
                  <img
                    width={60}
                    height={60}
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                ) : (
                  <div
                    style={{ width: 60, height: 60, backgroundColor: "#ccc" }}
                  ></div>
                )}
             <div>
             <h3>{testimonial.name}</h3>         
             <p>{testimonial.title}</p>
             </div>
             <div>
              <img className="" height={50} width={50} src={quote}></img>
             </div>
              </div>
              <p className="my-5">{testimonial.description}</p>
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   </div>
  );
};

export default Testimonial;
