import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slideOne from "../../assets/home-banner/slide-one.jpg";
import slideTwo from "../../assets/home-banner/slide-two.jpg";

export const HomeBanner = () => {
  const data = [
    {
      image: slideOne,
    },
    {
      image: slideTwo,
    },
  ];
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{}}
        pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data !== undefined
          ? data.map((val) => {
              return (
                <>
                  <SwiperSlide>
                    <img
                      src={val.image}
                      className="w-[100%] h-96"
                      alt="not found"
                    />
                  </SwiperSlide>
                  <div className="w-full absolute shadow-lg rounded h-40">
                    <div></div>
                  </div>
                </>
              );
            })
          : null}
      </Swiper>
    </>
  );
};
