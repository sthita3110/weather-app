import moment from "moment";

const WeatherCurrentDetails = ({ current, checkTemp }) => {
  return (
    <>
      <div className="bg-weather bg-no-repeat bg-center bg-cover md:mx-1rem lg:mx-5rem md:py-5 md:px-10 my-5 rounded-lg text-white">
        <div className="flex justify-around align-top">
          <div className="flex justify-center items-center flex-col-reverse">
            <p className=" font-bold font-mono text-xl">
              {current.condition.text}
            </p>
            <figure>
              <img
                height={100}
                width={100}
                src={"https:" + current.condition.icon}
                alt="weatherimage"
              />
            </figure>
          </div>
          <div className="flex-col justify-center items-center text-center text-xl">
            <p>
              Wind:{" "}
              <span className=" font-semibold ml-5px">
                {current.wind_kph} kmph
              </span>
            </p>
            <p>
              Precip:{" "}
              <span className="font-semibold ml-5px">
                {current.precip_in} in
              </span>
            </p>
            <p>
              Pressure:{" "}
              <span className="font-semibold ml-5px">
                {current.pressure_in} in
              </span>
            </p>
            <p className="text-6xl text-yellow-300 font-bold font-mono mt-5px">
              {checkTemp === "c" && <span>{current.temp_c} &deg;C</span>}{" "}
              {checkTemp === "f" && <span>{current.temp_f} &deg;F</span>}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default WeatherCurrentDetails;
