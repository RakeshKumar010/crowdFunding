import React from "react";
import bannerImg from '../../../assets/aboutBanner.jpg'
import AppStore from "../../global/AppStore";
const About = () => {
  return (
    <>
    <div className="flex flex-wrap-reverse flex-row my-3 items-center justify-around mx-3">
      <div className=" lg:w-1/2 ">
        <h1 className="text-2xl lg:text-4xl text-center mb-2 font-bold"><span className="text-teal-400 " > About</span> Us</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          laboriosam quasi, quam unde velit doloribus consequatur accusamus hic
          itaque labore, voluptatem nesciunt totam, rem nisi a exercitationem
          incidunt consequuntur ipsam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dignissimos optio corporis tempora dolorem eum
          fugiat asperiores nisi quas, exercitationem officia facere ex. Soluta
          provident libero eos eveniet delectus. Vel, adipisci!
        </p>
      </div>
      <div className=" lg:w-1/3">
        <img src={bannerImg} alt="..." className="lg:w-full rounded-full shadow-2xl shadow-teal-300 mb-12 lg:mb-0"/>
      </div>
    </div>
    <AppStore/>
    </>
  );
};

export default About;
