import React from "react";
// import ParticlesBackground from "./ParticlesBackground";
import "../styles/Hero.css";

const Hero = ({data}) => {
  return (
    <section style={ {backgroundImage:`url(${process.env.REACT_APP_STORAGE_URL}/${data.hero_section_bg_image})`,backgroundSize: 'cover'}} id="hero">
      <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
        {/* <ParticlesBackground /> */}
        <div className="content" data-aos="fade-right">
          <h1 className="text-white text-center">{data.hero_section_title}</h1>
          <p className="text-white text-center">
          {data.hero_section_sub_title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
