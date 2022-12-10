import React, { useContext } from "react";
import { Context } from "../Context";

export default function DetailsPage({ country }) {
  const { goBack } = useContext(Context);
  const languages = Object.values(country.languages).toString();
  const currencies = Object.keys(country.currencies).toString();
  const population = Number(
    parseFloat(country.population).toFixed(2)
  ).toLocaleString("en");
  const borderElement =
    "borders" in country
      ? country.borders.map((border) => (
          <div className="border-country" key={border}>
            {border}
          </div>
        ))
      : null;

  return (
    <div className="details-page">
      <button className="back-button" onClick={goBack}>
        <ion-icon name="arrow-back"></ion-icon>
        Back
      </button>
      <div className="details">
        <div className="details-img-box">
          <img src={country.flags.png} />
        </div>
        <div className="details-text-box">
          <h1 className="country">{country.name.common}</h1>
          <div className="grid">
            <div>
              <p>
                <strong>Native Name:</strong> {country.name.official}
              </p>

              <p>
                <strong>Population: </strong> {population}
              </p>

              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {country.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital.toString()}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain:</strong>{" "}
                {country.tld.toString().slice(1)}
              </p>
              <p>
                <strong>Currencies: </strong> {currencies}
              </p>
              <p>
                <strong>Languages: </strong> {languages}
              </p>
            </div>
          </div>
          <div className="border">
            <div className="text-center">
              <strong>Border Countries: </strong>
            </div>
            <div className="border-grid">
              {borderElement ? borderElement : <p>Dont have neighbor</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
