import MainData from "./components/MainData";
import SideBar from "./components/SideBar";
import { useEffect, useState, useContext } from "react";
import { Context } from "./context";
import FetchDataFromApi from "./Api/fetchDataFromApi";

function App() {
  const { searchHandler } = useContext(Context);

  // function getCurrentLocation() {
  //   navigator.geolocation.getCurrentPosition(
  //     (pos) => {
  //       console.log("Current Position :  ", pos);
  //       FetchDataFromApi("delhi");
  //     },
  //     (error) => {
  //       console.log("Current Position Issue : ", error);
  //     }
  //   );
  // }


  useEffect(() => {
    searchHandler("Delhi");
    // getCurrentLocation();
  }, []);



  return (
    <div
      className={
        `flex  bg-[#505864]  justify-center items-center h-screen w-full`
        // + (mode === "Light" ? " bg-[#DFEFFF] " : " bg-[#3D434B]")
      }
    >

      <div className="flex justify-between items-start gap-5 bg-[#0B131E] p-8 rounded-2xl w-[80vw]">

        <div>
          <SideBar />
        </div>

        <div>
          <MainData />
        </div>

      </div>

    </div >
  );
}

export default App;
