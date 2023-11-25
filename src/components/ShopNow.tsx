import arrowIcon from "../assets/images/icon-arrow.svg";
const ShopNow = () => {
  return (
    <div className='flex items-center cursor-pointer hover:text-darkGray active:text-darkGray '>
      <h2 className='-tracking-[-12px] mt-4 font-bold text-base '>SHOP NOW</h2>
      <img
        className='mt-3 ml-3 hover:filter-darkGray transition-[0.3] ease-out'
        src={arrowIcon}
        alt=''
      />
    </div>
  );
};

export default ShopNow;
