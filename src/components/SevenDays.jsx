import React from "react";
import { useContext } from "react";
import { Context } from "../context";

function SevenDays() {
  const { data, mode } = useContext(Context);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const result = data[1]?.data?.forecast?.forecastday;
  console.log(data);

  return (
    <div
      className={
        ` rounded-2xl p-8 flex flex-col text-sm text-[white]/[0.4] h-full w-[300px] mt-14 font-semibold` +
        (mode === "Light" ? " bg-white" : " bg-[#202B3B]")
      }
    >
      <p className="text-[white]/[0.8] font-bold">
        {`${result?.length}`}-DAYS FORECAST
      </p>

      <div className="mt-3"></div>
      {result?.map((item, index) => (
        <div
          key={index}
          className="border-b-2 flex items-center py-3 gap-3 justify-between border-[white]/[0.1]"
        >
          <p>
            {index === 0 ? (
              <>Today</>
            ) : (
              weekday[
              new Date(
                `${item?.date?.substring(5, 7)}/
                    ${item?.date?.substring(8)}/
                    ${item?.date?.substring(0, 4)}`
              ).getDay()
              ]
            )}
          </p>
          <img src={item?.day?.condition?.icon} className="h-[50px]" />
          <p>{item?.day?.condition?.text}</p>
          <p>
            {item?.day?.maxtemp_c}
            <sup> o</sup>C
          </p>
        </div>
      ))}
    </div>
  );
}

export default SevenDays;
