import React, { useLayoutEffect, useRef } from "react";
import Header from "./Header";
import CircleType from "circletype";

export default function HeroSection() {
  const circleInstance = useRef();

  useLayoutEffect(() => {
    new CircleType(circleInstance.current).radius(80);
  }, [circleInstance]);

  return (
    <div className="heroSection">
      <Header />

      <div class=" text-center mt-[16%]">
        <button className="w-[15.063rem] h-[3.5rem] border border-white rounded-lg text-white">
          Mumbai
        </button>

        <div>
          <p className="text-9xl font-medium leading-[112px] -tracking-normal text-center mt-[12%] text-white ">
            PROJECT <br />
            ARANYA
          </p>

          <span className="text-3xl font-light leading-[41px]  -tracking-normal text-center text-lightGreen">
            pirimal groups
          </span>
        </div>
      </div>

      <div className="mt-11 relative h-24 ">
        <div ref={circleInstance} className="text-white absolute left-[50%]">
          DISCOVER OUR PROJCET
        </div>
        <p class="material-icons absolute left-[48%] top-[38%] flex items-center text-6xl text-white">
          south
        </p>
      </div>
    </div>
  );
}
