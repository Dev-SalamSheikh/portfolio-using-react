import React from "react";
import { Link } from "react-scroll";
import Toogle from "../Toogle/Toogle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="n-wrapper">
        <div className="nav-left">
          <div className="n-name">Andrew</div>
          <Toogle />
        </div>
        <div className="nav-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true}>
                  Serivces
                </Link>
              </li>
              <li>
                <Link to="works" spy={true} smooth={true}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true}>
                  Protfolio
                </Link>
              </li>
              <li>
                <Link to="testimonial" spy={true} smooth={true}>
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>
          <button className="button n-button">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
