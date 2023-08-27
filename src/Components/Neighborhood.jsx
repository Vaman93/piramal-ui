import React from "react";

export default function Neighborhood() {
  return (
    <>
      <div className="w-[90%] m-auto py-36">
        <p className="text-left text-white text-5xl leading-[3.5rem]">
          SPECTACULAR <br /> SURROUNDINGS <br /> AS FAR AS THE EYE CAN SEE
        </p>
        <p className="w-[40%] text-lightGray my-4 tracking-wider text-base">
          Piramal Aranya is an ode to perfection. It balances contemporary
          design with the scenic natural beauty of its environment. Every
          residence invites you to soak in the surroundings, from the endless
          greenery of Rani Baug on the western side and the shimmering Arabian
          Sea on the east. Avyan at Piramal Aranya will be home to something
          truly spectacular with premium dual aspect living
        </p>

        <div className="text-center my-32 pt-16 border-t border-lightGray">
          <p className="text-lightGreen text-[1rem]">LOCATION</p>
          <p className="text-5xl mt-4 text-white">NEIGHBORHOOD</p>
        </div>

        <div
          className="grid justify-between w-full gap-y-10"
          style={{
            gridTemplateColumns: "68% 30%",
          }}
        >
          <div className=" flex items-center gap-6">
            <p className="border-[3px] text-[2rem] border-lightGreen flex justify-center items-end w-8 h-9 text-lightGreen rounded-full">
              .
            </p>
            <div>
              <p className="text-3xl text-white">Bhau Daji Lad Museum</p>
              <p className="text-lightWhite text-[0.9rem]">3.5 Km Away</p>
            </div>
          </div>

          <div className=" flex items-center gap-6">
            <p className=" text-[2rem]  flex justify-center items-end w-8 h-9 text-lightGreen rounded-full">
              .
            </p>
            <div>
              <p className="text-3xl text-white">St. Paul’s Tamil Church</p>
              <p className="text-lightWhite text-[0.9rem]">3.5 Km Away</p>
            </div>
          </div>

          <div className=" flex items-center gap-6">
            <p className=" text-[2rem]  flex justify-center items-end w-8 h-9 text-lightGreen rounded-full">
              .
            </p>
            <div>
              <p className="text-3xl text-white">Magen David Synagogue</p>
              <p className="text-lightWhite text-[0.9rem]">3.5 Km Away</p>
            </div>
          </div>

          <div className=" flex items-center gap-6">
            <p className=" text-[2rem]  flex justify-center items-end w-8 h-9 text-lightGreen rounded-full">
              .
            </p>
            <div>
              <p className="text-3xl text-white">Byculla Club − Fire Temple</p>
              <p className="text-lightWhite text-[0.9rem]">3.5 Km Away</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
