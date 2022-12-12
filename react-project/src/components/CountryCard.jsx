import React from "react";
export default function CountryCard({ country }) {
  const population = Number(
    parseFloat(country.population).toFixed(2)
  ).toLocaleString("en");
  return (
    <div>
      <div className="card">
        <img src={country.flags.png} />
        <div className="country-details">
          <p className="country-name">{country.name.common}</p>
          <p>
            <strong>Population:</strong> {population}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
}
