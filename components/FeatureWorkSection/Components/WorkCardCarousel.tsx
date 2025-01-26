import React from 'react';
import Slider from 'react-slick';
import WorkCard from './WorkCard';
import { workData } from '@/Data/workData';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const WorkCardCarousel = () => {

  return (
    <div className="w-full py-10 z-1">
      {/* <div className=" mx-auto px-4 flex  "> */}
      <div className="slider-container">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper bg-[bg-[#FFFCF2]]"
        >
          {workData.map((card, index) => (
            <SwiperSlide>
              <div key={index} className="p-4">
                <WorkCard image={card.image} title={card.title} link={card.link} />
              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </div>
  );
};

export default WorkCardCarousel;
