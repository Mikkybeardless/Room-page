import { useState } from "react";
import Hamburger from "./Hamburger";

const NavBar = () => {
  const [openHarmburger, setOpenHamburger] = useState(false);

  const toggleHamburger = () => {
    setOpenHamburger(!openHarmburger);
  };

  return (
    <div className='text-white absolute active:hover:decoration-current underline cursor-pointer z-40'>
      <div
        className='md:invisible display:fixed z-40 ml-4 mt-[3.5rem]'
        onClick={toggleHamburger}
      >
        {<Hamburger />}
      </div>

      <div className='text-[23px] absolute md:left-12 left-[12rem] top-[3.2rem]'>
        room
      </div>
      <div className='flex absolute md:top-14 md:left-36  text-center '>
        <ul
          className={` text-[14px] gap-5 md:flex  md:visible ${
            openHarmburger ? "inline" : "invisible"
          }
            
           `}
        >
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
