import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
  
      // Cleanup function to clear the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount
    const formattedDate = currentDate.toLocaleTimeString();

  return (
    <header className="self-stretch flex flex-col items-center justify-start gap-[31px] max-w-full text-left text-29xl text-crimson font-open-sans mq675:gap-[31px]">
    <div className="w-[998px] flex flex-row items-start justify-between py-0 px-5 box-border gap-[20px] max-w-full">
      <div className="w-[319px] flex flex-row items-center justify-start gap-[9px]">
        <img
          className="h-[117px] w-[107px] relative object-cover"
          loading="eager"
          alt=""
          src="/sunny-day.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <div className="relative whitespace-nowrap z-[1]">11:17am</div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 text-9xl text-dimgray">
              <div className="flex flex-row items-end justify-start gap-[10px]">
                <div className="h-[38px] relative inline-block">15°c</div>
                <div className="h-[27px] relative text-xl font-light text-black inline-block whitespace-nowrap">
                  Fair Conditions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-45xl">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <div className="h-[87px] relative inline-block">
              <span className="font-extrabold">YYC</span>
              <span className="font-light">-iosk</span>
            </div>
          </div>
          <div className="h-[83px] w-[35px] relative text-29xl font-extrabold inline-block shrink-0 z-[1] ml-[-8px]">
            +
          </div>
        </div>
      </div>
    </div>
    <img
      className="self-stretch h-[8.1px] relative max-w-full overflow-hidden shrink-0 object-contain"
      loading="eager"
      alt=""
      src="/line-1.svg"
    />
  </header>
)
}