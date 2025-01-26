import React from 'react'
import GalleryCard from './GalleryCard'

const InfiniteGalleryScrolling = ({ data }: { data: any }) => {
  return (
    <div className="relative my-20 ">
      <div className="flex items-center gap-12 animate-marquee2">
        {data.map((item: any, index: number) => (
          <div key={index} className='flex items-center gap-12'>
            <img
              src={item.icon}
              className=" w-24 md:w-40 rotate-[-8deg] "
            />
            <GalleryCard
              key={index}
              index={index}
              image={item.image}
              caption={item.caption}
            />
          </div>
        ))}
        {/* Duplicate for smooth infinite scrolling */}
        {data.map((item: any, index: number) => (
          <div className='flex items-center gap-12'>
            <img
              src={item.icon}
              className=" w-24 md:w-40 rotate-[-8deg] "
            />
            <GalleryCard
              key={index}
              index={index}
              image={item.image}
              caption={item.caption}
            />
          </div>
        ))}

        {data.map((item: any, index: number) => (
          <div className='flex items-center gap-12'>
            <img
              src={item.icon}
              className=" w-24 md:w-40 rotate-[-8deg] "
            />
            <GalleryCard
              key={index}
              index={index}
              image={item.image}
              caption={item.caption}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfiniteGalleryScrolling