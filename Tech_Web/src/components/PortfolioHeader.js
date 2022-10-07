import React from "react";
import "../styles/Portfolio.css";

const PortfolioHeader = () => {
  return (
    <section id="Portfoilio-hero">
      <div className="banner-image1 w-100 d-flex justify-content-center align-items-center">
        <div className="content" data-aos="fade-right">
          <h1 className="text-white text-center">Our Portfolio</h1>
          <p className="text-white text-center">
            Nearshore software outsourcing that just makes sense.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeader;
