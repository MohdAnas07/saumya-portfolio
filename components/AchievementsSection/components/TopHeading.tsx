import React from 'react';

interface TopHeadingProps {
  title: string;
  subTitle: string
}

const TopHeading: React.FC<TopHeadingProps> = ({ title, subTitle }) => {
  return (
    <div className="relative text-center mb-8">
      <h2 className="relative inline-block text-[48px] md:text-[80px] font-nanum font-[800] text-[#3C3C3C]">{title}
        <img
          src="/images/decoresImg/three_line.png"
          alt="Star Decor"
          className="absolute bottom-[-10px] left-[-35px] rotate-0 w-[47px] h-[67px] "
          draggable={false}
        />

      </h2>
      <p className='text-[40px] font-annie ' >{subTitle}</p>
      <img
        src="/images/decoresImg/shining_star.png"
        alt="Star Decor"
        className="absolute bottom-0 left-[70%] w-[40px] h-[53px] "
        draggable={false}
      />
    </div>
  );
};

export default TopHeading;
