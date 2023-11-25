const Hamburger = () => {
  return (
    <div className='w-[2rem] h-[2rem] flex content-around flex-col z-10'>
      <div className='w-[2rem] h-1 bg-white transform-cpu border-[1px] transition-all mb-1'></div>
      <div className='w-[2rem] h-1 bg-white transform-cpu border-[1px] transition-all mb-1'></div>
      <div className='w-[2rem] h-1 bg-white transform-cpu border-[1px] transition-all mb-1'></div>
    </div>
  );
};

export default Hamburger;
