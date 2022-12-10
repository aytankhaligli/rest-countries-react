import React, { useState, useEffect, useRef } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [theme, setTheme] = useState("dark");
  const [filtered, setFiltered] = useState(false);
  const [data, setData] = useState([]);
  const ref = useRef(null);
  const [searchCountry, setSearchCountry] = useState("");
  const [goDetails, setGoDetails] = useState(false);
  const [country, setCountry] = useState({});
  const [searchingData, setSearchingData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  function goDetailsPage(country) {
    setCountry(country);
    setGoDetails(true);
  }

  function goBack() {
    setGoDetails(false);
  }

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
    // setData(searchData);
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
  }

  function filter() {
    setFiltered((prev) => !prev);
  }

  function toggleTheme() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }
  return (
    <Context.Provider
      value={{
        theme,
        toggleTheme,
        filtered,
        filter,
        data,
        ref,
        handleChange,
        searchCountry,
        filterCountry,
        goDetails,
        goDetailsPage,
        country,
        goBack,
        searchingData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
