import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { User } from "../components/User";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <User />
      <Footer />
    </div>
  );
};

export default Home;
