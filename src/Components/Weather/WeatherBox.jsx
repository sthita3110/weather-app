import React from "react";

const WeatherBox = ({ location }) => {
  return (
    <>
      <div
        className="flex justify-center items-center mx-30rem "
        style={{ margin: "1rem 0 1rem 0 " }}
      >
        <span
          className="font-sans text-4xl m-5 font-semibold"
          style={{ color: "#012410" }}
        >
          <span className=" text-blue-950 hover:text-blue-500 mr-10px">
            {" "}
            {location.name}{" "}
          </span>
          Weather Forecast,
        </span>
        <span className="text-gray text-2xl ml-10px ">
          {location.region}, {location.country}
        </span>
      </div>
    </>
  );
};

export default WeatherBox;
