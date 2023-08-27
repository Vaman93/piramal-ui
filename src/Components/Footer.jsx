import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../img/logo.png";
export default function Footer() {
  return (
    <div
      className="py-28  text-center"
      style={{
        background: "#F3F4F9",
      }}
    >
      <p className="text-3xl text-darkBlue"> Call Us </p>

      <p class="material-icons p-5 text-4xl bg-darkBlue text-white rounded-full mt-9">
        phone_in_talk
      </p>
      <p className="text-5xl text-darkBlue mt-12 font-light">
        <span className="font-medium"> + 022 </span> 506 47538{" "}
      </p>

      <div className="flex gap-4 items-center justify-center mt-12">
        <p class="material-icons p-4 text-1xl bg-lightGreen text-white rounded-full mt-9 flex items-center ">
          <TwitterIcon />
        </p>
        <p class="material-icons p-4 text-xl bg-white text-gray-500 rounded-full mt-9 flex items-center ">
          <FacebookIcon />
        </p>
        <p class="material-icons p-4 text-xl bg-white text-gray-500 rounded-full mt-9 flex items-center ">
          <InstagramIcon />
        </p>
      </div>

      <div className="text-center mt-16">
        <img src={Logo} alt="" className="w-[10%]  m-auto" />

        <p className="mt-2"> © 2023 Piramal. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}
