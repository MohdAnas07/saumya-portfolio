import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ContactSection = () => {
  return (
    <>
      <div id='contact' className=" inset-0 -z-10 h-auto w-full bg-[#8A6C59] bg-[linear-gradient(to_right,#DEDCD3_1px,transparent_1px)] bg-[size:12rem] md:bg-[size:24rem] bg-center rounded-t-[50px] text-white ">

        <h1 className=' text-[100px] lg:text-[180px] text-center font-montserrat font-[800] text-white '>
          LET’S CONNECT
        </h1>

        <div className=' flex justify-between items-center px-20 pt-10 pb-16 '>
          <div className=' relative w-[335px] font-annie text-[30px]'>
            <p>I am currently available for new
              work, let me know if you need a
              UX/UI Designer. I’d love to
              talk about the next big thing!</p>
            <img
              src="/images/decoresImg/light_three_lines.png"
              alt="Star Decor"
              className="absolute top-[-40px] left-[-45px] rotate-0 w-[47px] h-[67px] text-white "
              draggable={false}
            />
          </div>

          <ul className=' flex flex-col gap-2'>
            <Link href={'https://www.instagram.com/ui.saumya/'}>
              <li className='flex items-center gap-2 underline text-[30px] '>Instagram <FiArrowUpRight /> </li>
            </Link>
            <Link href={'https://www.linkedin.com/in/saumya-gautam-a9731b214/'} >
              <li className='flex items-center gap-2 underline text-[30px] '>LinkedIn <FiArrowUpRight /> </li>
            </Link>
            <Link href={'https://www.behance.net/saumyagautam2'}>
              <li className='flex items-center gap-2 underline text-[30px] '>Behance <FiArrowUpRight /> </li>
            </Link>
          </ul>
        </div>
      </div>



    </>
  )
}

export default ContactSection