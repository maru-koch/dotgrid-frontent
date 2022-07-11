import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {SectionHeader} from '../../../elements/Sections'
import imgs from '../../../../assets/images/oolu_logo.png'
import solynta from '../../../../assets/images/solynta_logo.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ourPartners.css";

// import required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

export const OurPartners=() =>{
    SwiperCore.use([Autoplay, Navigation])
  return (
    <main className="swiper__container">
      <SectionHeader title="Our Parntners" subtitle="Powering the green revolution"/>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        autoplay={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="swiper"
      >
        <SwiperSlide>
            <div className="swiper__img">
                <img src = {imgs} alt=""/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__img">
                <img src = {solynta} alt=""/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__img">
                <img src = {imgs} alt=""/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__img">
                <img src = {solynta} alt=""/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__img">
                <img src = {imgs} alt=""/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__img">
                <img src = {solynta} alt=""/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__img">
                <img src = {imgs} alt=""/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__img">
                <img src = {solynta} alt=""/>
            </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
