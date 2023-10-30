import React from "react";
import NavBar from "./NavBar";
import {Route, Routes } from "react-router-dom";
import HomePage from "../main/homepage/Homepage";
import Footer from "./Footer";
import BrosFund from "../main/brosFundraiser/BrosFund";
import Howitw from "../main/howitw/Howitw";
import Story from "../main/homepage/Story";
const Layout = () => {
  return (
    <>
    < >
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brosfundraiser" element={<BrosFund />} />
        <Route path="/howitw" element={<Howitw/>} />
        <Route path="/stories" element={<Story/>} />
      </Routes>
     
    </>
     <Footer/>
     </>
  );
};

export default Layout;