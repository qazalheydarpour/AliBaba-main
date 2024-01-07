import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DateSwiperCard from "./DateSwiperCard";
import { Box } from "@mui/system";
import { Navigation, Pagination } from "swiper";
const styles={
    myswiper:{
        height:'62px'
    },
}
const data =[
    {
        id:1,
        day:'سه شنبه - ۱۲/۱۰',
        price:'۸۷۰',
        color:'red'
    },
    {
        id:2,
        day:'چهارشنبه - ۱۲/۱۱',
        price:'۸۰۶',
        color:'black'
    },
    {
        id:3,
        day:'پنج‌شنبه - ۱۲/۱۲',
        price:'۷۵۴',
        color:'green'
    },
    {
        id:4,
        day:'جمعه - ۱۲/۱۳',
        price:'۷۸۰',
        color:'black'
    },
    {
        id:5,
        day:'شنبه - ۱۲/۱۴',
        price:'۸۰۶',
        color:'black'
    },
    {
        id:6,
        day:'یک‌شنبه - ۱۲/۱۵',
        price:'۷۸۰',
        color:'black'
    },
    {
        id:7,
        day:'دوشنبه - ۱۲/۱۶',
        price:'۷۸۰',
        color:'black'
    },
    {
        id:8,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰',
        color:'black'
    },
    {
        id:9,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰',
        color:'black'
    },
    {
        id:10,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰',
        color:'black'
    },
    {
        id:11,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰',
        color:'black'
    },
    {
        id:12,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰',
        color:'black'
    },
    {
        id:13,
        day:'جمعه - ۱۱/۱۵',
        price:'۷۰۰',
        color:'black'
    },
]
export default function DateSwiper() {
  return (
    <Box sx={{border:'1px solid rgba(0, 0, 0, .1)',borderRadius:'5px',backgroundColor:'white'}}>
      <Swiper
        dir="rtl"
        slidesPerView={7}
        spaceBetween={0}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        style={styles.myswiper}
      >
        
        {
           data.map( data => (
            <SwiperSlide>
                <DateSwiperCard
                day={data.day}
                price={data.price}
                color={data.color}
                />
             </SwiperSlide>
           ))
        }
        
      </Swiper>
    </Box>
  );
}
