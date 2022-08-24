import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Components/CSS/carousal.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import Card0230 from "./Card0230";

export default function Mycarousal() {
  return (
    <div style={{ width: "100%", border: "1px solid red" }}>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ height: "auto", width: "33%" }}>
          <Card0230 />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto", width: "33%" }}>
          <Card0230 />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto", width: "33%" }}>
          <Card0230 />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto", width: "33%" }}>
          <Card0230 />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto", width: "33%" }}>
          <Card0230 />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto", width: "33%" }}>
          <Card0230 />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto", width: "33%" }}>
          <Card0230 />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto", width: "33%" }}>
          <Card0230 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
