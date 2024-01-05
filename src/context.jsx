import { createContext } from "react";
import { useState } from "react";
import FetchDataFromApi from "./Api/fetchDataFromApi";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [search, setSearch] = useState("London");
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectOption, setSelectOption] = useState("Weather");
  const [mode, setMode] = useState("Dark");

  async function searchHandler() {

    if (search !== "") {
      setLoading(true);
      const res = await FetchDataFromApi(search);

      if (res === "error") {
        setError(true);
        setData([]);
      } else {
        setError(false);
        setData(res);
      }
      setLoading(false);
    } else {
      console.log("Khaili hai");
    }
  }

  console.log(data);

  return (
    <Context.Provider
      value={{
        setSearch,
        search,
        error,
        setError,
        mode,
        setMode,
        data,
        setData,
        loading,
        setLoading,
        searchHandler,
        selectOption,
        setSelectOption,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
