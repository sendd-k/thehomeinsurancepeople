import React from "react";
import "./home.scss";
import Navibar from "./Nav";
import logo from "../images/HIP_Logo_NoBG.png";

function Home() {
  return (
    <div className="home">
      <Navibar />
      <div className="home__content">
        <h1>Harbord - The Home Insurance People</h1>
        <img src={logo} alt="Harbord Logo" />
      </div>
    </div>
  );
}

export default Home;
