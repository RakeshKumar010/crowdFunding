import React from "react";
import NavBar from "./NavBar";
import {Route, Routes } from "react-router-dom";
import HomePage from "../main/homepage/Homepage";
import Footer from "./Footer";
import BrosFund from "../main/brosFundraiser/BrosFund";
import Howitw from "../main/howitw/Howitw";
import Story from "../main/homepage/Story";
import SignUpFund from "../main/startFund/SignUpFund";
import About from "../main/about/About";
import PreDetails from "../main/startFund/PreDetails";
import NePreDetails from "../main/startFund/NePreDetails";
import NeStory from "../main/startFund/NeStory";
import Congratulations from "../main/startFund/Congratulations";
import LoginUser from "../main/login/LoginUser";
import UserProfile from "../user/UserProfile";
import AccSetting from "../user/AccSetting";
import Contact from "../main/contact/Contact";
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
        <Route path="/sigupfund" element={<SignUpFund/>} />
        <Route path="/predetails" element={<PreDetails/>} />
        <Route path="/needer" element={<NePreDetails/>} />
        <Route path="/nestory" element={<NeStory/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<LoginUser/>} />
        <Route path="/congratulations" element={<Congratulations/>} />
        <Route path="/userProfile" element={<UserProfile/>} />
        <Route path="/accsetting" element={<AccSetting/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
     
    </>
     <Footer/>
     </>
  );
};

export default Layout;
