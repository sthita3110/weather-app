import { useState } from "react";
import { getWeatherDetails } from "../../Shared/Api/weatherApi";
// import Button from "../../Shared/Button";
// import Input from "../../Shared/Input";
import Loader from "../../Shared/Loader";
import WeatherBox from "./WeatherBox";
import WeatherCurrentDetails from "./WeatherCurrentDetails";
import WeatherTemp from "./WeatherTemp";
import WeatherSearch from "./WeatherSearch";

const Weather = () => {
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [time, setTime] = useState("");
  const [country, setCountry] = useState("");
  const [cityname, setCityName] = useState("");
  const [checkTempDegree, setCheckTempDegree] = useState("c");
  const [toggleClass, setToggleClass] = useState("c");
  const [loader, setLoader] = useState(true);
  const [weatherDetails, setWeatherDetails] = useState({
    current: {
      condition: {},
    },
    location: {},
  });

  const cityNameHandler = (event) => {
    setCityName(event.target.value);
  };
  const toggleClassHandler = (temp) => {
    setCheckTempDegree(temp);
    if (temp === "c") {
      setToggleClass("c");
    } else {
      setToggleClass("f");
    }
  };

  const getCurrentWeatherHandler = async () => {
    setLoader(true);
    const weatherDetails = await getWeatherDetails(cityname);
    const weatherData = (await weatherDetails.data) || {};
    setWeatherDetails({ ...weatherData });
    setLoader(false);
  };

  return (
    <>
      <div className="bg-background bg-no-repeat bg-center bg-cover h-44rem pt-11">
        {/* toggle between temp */}
        {!loader && (
          <WeatherTemp
            toggleClass={toggleClass}
            toggleClassHandler={toggleClassHandler}
          />
        )}
        {/* search city input */}
        <WeatherSearch
          cityNameHandler={cityNameHandler}
          getCurrentWeatherHandler={getCurrentWeatherHandler}
        />
        {/* weather details box */}
        {!loader && <WeatherBox location={weatherDetails.location} />}
        {/* weather details box */}
        {!loader && (
          <WeatherCurrentDetails
            current={weatherDetails.current}
            checkTemp={checkTempDegree}
          />
        )}
        {loader && (
          <div className="text-center text-xl font-mono font-semibold mt-1rem">
            How's the Weather ? What's its like to be out there?
          </div>
        )}
        {loader && (
          <div className="flex justify-center items-center my-5rem">
            <Loader loaderType={"progress"} />
          </div>
        )}
      </div>
    </>
  );
};
export default Weather;
