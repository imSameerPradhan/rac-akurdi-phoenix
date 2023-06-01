import React from "react";
import "./Home.css";
import logo from "../../assets/logo.png";
import Header from "../header/Header";
import Carousel from "./CarouselContainer";
import Team from "./Team";
import Footer from "../footer/Footer";
import themeImg from "../../assets/theme.png";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="carousel">
          <Carousel />
        </div>
        <h3>About US</h3>
        <hr width="30%" />
        <div className="about">
          <img className="home-logo" src={logo} alt="logo" />
          <p>
            <span>What we do?</span>
            <hr width="15%" />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            non rem quibusdam ipsa, magni eligendi sint mollitia quod dolorum
            aliquam, doloremque, cumque accusamus repellendus similique.
            Mollitia perspiciatis cumque aliquid quam.
          </p>
        </div>
        <h3>Meet our Team</h3>
        <hr width="30%" />
        <div className="teams-section">
          <Team />
        </div>
        <h3>Our Theme of the Year</h3>
        <hr width="30%" />
        <div className="theme-section">
          <img src={themeImg} alt="Theme" />
        </div>
        <h3>Aid us in creating a Better Planet</h3>
        <hr width="30%" />
        <div className="donate-section">
          <p>
            Donating to the Rotaract Club of Akurdi Phoenix <br /> will support
            our initiatives that promote community growth,2 social
            consciousness, and women's empowerment. Join us in realising this
            goal and vision. Join us in creating a better society.
          </p>
          <button>Donate Now</button>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
