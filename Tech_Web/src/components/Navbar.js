import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "../services/api";
import "../styles/Navbar.css";

const Navbar = ({data}) => {
  const [isMobile, setIsMobile] = useState(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);


  return (
    <div className={color ? "container1 container1-bg" : "container1"}>
      <nav className="navbar1">
        <div style={{width: "16%"}}>
        <img src={`${process.env.REACT_APP_STORAGE_URL}/${data.header_company_logo}`} />
        </div>
        {/* <h3 className="logo">Logo</h3> */}

        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links1"}
          onClick={() => setIsMobile(false)}
        >
          {data.nav_items &&
            data.nav_items.map((item) => (
              <Link className="item" to="/">
                {item.item_name}
              </Link>
            ))}

          {/* <li className="services">
            <a href="#services"> Services</a>
          </li>

          <li className="about">
            <a href="#why-us">About Us</a>
          </li>

          <li className="clients">
            <a href="#clients"> Clients</a>
          </li>

          <Link className="portfolio" to="/portfolio">
            <li>Portfolio</li>
          </Link>
          <li className="contact1">
            <a href="#contact">Contact Us</a>
          </li> */}
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
