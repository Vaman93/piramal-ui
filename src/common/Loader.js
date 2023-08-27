import React from "react";

const Loader = () => {
  const loaderStyle = {
    borderRadius: "50%",
    borderTop: "3px solid white",
    width: "25px",
    height: "25px",
    animation: "spin 1s linear infinite",
  };

  return (
    <center>
      <div className="loader" style={loaderStyle}></div>
    </center>
  );
};

export default Loader;
