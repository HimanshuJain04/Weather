import React, { useState } from "react";
import { Context } from "../context";
import { useContext } from "react";

function SettingPage() {
  const { mode, setMode } = useContext(Context);

  function modeHandler() {
    if (mode === "Light") {
      setMode("Dark");
    } else {
      setMode("Light");
    }
  }

  return (
    <div className="mt-10 flex flex-col gap-10 justify-start  w-[1100px] h-[650px] ">
      <p className=" text-center text-3xl font-semibold text-[white]/[0.8]">
        Settings
      </p>
      <div className="flex flex-col justify-start items-start p-10">

        <div className={'flex justify-center items-center gap-10 rounded-full py-5 px-10 '+ (mode === "Light" ? " bg-white " : " bg-[#2A2E32]")}>
          <p className="font-bold text-xl">LIGHT/DARK THEME</p>
         {/* Toggle Button */}
          <div className=" w-[300px] h-[100px] flex justify-center items-center">
            <div className="bg-[black]/[0.2] relative w-[200px] h-[50px] rounded-3xl ">
              <div
                onClick={modeHandler}
                className={
                  `absolute text-black cursor-pointer ease-in transition-all duration-500 flex justify-center h-[50px] w-[130px] items-center rounded-3xl shadow-2xl ` +
                  (mode === "Light" ? " bg-[white] left-[0%]" : " bg-[#34323D] left-[35%]")
                }
              >
                <p className={`font-semibold`+(mode === "Light" ? " text-black " : " text-white")}>
                  {mode === "Light" ? "Light" : "Dark "}
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default SettingPage;
