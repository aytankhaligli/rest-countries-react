import React, { useContext } from "react";
import CountryCard from "./CountryCard";
import { Context } from "../Context";
import { Link } from "react-router-dom";
export default function CountryPage() {
  const {
    data,
    filtered,
    filter,
    ref,
    searchCountry,
    handleChange,
    filterCountry,
    searchingData,
  } = useContext(Context);

  const countryElement = searchingData.length
    ? searchingData.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))
    : data.map((country, index) => (
        <CountryCard key={index} country={country} />
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
          <div className="filter" onClick={filter}>
            <p>Filter by Region</p>
            <ion-icon name="chevron-down" className="arrow-icon"></ion-icon>
          </div>
          <div className={`filter-region ${filtered ? "" : "hide"}`}>
            <p onClick={filterCountry}>Africa</p>
            <p onClick={filterCountry}>America</p>
            <p onClick={filterCountry}>Asia</p>
            <p onClick={filterCountry}>Europe</p>
            <p onClick={filterCountry}>Oceania</p>
          </div>
        </div>
      </div>
      <div className="country-page">{countryElement}</div>
    </div>
  );
}
