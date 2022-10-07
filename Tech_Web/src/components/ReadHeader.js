import React from "react";
import "../styles/ReadMore.css";

const ReadHeader = () => {
  return (
    <section id="read-hero">
      <div className="banner-image2 w-100 d-flex justify-content-center align-items-center">
        <div className="content" data-aos="fade-right">
          <h1 className="text-white text-center">Read More</h1>
          <p className="text-white text-center">
            Nearshore software outsourcing that just makes sense.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadHeader;
