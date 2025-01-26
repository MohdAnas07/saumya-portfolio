"use client"
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    console.log("activeLink", activeLink);

  }, [activeLink])

  return (
    <header className="sticky top-0 z-40 h-[120px] flex justify-center items-center px-4 md:px-[80px] bg-background ">
      <nav className="w-full flex items-center justify-between gap-4 :gap-4 ">
        {/* Logo */}
        <div>
          <h1 className="font-spicyrice text-[50px] text-[#6D4C41]">100mya</h1>
        </div>

        {/* Navigation Menu */}
        <ul className="flex items-center gap-6 bg-[#A28B7C36] p-3 rounded-[10px] w-[452px] justify-center font-montserrat ">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setActiveLink('Home')}
          >
            <li className={`font-montserrat text-[16px] cursor-pointer p-[10px] rounded-md !w-[124px] text-center text-lg  ${activeLink === 'Home' ? 'bg-[#8A6C59] text-white  ' : 'text-[#6D4C41]'}`} >
              Home
            </li>
          </Link>
          <Link
            to="work"
            smooth={true}
            duration={500}
            onClick={() => setActiveLink('Work')}
          >
            <li className={`font-montserrat text-[16px] cursor-pointer p-[10px] rounded-md !w-[124px] text-center text-lg  ${activeLink === 'Work' ? 'bg-[#8A6C59] text-white  ' : 'text-[#6D4C41]'}`} >

              Work
            </li>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setActiveLink('Contact')}
          >
            <li className={`font-montserrat text-[16px] cursor-pointer p-[10px] rounded-md !w-[124px] text-center text-lg  ${activeLink === 'Contact' ? 'bg-[#8A6C59] text-white  ' : 'text-[#6D4C41]'}`} >

              Contact
            </li>
          </Link>
        </ul>

        {/* Resume Button */}
        <div>
          <Button text={'Resume'} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
