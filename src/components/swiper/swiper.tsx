import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/bundle"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCards, Navigation } from 'swiper/modules';

export default function SwiperC(){
  return (
    <div style={{backgroundColor: "yellow"}}>
        <Swiper
            slidesPerView= {1}
            spaceBetween={10}
            pagination={{
            clickable: true
            }}
            modules={[Navigation, EffectCards]}
            effect="Cards"
            navigation={{
            nextEl: '.featured-swiper-button-next',
            prevEl: '.featured-swiper-button-prev'
            }}
            className={'mySwiperProd'}
            // autoHeight={true}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <button className={"featured-swiper-button-prev"}>
                Prev
            </button>
            <button className={"featured-swiper-button-next"}>
                Next
            </button>
        </Swiper>
        {/* <Swiper
            slidesPerView= {1}
            spaceBetween={10}
            pagination={{
            clickable: true
            }}
            modules={[Navigation, EffectFade]}
            effect="fade"
            navigation={{
                nextEl: '.featured-swiper-button-next',
                prevEl: '.featured-swiper-button-prev'
            }}
            className={'mySwiperProd'}
            // autoHeight={true}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <button className={"featured-swiper-button-prev"}>
                Prev
            </button>
            <button className={"featured-swiper-button-next"}>
                Next
            </button>
        </Swiper> */}
    </div>
  );
};