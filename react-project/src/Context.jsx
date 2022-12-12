import React, { useState, useEffect, useRef } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [theme, setTheme] = useState("dark");
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("Loading...");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchingData, setSearchingData] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!!");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => setErrorMsg(err.message));
  }, []);

  function handleChange() {
    setSearchCountry(ref.current.value.toLowerCase());
    const searchData = data.filter((el) => {
      const name = el.name.common.toLowerCase();
      if (searchCountry === "") {
        return el;
      } else {
        return name.includes(searchCountry);
      }
    });
    setSearchingData(searchData);
  }

  function filterCountry(event) {
    const filterData = data.filter((el) => {
      const region = el.region;
      if (event.target.innerText === "") {
        return el;
      } else {
        return region.includes(event.target.innerText);
      }
    });
    setSearchingData(filterData);
    setOpened(false);
  }

  function openFilterModal() {
    setOpened((prev) => !prev);
  }

  function toggleTheme() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }

  return (
    <Context.Provider
      value={{
        theme,
        toggleTheme,
        opened,
        openFilterModal,
        data,
        ref,
        handleChange,
        searchCountry,
        filterCountry,
        searchingData,
        errorMsg,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
