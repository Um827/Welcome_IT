import React from "react";
import "../styles/Portfolio.css";

const PortfolioCard = () => {
  const portfolioInfo = [
    {
      src: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
      caption: "Project 1",
    },
    {
      src: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
      caption: "Project 2",
    },
    {
      src: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
      caption: "Project 3",
    },
    {
      src: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
      caption: "Project 4",
    },
    {
      src: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
      caption: "Project 5",
    },
    {
      src: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
      caption: "Project 6",
    },
    {
      src: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
      caption: "Project 7",
    },
    {
      src: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
      caption: "Project 8",
    },
    {
      src: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
      caption: "Project 9",
    },
  ];

  const renderInfo = (info, index) => {
    return (
      <div
        className="col-lg-4 col-sm-6 mb-2"
        key={index}
        data-aos="zoom-out-up"
      >
        <div className="thumbnail">
          <div className="img-container">
            <img src={info.src} className="image-p" />
            <div className="overlay">
              <p className="caption">{info.caption}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <h1>Image Gallery</h1>
      <div className="row">{portfolioInfo.map(renderInfo)}</div>
    </div>
  );
};

export default PortfolioCard;
