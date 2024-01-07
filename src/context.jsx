import { createContext } from "react";
import { useState } from "react";
import FetchDataFromApi from "./Api/fetchDataFromApi";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectOption, setSelectOption] = useState("Weather");
  const [mode, setMode] = useState("Dark");

  async function searchHandler(search) {
    console.log("length : ", search.length)

    if (search.length > 1) {
      await FetchDataFromApi(search)
        .then((res) => {
          setData(res)
        })
        .catch((err) => {
          console.log("error : ", err);
          setData([]);
        });
    }
  }

  return (
    <Context.Provider
      value={{
        setSearch,
        searchHandler,
        search,
        mode,
        setMode,
        data,
        setData,
        loading,
        setLoading,
        selectOption,
        setSelectOption,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
