import React from 'react';
import InfoBox from './Components/InfoBoxProps';
import Button from '../Button/Button';

const AboutMeSection = () => {
  return (
    <div id='achievements' className='bg-[#FFF3E8]'>

      <h2 className="font-nanum text-[48px] md:text-[80px] text-[#3C3C3C] font-[800] mb-4 text-center ">Ab@ut me</h2>

      <div className=" py-16 px-6 pt-0 lg:px-24 flex flex-col md:flex-row items-center justify-center gap-20">
        {/* Left Section - About Text */}
        <div className="w-[60%] text-left ">

          <p className="font-montserrat text-[18px] md:text-[40px] leading-[1.8] text-[#333]">
            I’m <span className="relative font-bold text-[#6D4C41]">
              SAUMYA GAUTAM
              <InfoBox
                text='Dehli'
                ClassName='bottom-[-30px] left-0'
              />
            </span>
            
              , a <span className='relative'>UX/UI<InfoBox
                text='2 years'
                ClassName='top-[-10px] left-[90%]'
              />
            </span> designer driven by{' '}
              
            <span className="font-bold">CURIOSITY</span> and <span className="font-bold">CREATIVITY</span>. I specialize in crafting intuitive,{' '}
            <span className="relative font-bold">
              USER-CENTERED DESIGNS
              <InfoBox
                text='Empathy'
                ClassName='bottom-[-30px] left-[40%]'
              />
              </span> that solve real-world problems.
          </p>
          
          <Button text={'Let’s Connect'} />
        </div>

        {/* Right Section - Image and Highlights */}
        <div className="relative w-[40%]">


          {/* Profile Image */}
          <div className="relative w-[426px] h-[489px] inline-block z-10 bg-[#F9F8F7] shadow-lg p-4  ">
            <img
              src="/images/somya_about_me_img.png"
              alt="Somya Gautam"
              className=" rotate-2 "
            />
            {/* Caption */}
            <div className="mt-4 text-center font-annie text-[20px] md:text-[40px]  italic text-[#656565]">
              Saumya Gautam
            </div>

            <img
              src="/images/decoresImg/three_line.png"
              alt="Star Decor"
              className="absolute top-[-25px] left-[-20px] rotate-90 w-[47px] h-[67px] "
              draggable={false}
            />
          </div>

          {/* Polaroid Frame Effect */}
          <div className="w-[426px] h-[489px] absolute top-0 left-0 bg-white shadow-lg transform rotate-[-4deg] z-0"></div>
          <div className="w-[426px] h-[489px] absolute top-0 left-0 bg-white shadow-lg transform rotate-[2deg] z-0"></div>
          {/* <div className="absolute top-1 right-0 w-full h-full bg-[#FFFBF5] shadow-lg rounded-[10px] transform rotate-[1deg] z-0"></div> */}

        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
