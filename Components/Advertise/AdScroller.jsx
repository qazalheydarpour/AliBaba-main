import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import AdScrollContent from "./AdScrollContent";
const styles={
    content:{
        height:'32px',
        width:'250px',
        textAlign:'right',
        color:'black',
        fontSize:'13px',
        fontWeight:'700px!important', 
        marginLeft:'5%'
    }
}
const reasons=[
  {
    id:1,
    img:'https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/icon/support-b3f89964.svg',
    text:' پشتیبانی 24 ساعته ',
  },
  {
    id:2,
    img:'https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/icon/refund-2708b02d.svg',
    text:' استرداد آنلاین ',
  },
  {
    id:3,
    img:'https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/icon/calendar-9b6db890.svg', 
    text:' تقویم مقایسه قیمت‌ها ',
  },
  {
    id:4,
    img:'https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/icon/alert-36b8f869.svg', 
    text:' اطلاع رسانی کاهش قیمت ',
  },
  {
    id:5,
    img:'https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/icon/mag-1eeab37a.svg', 
    text:' راهنمای سفر ',
  },
  {
    id:6,
    img:'https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/icon/compare-b22c6fca.svg', 
    text:' مقایسه بلیط‌ها، هتل‌ها و تورها ',
  },
]
export default function App() {
  return (
    <>
    <Swiper
        direction={"vertical"}
        showsPagination={false}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Pagination]}
        style={styles.content}
      >
        {
          reasons.map( reason => (
            <SwiperSlide>
            <AdScrollContent
            img={reason.img}
            text={reason.text}
            />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
