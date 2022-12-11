import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BiWind } from "react-icons/bi";

//Weather component
const Weather = (props) => {

  //weather icon link
  const imgLink = `http://openweathermap.org/img/w/${props.icon}.png`;

  // forecast data
  const res = props.forCast.map((item) => {
    return (
      <div className=" bg-slate-100 h-44 w-36 flex justify-center py-3 ">
        <div className="bg-slate-100 w-32 h-36 ml-1 border-4">
          <div className="flex justify-between">
            <p className="text-[10px]">Time:</p>
            <p className="text-[10px]">{item.time.substring(11, 16)}</p>
          </div>
          <div className="text-center flex-col justify-center">
            <h5 className="mb-0">{item.temp}°C</h5>
            <img className="inline-block  h-[32px]" src={`http://openweathermap.org/img/w/${item.icon}.png`} alt="weather_icon"></img>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-extrabold mb-1">{item.description}</p>
          </div>
          <div className="flex justify-around my-0">
            <div className=" h-6">
              <p className="text-[7px]  mb-0 pl-0.5">min Temp</p>
              <p className="text-[10px] ">{item.min}°C</p>
            </div>
            <div>
              <p className="text-[7px]  mb-0 pl-0.5">max Temp</p>
              <p className="text-[10px]">{item.max}°C</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <div className="card border-secondary mb-1">
          <div className="flex items-center justify-center bg-black pt-2 h-16">
            <h2 className=" text-3xl ">{props.city}</h2>
          </div>
          <div className="card-body flex">
            <img src={imgLink} alt="weather_icon"></img> <h4 className="pt-3">{props.cloud}</h4>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="text-center flex-col justify-center">
                <div className="card-title">
                  Humidity(%):
                  <div className="flex justify-around">
                    <WiHumidity className="h-6" /> {props.humidity}{" "}
                  </div>
                </div>
                <div className="card-title">
                  Wind speed:
                  <div className="flex justify-around">
                    <BiWind className="h-6" /> {props.windspeed}{" "}
                  </div>
                </div>
              </div>
              <div >
                <div className="flex">
                  <h6 className="card-title">Temperature :</h6>
                  <span>
                    <FaTemperatureHigh />
                  </span>
                </div>
                <span className="display-3 sm:text-xs">{props.temp}℃</span>
              </div>
            </div>
            <div className="d-flex justify-between">
              <p className="card-text ">Feels Like {props.feels_like} ℃</p>
              <img src={imgLink} alt="weather_icon"></img>
            </div>
          </div>
        </div>
      </div>
      {/* forecast */}
      <div className="container ml-20">
        <div className="flex items-center justify-center bg-black pt-2 h-16">
          <h2 className=" text-3xl text-gray-600 ">Forecast</h2>
        </div>
        <div className="container  flex justify-between  bg-gray-100 overflow-x-scroll pl-20">
          {res}
        </div>
      </div>
    </>
  );
};

export default Weather;
