import React from 'react';

const WorkCard = ({ image, title, link }: { image: string, title: string, link: string }) => {
  return (
    <div className=" w-[358px] md:w-[430px]  rounded-lg  overflow-hidden">
      <img
        src={image}
        alt={title}
        className=" w-full h-[363px] md:h-[470px] object-cover rounded-lg "
      />
      <div className="mt-2 md:mt-6 p-6 text-center font-montserrat">
        <h3 className=" text-lg md:text-[30px] font-bold mb-3">{title}</h3>

        <button
          onClick={() => window.location.href = link}
          className={` font-montserrat border border-[#6D4C41] rounded-[10px] px-4 py-2 text-[#6D4C41] hover:bg-[#8A6C59] hover:text-white transition-all text-lg md:text-[24px] font-medium cursor-pointer inline mt-2 md:mt-6  `}>
          See work
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
