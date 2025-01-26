import React from 'react';

interface GalleryCardProps {
  image: string;
  caption: string;
  index: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, caption, index }) => {
  return (
    <div className={`max-w-[426px] h-[489px] inline-block z-10 bg-[#F9F8F7] shadow-lg p-6 ${index % 2 === 0 ? 'rotate-[-5deg]' : 'rotate-[5deg]'}  `}>
      <img
        src={image}
        alt={caption}
        className=" w-[376px] h-[348px] object-cover object-top "
      />
      {/* Caption */}
      <div className="mt-4 text-center font-annie text-[20px] md:text-[30px]  italic text-[#656565]">
        {caption}
      </div>
    </div>

  );
};

export default GalleryCard;
