import React from "react";

export default function Services() {
  return (
    <div className="py-28">
      <div className="text-center">
        <p className="text-lightGreen text-[1rem]">ARANYA’S SERVICES</p>
        <p className="text-5xl mt-4">30+ PREMIUM AMENTIES</p>
      </div>

      <div
        class=" bg-white rounded-lg py-3 px-6 grid justify-end ml-20 gap-8 mt-24 gap-y-12"
        style={{
          gridTemplateColumns: "30% 30% 30%",
        }}
      >
        <IconComponent />
      </div>
    </div>
  );
}

const iconsArray = [
  {
    iconsName: "phone_in_talk",
    subHeader: "6 area for receptionist serve 24/7",
    heading: "RECEPTION",
  },
  {
    iconsName: "verified_user",
    subHeader: "Security team with 24/7 camera system",
    heading: "SECURITY",
  },
  {
    iconsName: "notifications_active",
    subHeader: "Automatic fire extinguishing system",
    heading: "FIRE ALARM",
  },
  {
    iconsName: "directions_car",
    subHeader: "Parking area with extra capacity",
    heading: "PARKING",
  },
  {
    iconsName: "diversity_2",
    subHeader: "5 conference room setup in each block",
    heading: "CONFERENCE ROOM",
  },
  {
    iconsName: "heat_pump",
    subHeader: "ensure ventilation and air conditioning",
    heading: "CONDITIONING",
  },
  {
    iconsName: "shopping_cart",
    subHeader: "5 supermarket in each block",
    heading: "SUPERMARKET",
  },
  {
    iconsName: "self_improvement",
    subHeader: "Spa and Massage service for better health",
    heading: "SPA AND MASSAGE",
  },
  {
    iconsName: "pool",
    subHeader: "5 star indoor swimming 4 seasons",
    heading: "4 SEASON POOL",
  },
];

const IconComponent = () => {
  return (
    <>
      {iconsArray?.map((item) => {
        return (
          <div className="iconComponent flex items-center gap-4 w-full justify-start rounded-full">
            <p
              className="material-icons "
              style={{
                fontSize: "2rem",
                padding: "0.8rem",
                borderRadius: "100% ",
              }}
            >
              {item?.iconsName}
            </p>
            <div>
              <p className="iconHeading">{item?.heading}</p>
              <p className="subHeaderIcon">{item?.subHeader}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
