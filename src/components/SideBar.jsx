import React from "react";
import { FaCloudSunRain, FaCity } from "react-icons/fa";
import { BsFillMapFill } from "react-icons/bs";
import { RiListSettingsLine } from "react-icons/ri";
import { BiWind } from "react-icons/bi";
import { useContext } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";

function SideBar() {
  const { setSelectOption, selectOption, mode } = useContext(Context);

  return (
    <div
      className={
        `flex flex-col justify-start rounded-2xl py-5 px-3 items-center ` +
        (mode === "Light" ? " bg-white" : " bg-[#2A2E32]")
      }
    >
      {/*Wind LOGO */}
      <div className="p-1 bg-[#35455E] rounded-xl text-4xl text-[#6793CC] shadow-lg">
        <BiWind></BiWind>
      </div>

      {/* Options */}
      <div
        className={
          `flex flex-col  text-sm gap-10 items-center font-bold mt-20` +
          (mode === "Light" ? " text-[black]/[0.4] " : " text-[white]/[0.4]")
        }
      >
        <Link
          to="/"
          onClick={() => {
            setSelectOption("Weather");
          }}
          className={
            `flex gap-1 flex-col items-center cursor-pointer transition-all duration-200 ease-in` +
            (mode === "Light"
              ? " hover:text-[#4D5BE4]"
              : " hover:text-[white]") + (selectOption === "Weather" ? (mode === "light"? " text-[#4D5BE4]"
                : " text-white")
              : "")
          }
        >
          <FaCloudSunRain
            className={
              ` text-2xl` + (mode === "Light" ? " text-[#30377B] " : "")
            }
          ></FaCloudSunRain>

          <p>Weather</p>

        </Link>

        <Link
          to="/cities"
          onClick={() => {
            setSelectOption("Cities");
          }}
          className={
            `flex gap-1 flex-col items-center cursor-pointer  hover:text-[white] transition-all duration-200 ease-in` +
            (mode === "Light"
              ? " hover:text-[#4D5BE4]"
              : " hover:text-[white]") +
            (selectOption === "Cities" ? " text-white " : "")
          }
        >
          <FaCity
            className={
              ` text-2xl` + (mode === "Light" ? " text-[#30377B]" : "")
            }
          ></FaCity>
          <p>Cities</p>
        </Link>

        <Link
          to="/map"
          onClick={() => {
            setSelectOption("Map");
          }}
          className={
            `flex gap-1 flex-col items-center cursor-pointer  hover:text-[white] transition-all duration-200 ease-in` +
            (mode === "Light"
              ? " hover:text-[#4D5BE4]"
              : " hover:text-[white]") +
            (selectOption === "Map" ? " text-white " : "")
          }
        >
          <BsFillMapFill
            className={
              ` text-2xl` + (mode === "Light" ? " text-[#30377B]" : "")
            }
          ></BsFillMapFill>
          <p>Map</p>
        </Link>

        <Link
          to="setting"
          onClick={() => {
            setSelectOption("Setting");
          }}
          className={
            `flex gap-1 flex-col items-center cursor-pointer  hover:text-[white] transition-all duration-200 ease-in` +
            (mode === "Light"
              ? " hover:text-[#4D5BE4]"
              : " hover:text-[white]") +
            (selectOption === "Setting" ? " text-white " : "")
          }
        >
          <RiListSettingsLine
            className={`text-2xl` + (mode === "Light" ? " text-[#30377B]" : "")}
          ></RiListSettingsLine>
          <p>Setting</p>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
