import React from "react";

export default function Count() {
  return (
    <>
      <div className="pb-40 pt-20 border-t-2 border-lightWhite flex w-4/5 m-auto justify-between items-center">
        <div>
          <p className=" text-[3.5rem] text-lightGreen">60+</p>
          <p className="text-white text-[0.6rem] -mt-2">AMENITIES</p>
        </div>

        <div>
          <p className=" text-[3.5rem] text-lightGreen">250</p>
          <p className="text-white text-[0.6rem] -mt-2">APARTMENTS</p>
        </div>
        <div>
          <p className=" text-[3.5rem] text-lightGreen">9,290 </p>
          <p className="text-white text-[0.6rem] -mt-2">RECEREATIONAL SPACE</p>
        </div>

        <div>
          <p className=" text-[3.5rem] text-lightGreen">1,200</p>
          <p className="text-white text-[0.6rem] -mt-2">SLOT CAR PARKING</p>
        </div>
      </div>
    </>
  );
}
