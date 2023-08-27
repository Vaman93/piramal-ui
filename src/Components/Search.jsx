import React from "react";

export default function Search() {
  return (
    <>
      <div className="py-8 w-4/5 m-auto">
        <p className=" text-2xl font-light leading-[35px] -tracking-normal  text-left text-white ">
          Search your configuration
        </p>

        <div
          className=" bg-white rounded-lg py-3 px-6 grid mt-4 gap-8"
          style={{
            gridTemplateColumns: "28% 28% 28% 5%",
          }}
        >
          <div className="iconComponent flex items-center gap-4 border-r-2 border-lightWhite  ">
            <p className="material-icons">location_on</p>
            <div>
              <p className="subHeaderIcon">Location</p>
              <p className="iconHeading"> South mumbai</p>
            </div>
          </div>
          <div className="iconComponent border-r-2 border-lightWhite  ">
            <p className="material-icons">home</p>
            <div>
              <p className="subHeaderIcon">Property Type</p>
              <p className="iconHeading">2 BHK</p>
            </div>
          </div>
          <div className="iconComponent">
            <p className="material-icons">currency_rupee</p>
            <div>
              <p className="subHeaderIcon">Budget</p>
              <p className="iconHeading">90 L - 1.5 Cr</p>
            </div>
          </div>

          <div className="searchicon">
            <p className="material-icons text-white">search</p>
          </div>
        </div>
      </div>
    </>
  );
}
