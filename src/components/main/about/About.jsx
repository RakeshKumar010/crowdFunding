import React from "react";
import bannerImg from "../../../assets/aboutBanner.jpg";
import AppStore from "../../global/AppStore";
const About = () => {
  return (
    <>
     
      <div className="flex flex-col items-center justify-center min-h-screen py-2 shadow-sm rounded-lg border border-gray-200">
      <h1 className="text-2xl lg:text-4xl text-center mb-2 font-extrabold">
        <span className="text-teal-400 "> About</span> Us
      </h1>
  <div className="flex flex-wrap-reverse flex-row my-6 items-center justify-around mx-6">
    <div className="lg:w-1/2 p-4 bg-white rounded-lg ">
      <h2 className="text-xl font-semibold mb-2">Our Unique Approach</h2>
      <p className="mb-4">
        Unlike many crowdfunding platforms, we prioritize trust and authenticity. We thoroughly vet all requesters before listing them on our website. Our platform is fully trusted. You can verify this by visiting our office or reviewing user feedback.
      </p>
      <h3 className="text-lg font-semibold mb-2">Requester Verification Steps:</h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Address verification</li>
        <li>Verification of the need</li>
        <li>Identity Verification</li>
        <li>Income Verification</li>
        <li>Social Media Checks</li>
        <li>Interview</li>
      </ol>
      <p>Note: Our verification process includes on-site visits and video calls.</p>
      <h3 className="text-lg font-semibold mt-4 mb-2">Our Motto</h3>
      <p>We are a non-profit organization dedicated to helping those who genuinely need financial assistance.</p>
    </div>
    <div className="lg:w-1/3 p-4">
      <img
        src={bannerImg}
        alt="..."
        className="lg:w-full rounded-full  border-4 border-teal-400/25"
        style={{boxShadow:'0 0 15px #036672'}}
      />
    </div>
  </div>
</div>

    </>
  );
};

export default About;
