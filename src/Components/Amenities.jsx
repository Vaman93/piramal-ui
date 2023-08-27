import React from "react";
import Card1 from "../img/Rectangle 72.jpg";
import Card2 from "../img/Rectangle 73.jpg";
import Card3 from "../img/Rectangle 74.jpg";
import Card4 from "../img/Rectangle 75.jpg";

const cardArray = [
  {
    title: (
      <>
        TOP CLASS <br /> CLUB & FACILITIES{" "}
      </>
    ),
    img: Card1,
    description:
      "With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.",
    style: {},
  },

  {
    title: (
      <>
        Tower Exclusive
        <br />
        Amenities & Facilities
      </>
    ),
    img: Card2,
    style: { top: "13%", left: "28%" },

    description:
      "With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.",
  },

  {
    title: (
      <>
        Recreational <br />
        Amenities & Facilities
      </>
    ),
    img: Card3,
    style: { top: "2%", left: "54%" },

    description:
      "With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.",
  },

  {
    title: (
      <>
        Multipurpose <br />
        Games Room
      </>
    ),
    img: Card4,
    style: { top: "23%", left: "80%" },

    description:
      "With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.",
  },
];

export default function Amenities() {
  return (
    <div className="py-28">
      <div className="text-center">
        <p className="text-lightGreen text-[1rem]">THE ADVANTAGES</p>
        <p className="text-5xl mt-4">AMENITIES</p>
      </div>

      <div className="flex w-[90%] m-auto mt-16 gap-9 relative h-[100vh]">
        {cardArray.map((item, index) => {
          return (
            <Card
              number={index + 1}
              title={item?.title}
              img={item?.img}
              description={item?.description}
              style={item?.style}
            />
          );
        })}
      </div>
    </div>
  );
}

const Card = ({ title, img, description, number, style }) => {
  return (
    <>
      <div className="border-l absolute w-[23%] border-lightGray" style={style}>
        <div className="pl-6">
          <p className="text-lightGreen text-xl">{number}</p>

          <p className="mt-12 text-xl font-bold">{title}</p>

          <img src={img} className="w-56 h-56 my-12" alt="" />

          <p className="font-normal text-xs leading-5 ">{description}</p>
        </div>
      </div>
    </>
  );
};
