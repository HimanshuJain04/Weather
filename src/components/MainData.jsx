import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { FaWind, FaSun } from "react-icons/fa6";
import { useContext } from "react";
import { Context } from "../context";

function MainData() {
  const { setSearch, searchHandler, data, mode } = useContext(Context);

  const currData = data[0]?.data;
  const intervalData = data[1]?.data?.forecast?.forecastday[0]?.hour.filter(
    (item, index) => index >= 6 && index <= 21 && index % 3 == 0
  );

  window.addEventListener("keypress", ({ key }) => {
    if (key === "Enter") {
      searchHandler();
    }
  });

  return (
    <div className="flex flex-col gap-5">
      {/* Searching-Bar */}
      <div
        className={
          ` w-[700px]  rounded-xl relative flex items-center justify-center` +
          (mode === "Light"
            ? " bg-white border-2 border-[skyblue]"
            : " bg-[#2D3136]")
        }
      >
        <input
          className={
            `px-3 w-full py-2 rounded-xl bg-transparent  placeholder:text-sm placeholder:font-semibold` +
            (mode === "Light" ? " outline-none text-black" : "")
          }
          type="text"
          placeholder="Search for cities"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
        <HiMagnifyingGlass
          onClick={searchHandler}
          className={
            `text-2xl absolute right-2 cursor-pointer` +
            (mode === "Light" ? "text-[black]" : " text-[white]/[0.5]")
          }
        ></HiMagnifyingGlass>
      </div>

      {/* Temperature Result */}
      <section className="flex justify-between px-10 mt-5">
        {/* Left section */}
        <div className="flex flex-col gap-1">
          <p className="text-3xl font-bold">{currData?.location?.name} </p>
          <p className="text-[#79808B] text-sm">{currData?.location?.region}</p>
          <p className="text-[#79808B] text-sm">
            {currData?.location?.country}
          </p>
          <p className="font-bold font-sans text-5xl mt-7">
            {currData?.current?.temp_c}
            <sup>o</sup>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={currData?.current?.condition?.icon} className="h-[150px]" />
          <p>{currData?.current?.condition?.text}</p>
        </div>
      </section>

      {/* Forecast about time slots */}
      <section
        className={
          `bg-[#202B3B] p-5 rounded-2xl my-1` +
          (mode === "Light" ? " bg-white" : " bg-[#2A2E32]")
        }
      >
        <p className="text-[white]/[0.8] font-bold text-xs">TODAY'S FORECAST</p>
        <div className="flex gap-10 mt-5 w-fullmx-auto">
          {intervalData?.map((item, index) => (
            <div
              key={index}
              className="px-[5px]  flex flex-col items-center justify-center"
            >
              <p
                className={
                  `text-[#838993] font-bold text-sm` +
                  (mode === "Light" ? " bg-white" : " bg-[#2A2E32]")
                }
              >
                {item?.time?.substring(11, 13) > 12
                  ? item?.time?.substring(11, 13) - 12 + ":00 PM"
                  : (item?.time?.substring(11, 13) > 9
                    ? item?.time?.substring(11)
                    : item?.time?.substring(12)) + " AM"}
              </p>
              <img src={item?.condition?.icon} className="h-[60px]" />
              <p className="font-bold text-lg">
                {item?.temp_c}
                <sup>o</sup>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Air Condition Result */}
      <section
        className={
          `bg-[#202B3B] py-5 px-7 rounded-2xl flex flex-col` +
          (mode === "Light" ? " bg-white" : " bg-[#2A2E32]")
        }
      >
        <div className="flex justify-between items-center text-xs">
          <p className="text-[white]/[0.8] font-bold">AIR CONDITIONS</p>
          <p className="rounded-full bg-[#0095FF] hover:bg-[red] font-bold transition-all ease-in-out duration-500 py-[2px] cursor-pointer px-3">
            See More
          </p>
        </div>

        {/* grid create krke */}
        <div className="grid grid-cols-2 justify-between gap-5 mt-3">
          <div>
            <span className="text-[#838993] font-semibold flex gap-2 items-center">
              <FaTemperatureThreeQuarters className="text-2xl"></FaTemperatureThreeQuarters>
              <p>Real Feel</p>
            </span>
            <span className="font-bold text-3xl text-[white]/[0.9]">
              {currData?.current?.feelslike_c} <sup>o</sup>
            </span>
          </div>

          <div>
            <span className="text-[#838993] font-semibold flex gap-2 items-center ">
              <FaWind className="text-2xl"></FaWind>
              <p>Wind</p>
            </span>
            <span className="font-bold text-3xl text-[white]/[0.9]">
              {currData?.current?.wind_kph} <span>km/h</span>
            </span>
          </div>

          <div>
            <span className="text-[#838993] font-semibold flex gap-2 items-center">
              <IoIosWater className="text-2xl"></IoIosWater>
              <p>Precip</p>
            </span>
            <span className="font-bold text-3xl text-[white]/[0.9]">
              {currData?.current?.precip_mm} mm
            </span>
          </div>

          <div>
            <span className="text-[#838993] font-semibold flex gap-2 items-center">
              <FaSun className="text-2xl"></FaSun>
              <p>UV Index</p>
            </span>
            <span className="font-bold text-3xl text-[white]/[0.9]">
              {currData?.current?.uv}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainData;
