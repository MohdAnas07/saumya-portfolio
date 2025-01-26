import React from 'react';
import SkillsAutoScroll from './components/SkillsAutoScroll';

const HeroSection = () => {
  return (
    <div
      id="home"
      className="h-[100vh] flex items-center justify-center flex-col relative bg-background bg-no-repeat bg-cover bg-[url('/images/dots-bg.png'),url('/images/bg-gradient.png')] bg-center"
    >
      {/* Hero Text */}
      <div className="relative text-center px-4 mb-[80px] ">
        {/* Decorative Props */}
        <img
          src="/images/decoresImg/shining_star.png"
          alt="Star Decor"
          className="absolute top-[-4rem] left-[8rem] w-[47px] h-[67px] "
          draggable={false}
        />
        <h1 className="font-nanum text-[48px] md:text-[120px] leading-[130px] font-bold ">
          Shaping <span className="relative inline-block">
            <span className="relative font-nanum text-[48px] md:text-[120px] font-[800] italic  ">
              ideas
              <img
                src="/images/decoresImg/idea_eclipse.png"
                alt="Eclipse Decor"
                className="absolute top-[-30px] w-[382px] h-[185px]"
              />
            </span>{' '}
            into
          </span>

          <br />
          intuitive experiences with
        </h1>
        {/* Curve Arrow */}
        <img
          src="/images/decoresImg/curve_arrow.png"
          alt="Curve Arrow"
          className="absolute bottom-[1.5rem] left-[70%] w-24 md:w-40 rotate-[-8deg] "
        />
        <img
          src="/images/decoresImg/shining_star.png"
          alt="Star Decor"
          className="absolute bottom-[2rem] right-[0rem] w-[47px] h-[67px] "
          draggable={false}
        />
        <p className="font-annie text-[70px] italic text-[#6D4C41] mt-2">
          ux and ui design
        </p>
      </div>

      {/*  Skills Feature AutoScroll Section */}
      <SkillsAutoScroll />

    </div >
  );
};

export default HeroSection;
