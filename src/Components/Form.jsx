import React, { useState } from "react";
import Loader from "../common/Loader";

export default function Form({ handleOnSubmit, loader, initialValues }) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (error?.[name]?.length > 0) {
      setError({});
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (loader) {
    } else {
      if (values?.mobile?.length !== 10) {
        setError({
          mobile: "Invalid mobile",
        });
      } else {
        handleOnSubmit(values, setValues);
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="off">
        <Input
          type={"text"}
          handleInputChange={handleInputChange}
          name="name"
          placeholder={"Full Name"}
          iconName={"person"}
          values={values}
        />
        <br />
        <Input
          type={"number"}
          handleInputChange={handleInputChange}
          name="mobile"
          error={error}
          placeholder={"Contact number"}
          iconName={"smartphone"}
          values={values}
        />
        <br />

        <Input
          type={"email"}
          handleInputChange={handleInputChange}
          name="email"
          placeholder={"Email"}
          iconName={"mail"}
          values={values}
        />
        <div className="text-center mt-9">
          <button
            className={`m-auto py-3 px-8 bg-lightGreen text-white font-semibold rounded-sm ${
              loader ? "cursor-not-allowed" : "cursor-pointer"
            } `}
          >
            {loader ? <Loader /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

const Input = ({
  type,
  name,
  placeholder,
  iconName,
  values,
  handleInputChange,
  error,
}) => {
  return (
    <>
      <div className="border flex  items-center pl-2 rounded-md">
        <p className="material-icons text-lightGreen">{iconName}</p>
        <input
          type={type}
          name={name}
          value={values[name]}
          placeholder={placeholder}
          onChange={handleInputChange}
          className="w-full focus:ring-0 p-3 bg-transparent text-white"
          required
          autoComplete="off"
        />
      </div>
      {error?.[name] && <p className="text-red-600">{error[name]}</p>}
    </>
  );
};
