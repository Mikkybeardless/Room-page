import footerImage1 from "../assets/images/image-about-dark.jpg";
import footerImage2 from "../assets/images/image-about-light.jpg";

const Footer = () => {
  return (
    <div className=' grid grid-cols-1 md:grid md:grid-cols-7'>
      <div className='md:col-span-2 w-full'>
        <img
          className='object-cover md:w-fit w-full'
          src={footerImage1}
          alt=''
        />
      </div>
      <div className='px-[3rem] py-10 md:pt-[4rem] md:pl-[6rem] md:pb-32 md:pr-[8rem] md:col-span-3 w-full'>
        <h2 className='font-bold mb-3 -tracking-[-5px] text-lg'>
          ABOUT OUR FURNITURE
        </h2>
        <p>
          Our multifunctional collection design and function to suit your
          individual taste.Make eachn room unique, or pick a cohesive theme that
          best express your interest and what inspires you. Find the furniture
          pieces you need, from tradition to contemperary styles or anything in
          between. Product specialists are available to help you create your
          dream space
        </p>
      </div>
      <div className='md:col-span-2 w-full'>
        <img
          className='object-cover md:w-fit w-full'
          src={footerImage2}
          alt=''
        />
      </div>
    </div>
  );
};

export default Footer;
