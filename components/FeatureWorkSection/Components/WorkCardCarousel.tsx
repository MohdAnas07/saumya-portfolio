import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'

import { Navigation } from 'swiper/modules';
import WorkCard from './WorkCard';
import { workData } from '@/Data/workData';

const WorkCardCarousel = () => {
  return (
    <div className="w-full py-10 bg-[#FFFCF2]">
      <div className="hidden md:block slider-container mx-auto">
        <Swiper
          navigation={true}
          slidesPerView={3}
          centeredSlides={false} /* Change to false for standard alignment */
          spaceBetween={20} /* Adjust spacing between slides */
          pagination={{
            clickable: true,
          }}
          modules={[ Navigation]}
          className="mySwiper"
        >
          {workData.map((card, index) => (
            <SwiperSlide key={index}>
              <WorkCard image={card.image} title={card.title} link={card.link} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col md:hidden slider-container mx-auto">

        {workData.map((card, index) => (
          <SwiperSlide key={index}>
            <WorkCard image={card.image} title={card.title} link={card.link} />
          </SwiperSlide>
        ))}
      </div>
    </div>
  );
};

export default WorkCardCarousel;
