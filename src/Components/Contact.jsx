import React, { useState } from "react";
import Form from "./Form";
import Map from "../img/image 4.jpg";
import axios from "axios";
import { toast } from "react-hot-toast";

const callApi = async (url, values) => {
  let flag = "";
  await axios
    .post(url, {
      name: values.name,
      email: values.email,
      mobile: values.mobile,
    })
    .then(function (response) {
      flag = { success: "Thanks for filling out our form!" };
    })
    .catch(function (error) {
      flag = { error: "Oops Something went wrong" };
    });

  return flag;
};

const initialValues = {
  name: "",
  mobile: "",
  email: "",
};

export default function Contact() {
  const [loader, setLoader] = useState(false);

  const handleOnSubmit = async (values, setValues) => {
    setLoader(true);

    await callApi(
      "https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-930072581261/insertLead",
      values
    ).then(async () => {
      await callApi("https://sheetdb.io/api/v1/qhf7jgmrmn6qs", values)
        .then((resp) => {
          if (resp?.success?.length > 0) {
            toast.success(resp?.success);
          } else {
            toast.error("Oops Something went wrong");
          }
          setValues(initialValues);
          setLoader(false);
        })
        .catch(() => {
          toast.error("Oops Something went wrong");
          setValues(initialValues);
          setLoader(false);
        });
    });
  };

  return (
    <>
      <div className="pt-16 relative bg-darkBlue">
        <div className="pl-28 bg-darkBlue">
          <div
            className="flex align-middle w-full relative  "
            style={{
              zIndex: "2",
            }}
          >
            <div className="py-24 w-2/5 bg-darkBlue contactCard">
              <div className="mb-32">
                <p className="text-4xl text-white">CONTACT US</p>
                <p className="text-lightWhite text-[0.9rem] mt-4 ">
                  Please enter details below and we shall get in <br /> touch
                  with you shortly
                </p>
              </div>
              <Form
                handleOnSubmit={handleOnSubmit}
                loader={loader}
                initialValues={initialValues}
              />
            </div>

            <img
              src={Map}
              className="absolute w-[40%] right-0 bottom-0"
              alt=""
              style={{
                width: " 64%",
                zIndex: "-1",
              }}
            />

            <div className="mapImg"></div>
          </div>
        </div>
      </div>
    </>
  );
}
