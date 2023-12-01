import NavBar from "./components/NavBar";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";

const Home = () => {
  return (
    <div className='relative'>
      <NavBar />
      <div className='carousel w-full '>
        <div
          id='slide1'
          className='carousel-item relative  md:w-full h-full mb-0'
        >
          <Slide1 />
          <div
            className='absolute flex w-[6.5rem] md:w-[9.5rem] p-3 justify-between bg-black text-white  
          transform -translate-y-1/2 top-[55%] left-[75%] md:left-[60%] md:top-[93%]'
          >
            <a
              href='#slide3'
              className='btn bg-black btn-sm md:btn-base text-white border-none'
            >
              ❮
            </a>
            <a
              href='#slide2'
              className='btn bg-black btn-sm md:btn-base text-white border-none'
            >
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item  relative md:w-full'>
          <Slide2 />
          <div
            className='absolute flex w-[6.5rem] md:w-[9.5rem] p-3 justify-between bg-black text-white 
           transform -translate-y-1/2 top-[54%] left-[75%] md:left-[60%] md:top-[93%]'
          >
            <a
              href='#slide1'
              className='btn bg-black btn-sm md:btn-base text-white border-none'
            >
              ❮
            </a>
            <a
              href='#slide3'
              className='btn bg-black btn-sm md:btn-base text-white border-none'
            >
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item  relative md:w-full'>
          <Slide3 />
          <div
            className='absolute flex w-[6.5rem] md:w-[9.5rem] p-3 justify-between bg-black text-white  transform
           -translate-y-1/2 top-[54%] left-[75%] md:left-[60%] md:top-[93%]'
          >
            <a
              href='#slide2'
              className='btn ml-0 bg-black btn-sm md:btn-base text-white border-none'
            >
              ❮
            </a>
            <a
              href='#slide1'
              className='btn bg-black btn-sm md:btn-base text-white border-none'
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
