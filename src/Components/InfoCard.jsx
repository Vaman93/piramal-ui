import React from "react";
import FirstCardFrontImg from "../img/Rectangle 124.jpg";
import FirstCardBackImg from "../img/Untitled-12.jpg";

import SecondCardFrontImg from "../img/Rectangle 124.jpg";
import SecondCardBackImg from "../img/Rectangle 71.jpg";

export default function InfoCard() {
  return (
    <div className="  py-32 pb-[16rem]">
      <div className=" w-4/5 m-auto flex items-center justify-center relative h-[22rem] ">
        <div className="w-2/4  ">
          <img src={FirstCardBackImg} className="FristCardbackImg" alt="" />
          <img src={FirstCardFrontImg} className="FristCardFrontImg" alt="" />
        </div>
        <div className="cardText w-2/5 ">
          <p className="title">MUMBAI</p>
          <p className="heading">OUR APARTMENTS </p>
          <p className="info">
            Presenting Piramal Aranya, a high rise gated sanctuary that offers
            luxuriant 2, 3 & 4 BHK homes inclusive of advanced wellness
            technologies, dual-aspect blue and green views and a world-class
            lifestyle crafted alongside the world’s leading partners at Rani
            Baug, Byculla, South Mumbai.
          </p>
        </div>
      </div>
      <br />

      <div className="w-4/5 m-auto flex items-center  relative h-[22rem] mt-32 infoCard2">
        <div className="cardText">
          <p className="title">2 BED EXCLUSIVE RESIDENCES</p>
          <p className="heading">2BHK - EAST WING</p>
          <p className="info">
            <ul>
              <li> • All bedrooms with en-suite bathrooms </li>
              <li> • Apartments with harbour views </li>
              <li>
                • Master bedroom with corner windows offering panoramic views
              </li>
              <li> • All shafts on the external face </li>
              <li> • Kitchen with dry balcony </li>
              <li>
                • Ease of combining apartments to create exclusive wing
                apartment with expansive living & dining area
              </li>
            </ul>
          </p>
        </div>

        <div className="imgCrad pl-[5%] ">
          <img src={SecondCardBackImg} className="SecondCardbackImg" alt="" />
          <img src={SecondCardFrontImg} className="SecondCardFrontImg" alt="" />
        </div>
      </div>
    </div>
  );
}
