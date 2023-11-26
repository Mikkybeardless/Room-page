import image1 from "../assets/images/desktop-image-hero-1.jpg";
import ShopNow from "./ShopNow";

const Slide1 = () => {
  return (
    <div className='md:grid md:grid-cols-5 w-screen h-full'>
      <div className='md:col-span-3'>
        <img
          className=' w-full h-[400px] object-cover'
          src={image1}
          alt='First slide'
        />
      </div>

      <div
        className='px-[2rem] md:px-[3rem] py-8 md:pt-[3rem] md:pl-[5rem] md:pb-32 md:pr-[8rem] 
         md:h-[400px] text-left md:col-span-2'
      >
        <h1 className='text-4xl mb-4 tracking-tight  font-bold'>
          Discover Innovative ways to decorate
        </h1>
        <p>
          We provide unmatched quality, comfort and style for property owners
          across the country. Our expert combine form and function in bringing
          your vision to life. Creat a room in your own style with our
          collection and make your property a reflection of you and what you
          love
        </p>
        <ShopNow />
      </div>
    </div>
  );
};

export default Slide1;
