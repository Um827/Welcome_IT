import React from "react";
import "../styles/Why.css";

const Why = ({data}) => {
  const whyInfo = [
    {
      title: "Non consectetur a erat nam at lectus urna duis? ",
      id: "accordion-list-1",
      target: "#accordion-list-1",
      number: "01",
      description:
        " Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      title: "Non consectetur a erat nam at lectus urna duis? ",
      id: "accordion-list-2",
      target: "#accordion-list-2",
      number: "02",
      description:
        " Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      title: "Non consectetur a erat nam at lectus urna duis? ",
      id: "accordion-list-3",
      target: "#accordion-list-3",
      number: "03 ",
      description:
        " Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
  ];

  const renderData = (info, index) => {
    return (
      <div className="accordion-list" key={index}>
        <ul>
          <li>
            <a
              data-bs-toggle="collapse"
              className="collapse"
              data-bs-target={info.target}
            >
              <span>{info.number}</span> {info.title}{" "}
              <i className="fa-solid fa-circle-chevron-down"></i>
              <i className="fa-solid fa-circle-chevron-up"></i>
            </a>
            <div
              id={info.id}
              className="collapse collapsed"
              data-bs-parent=".accordion-list"
            >
              <p>{info.description}</p>
            </div>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <section id="why-us" className="why-us section-bg">
      <h2 className="text-center mt-4" id="heading">
        {data.teravision_title}
      </h2>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1"
            data-aos="zoom-in"
          >
            <div className="content">
              <h3>
               {data.teravision_sub_title}
              </h3>
              <p>
                {data.teravision_description}
              </p>
            </div>
            {whyInfo.map(renderData)}
          </div>
          <div
            className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
            data-aos="zoom-in"
          >
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
