import React, { useContext } from "react";
import CountryCard from "./CountryCard";
import { Context } from "../Context";
import { Link } from "react-router-dom";
export default function CountryPage() {
  const {
    data,
    opened,
    openFilterModal,
    ref,
    searchCountry,
    handleChange,
    filterCountry,
    searchingData,
    errorMsg,
  } = useContext(Context);
  const countryElement = searchingData.length
    ? searchingData.map((country, index) => (
        <Link to={`country/${country.name.common}`} key={index}>
          <CountryCard country={country} />{" "}
        </Link>
      ))
    : data.map((country, index) => (
        <Link to={`country/${country.name.common}`} key={index}>
          <CountryCard country={country} />{" "}
        </Link>
      ));

  return (
    <div>
      <div className="search">
        <input
          className="search-bar"
          placeholder="Search for a country..."
          ref={ref}
          value={searchCountry}
          onChange={handleChange}
        />
        <div className="search-icon">
          <ion-icon name="search"></ion-icon>
        </div>
        <div className="filter-container">
          <div className="filter" onClick={openFilterModal}>
            <p>Filter by Region</p>
            <ion-icon name="chevron-down" className="arrow-icon"></ion-icon>
          </div>
          <div className={`filter-region ${opened ? "" : "hide"}`}>
            <p onClick={filterCountry}>Africa</p>
            <p onClick={filterCountry}>America</p>
            <p onClick={filterCountry}>Asia</p>
            <p onClick={filterCountry}>Europe</p>
            <p onClick={filterCountry}>Oceania</p>
          </div>
        </div>
      </div>
      <div className="country-page">
        {data.length ? countryElement : <p className="loadtext">{errorMsg}</p>}
      </div>
    </div>
  );
}
