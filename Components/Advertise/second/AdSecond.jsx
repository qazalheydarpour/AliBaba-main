import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import theme from "../../../styles/theme";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.primary.main,
  }));
const styles={
    mySwiper:{
        height:'300px',
    },
    img:{
        backgroundColor:'white',width:'100%',height:'75%',borderRadius:'7px',
        backgroundRepeat: 'no-repeat',backgroundSize: 'cover'
    }
}
const backImages = [
    {
        id:1,
        url:'https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/isfahan-travel-book-c578d6ca.webp',
    },
    {
        id:2,
        url:'https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/kish-travel-book-c0a016c0.webp'
    },
    {
        id:3,
        url:'https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/kish-travel-book-c0a016c0.webp'
    },
    {
        id:4,
        url:'https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/isfahan-travel-book-c578d6ca.webp',
    },
]
export default function AdSecond () {
  return (
       <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        style={styles.mySwiper}
      >
          {
              backImages.map( image => (
                <SwiperSlide><Box style={styles.img} sx={{backgroundImage: `url("${image.url}")`}}></Box></SwiperSlide>
              ))
          }
        
      </Swiper>
    </>
  );
}