import React, { useContext } from "react";
import { Context } from "../Context";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(Context);
  return (
    <div className="navbar ">
      <p className="nav-title">Where in the world?</p>
      <button className="mode" onClick={toggleTheme}>
        <ion-icon name={`${theme === "dark" ? "moon" : "sunny"}`}></ion-icon>
        {theme === "dark" ? "Dark" : "Light"} mode
      </button>
    </div>
  );
}
