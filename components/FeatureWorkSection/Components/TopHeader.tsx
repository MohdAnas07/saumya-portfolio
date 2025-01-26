import React from 'react';

interface TopHeadingProps {
  title: string;
  subTitle: string
}

const TopHeading: React.FC<TopHeadingProps> = ({ title, subTitle }) => {
  return (
    <div className="relative text-center">
      <h2 className="relative inline-block text-[48px] md:text-[80px] font-nanum font-[800] text-[#3C3C3C]">{title}
        <img
          src="/images/decoresImg/three_line.png"
          alt="Star Decor"
          className="absolute top-[-20px] left-[-35px] rotate-[90deg] w-[47px] h-[67px] "
          draggable={false}
        />
        <p className='text-[40px] font-annie max-w-[532px] text-wrap text-center mx-auto ' >{subTitle}</p>
        <img
          src="/images/decoresImg/jigjag_arrow.png"
          alt="Star Decor"
          className="absolute bottom-0 right-[-35%]  "
          draggable={false}
        />
      </h2>
    </div>
  );
};

export default TopHeading;
