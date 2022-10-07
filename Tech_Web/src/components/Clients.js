import React from "react";
import "../styles/Client.css";

const Clients = () => {
  const clientInfo = [
    {
      icon: "fa-regular fa-message",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      name: "Jonh Son",
    },
    {
      icon: "fa-regular fa-message",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      name: "Jonh Son",
    },
    {
      icon: "fa-regular fa-message",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      name: "Jonh Son",
    },
  ];

  const renderInfo = (info, index) => {
    return (
      <div className="carousel-item active" key={index}>
        <i className={info.icon} id="testimonial-i"></i>
        <figure className="text-cent col-md-6 offset-md-3 mt-4">
          <blockquote className="blockquote">
            <p>{info.text}</p>
          </blockquote>
          <figcaption className="blockquote-footer mt-2">
            {info.name}
          </figcaption>
        </figure>
      </div>
    );
  };

  return (
    <section id="clients" className="testimonial-slider mt-5">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner py-5 text-center">
          {clientInfo.map(renderInfo)}
        </div>
      </div>
    </section>
  );
};

export default Clients;
