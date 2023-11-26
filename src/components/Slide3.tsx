import image3 from "../assets/images/desktop-image-hero-3.jpg";
import ShopNow from "./ShopNow";

const Slide3 = () => {
  return (
    <div className='md:grid md:grid-cols-5 w-screen'>
      <div className='col-span-3'>
        <img
          className=' w-full h-[400px] object-cover'
          src={image3}
          alt='Third slide'
        />
      </div>

      <div
        className='px-[2rem] md:px-[3rem] py-8 md:pt-[4rem] md:pl-[5rem] md:pb-32 md:pr-[8rem] 
         md:h-[400px] text-left md:col-span-2'
      >
        <h1 className='text-4xl mb-4 tracking-tight font-bold'>
          Manufactured with the best materials
        </h1>
        <p>
          Our modern furniture store provides a high level of quality. Our
          company has invested in advanced technology to ensure that every
          product is made as perfect and as consistent as possible. With three
          decades of experience in this industry, we understand what customers
          want for their home and office.
        </p>
        <ShopNow />
      </div>
    </div>
  );
};

export default Slide3;
