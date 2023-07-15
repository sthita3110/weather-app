import React from "react";
import { CiTempHigh } from "react-icons/ci";
const WeatherTemp = ({ toggleClass, toggleClassHandler }) => {
  return (
    <>
      <div
        className="flex justify-end items-center
      md:w-100%
      md:mx-10
      md:px-10
       lg:w-100%
       lg:px-5
       lg:py-5
       "
      >
        <div className="text-3xl">
          <CiTempHigh />
        </div>
        <button
          className={`${
            toggleClass === "c"
              ? "btn btn-success mx-2 text-white rounded-none"
              : "btn"
          }`}
          onClick={() => toggleClassHandler("c")}
        >
          &deg; C
        </button>
        <button
          className={`${
            toggleClass === "f"
              ? "btn btn-error mx-2 text-white rounded-none"
              : "btn"
          }`}
          onClick={() => toggleClassHandler("f")}
        >
          &deg; F
        </button>
      </div>
    </>
  );
};

export default WeatherTemp;
