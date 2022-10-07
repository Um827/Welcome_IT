import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PortfolioHeader from "../../components/PortfolioHeader";
import PortfolioCard from "../../components/PortfolioCard";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <PortfolioHeader />
      <PortfolioCard />
      <Footer />
    </div>
  );
};

export default Portfolio;
