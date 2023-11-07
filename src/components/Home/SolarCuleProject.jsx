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
import { Link } from "react-router-dom";
import styled from "styled-components";
export const SolarCuleProject = () => {
  const data = [
    {
      image: "https://picsum.photos/600/400/?random",
      heading: "",
    },
    {
      image: "https://picsum.photos/600/400/?random",
      heading: "",
    },
    {
      image: "https://picsum.photos/600/400/?random",
      heading: "",
    },
    {
      image: "https://picsum.photos/600/400/?random",
      heading: "",
    },
    {
      image: "https://picsum.photos/600/400/?random",
      heading: "",
    },
    {
      image: "https://picsum.photos/600/400/?random",
      heading: "",
    },
  ];
  const breakpoint = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };
  return (
    <CourseWrapper>
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={breakpoint}
        className="card-container px-4"
      >
        {data.map((val, index) => {
          return (
            <div className="px-20">
              <SwiperSlide key={index} className="card">
                <img src={val.image} className="h-80 w-96" alt="" />
                <div className="card-body">
                  <h4>{val.heading}</h4>
                  {/* <h4>{val.details.price}</h4>
                <h4>{val.type}</h4>
                <h3>{val.status}</h3> */}

                  <div className="flex-between">
                    {/* <p>{val.location}</p> */}
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </CourseWrapper>
  );
};

const CourseWrapper = styled.div`
  .card-container {
    .card {
      position: relative;
      .card-body {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1rem;
        width: 362px;
        color: var(--whiteColor);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .swiper {
      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }
    }
  }
`;
