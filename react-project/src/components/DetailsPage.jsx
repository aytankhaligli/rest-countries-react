import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../Context";

export default function DetailsPage() {
  const { countryName } = useParams();
  const { data, errorMsg } = useContext(Context);
  const [country] = data.filter(
    (country) => country.name.common === countryName
  );

  const languages = country && Object.values(country.languages).toString();
  const currencies = country && Object.keys(country.currencies).toString();
  const population =
    country &&
    Number(parseFloat(country.population).toFixed(2)).toLocaleString("en");
  const borderElement = country
    ? "borders" in country
      ? country.borders.map((border) => (
          <div className="border-country" key={border}>
            {border}
          </div>
        ))
      : null
    : "";

  return (
    <div className="details-page">
      <Link to="/">
        <button className="back-button">
          <ion-icon name="arrow-back"></ion-icon>
          Back
        </button>
      </Link>

      {country ? (
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
                  <strong>Population: </strong>
                  {population}
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
                  <strong>Top Level Domain: </strong>
                  {country.tld.toString()}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {currencies}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {languages}
                </p>
              </div>
            </div>
            <div className="border">
              <div className="text-center">
                <strong>Border Countries: </strong>
              </div>

              {borderElement ? (
                <div className="border-grid">{borderElement} </div>
              ) : (
                <p>Dont have neighbor</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="loadtext">{errorMsg}</p>
      )}
    </div>
  );
}
