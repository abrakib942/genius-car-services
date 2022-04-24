import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Experts from "../experts/Experts";

import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Genius Car Service</title>
      </Helmet>

      <Banner />
      <Services />
      <Experts />
    </>
  );
};

export default Home;
