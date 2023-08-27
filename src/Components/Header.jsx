import React from "react";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <div className="flex items-center justify-between text-white py-4 px-20">
      <div className=" flex items-center ">
        <img src={logo} alt="Logo" className="w-16 h-16 mr-2 " />
        <span className=" text-4xl leading-6 font-medium ">
          Piramal
          <span className="text=[0.9rem] font-medium">
            <br /> aranya
          </span>
        </span>
      </div>
      <div
        className="flex  text-center justify-center text-sm  gap-7 "
        style={{
          flex: 1,
        }}
      >
        <p>HOME</p>
        <p>OVERVIEW</p>
        <p>AMENITIES</p>
        <p>GALLERY</p>
        <p>CONTACT</p>
      </div>
      <button className="enquireButton">ENQUIRE NOW</button>
    </div>
  );
}
