import HomePage from "./Pages/HomePage";
import CitiesPage from "./Pages/CitiesPage";
import SideBar from "./components/SideBar";
import MapPage from "./Pages/MapPage";
import SettingPage from "./Pages/SettingPage";
import { useContext, useEffect } from "react";
import { Context } from "./context";
import ErrorPage from "./components/ErrorPage";
import Loading from "./components/Loading";
import { Route, Routes } from "react-router-dom";

function App() {
  const { error, loading, searchHandler, setLoading, mode } =
    useContext(Context);

  function getCurrentLocation() {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log("Current Position :  ", pos);
      },
      (error) => {
        console.log("Current Position Issue : ", error);
      }
    );
    setLoading(false);
  }

  useEffect(() => {
    searchHandler();
    getCurrentLocation();
  }, []);

  if(loading){
    console.log("Loading..");
  }

  return (
    <div
      className={
        `bg-[#555D69] flex justify-center items-center h-screen w-full` +
        (mode === "Light" ? " bg-[#DFEFFF] " : " bg-[#3D434B]")
      }
    >
      <div
        className={
          `flex gap-5  p-5 rounded-2xl text-white ` +
          (mode === "Light" ? " bg-[#F5F6FD]" : " bg-[#212529]")
        }
      >
        <>
          <div className="flex gap-5">
            <SideBar></SideBar>
            <>
              <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route
                  path="/setting"
                  element={<SettingPage></SettingPage>}
                ></Route>
                <Route path="/map" element={<MapPage></MapPage>}></Route>
                <Route
                  path="cities"
                  element={<CitiesPage></CitiesPage>}
                ></Route>
              </Routes>
            </>
          </div>
        </>
      </div>
    </div>
  );
}

export default App;
