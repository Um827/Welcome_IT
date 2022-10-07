import React from "react";
import "../styles/About.css";

const About = ({data}) => {
  const aboutInfo = [
    {
      title:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      item1: "nisi ut aliquip ex ea commodo consequat",
      item2: " dolor in reprehenderit in voluptate velit",
      item3: "nisi ut aliquip ex ea commodo consequat",
      description:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const renderInfo = (info, index) => {
    return (
      <div className="container" key={index}>
        <div className="section-title">
          <h2 className="text-center">{data.aboutus_title}</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6 ">
            <p id="about-p">{info.title}</p>
            <ul>
              <li>
                <i id="checkmark1" className="fa-solid fa-check-double"></i>{" "}
                {info.item1}
              </li>
              <li>
                <i id="checkmark" className="fa-solid fa-check-double"></i>{" "}
                {info.item2}
              </li>
              <li>
                <i id="checkmark" className="fa-solid fa-check-double"></i>{" "}
                {info.item3}
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 ">
            <p id="about-d">{info.description}</p>
            <a href="#" className="btn btn-outline-secondary">
              Learn More
              <i
                className="fa-solid fa-angles-right"
                style={{ padding: "5px" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="about mt-5">
      {aboutInfo.map(renderInfo)}
    </section>
  );
};

export default About;
