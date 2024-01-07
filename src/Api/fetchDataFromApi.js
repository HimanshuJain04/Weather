import axios from "axios";

export default async function FetchDataFromApi(address) {

  const res = await Promise.all([
    axios.get(
      `http://api.weatherapi.com/v1/current.json?key=ffcdf6324e3143018b5172553231608&q=${address}`
    ),
    axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=ffcdf6324e3143018b5172553231608&q=${address}&days=7&aqi=no&alerts=no`
    ),
  ]).catch((error) => {
    console.log("Error when Api Calling in fetch api");
    console.log(error);
    return error;
  })

  return res;
}
