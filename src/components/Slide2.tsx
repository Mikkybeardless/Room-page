import image2 from "../assets/images/desktop-image-hero-2.jpg";
import ShopNow from "./ShopNow";

const Slide2 = () => {
  return (
    <div className='md:grid md:grid-cols-5'>
      <div className='md:col-span-3'>
        <img
          className=' w-full h-[400px] object-cover'
          src={image2}
          alt='second slide'
        />
      </div>

      <div
        className='px-[3rem] py-8 md:pt-[4rem] md:pl-[6rem] md:pb-32 md:pr-[8rem] 
         md:h-[400px] text-left md:col-span-2'
      >
        <h1 className='text-4xl mb-4 tracking-tight  font-bold'>
          We are available all across the globe
        </h1>
        <p>
          With stores all over the world, it's easy for you to find furniture
          for your home or place of business. Locally, we're in most major
          cities throughout the country. Find the branch nearest you using our
          store location. Any question? don't hesitate to contact us today.
        </p>
        <ShopNow />
      </div>
    </div>
  );
};

export default Slide2;
