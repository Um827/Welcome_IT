import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Why from "../../components/Why";
import About from "../../components/About";
import Clients from "../../components/Clients";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { get } from "../../services/api";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await get(
        `/get_settings_by_name/${process.env.REACT_APP_COMPANY_NAME}`
      );
      console.log(data.navItems, Array.isArray(data.navItems));
      setData(data.data);
    })();
  }, []);
  return (
    <div>
      <Navbar data={data} />
      <Hero data={data} />
      <Services data={data} />
      <Why data={data} />
      <About data={data} />
      <Clients data={data} />
      <Contact data={data} />
      <Footer data={data} />
    </div>
  );
};

export default Home;
