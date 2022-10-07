import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReadHeader from "../../components/ReadHeader";
import ReadContent from "../../components/ReadContent";

const ReadMore = () => {
  return (
    <div>
      <Navbar />
      <ReadHeader />
      <ReadContent />
      <Footer />
    </div>
  );
};

export default ReadMore;
