import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center">
  
      <div className="w-1/2 flex flex-col items-start gap-6">
        <p className="text-7xl font-serif leading-snug font-extrabold">
          Your <br /> Presonal <br /> <span className="text-teal-400"> Donor</span>
        </p>
        <p>Need Funds to Pay For a Medical Emergency or Social Cause?</p>
        <p className='py-2 px-5 shadow-xl rounded-md hover:cursor-pointer shadow-teal-600 bg-teal-400 text-white hover:bg-teal-600 '>Start a Fundraiser</p>
      </div>
      <div className="w-1/2">
        <img
          src="https://kettocdn.gumlet.io/media/banner/0/71/image/626a109be777492340e46d013c3cad0857a5da3a.png?w=1536&dpr=1.0"
          alt="bannder"
          className="w-full h-fit"
        />
      </div>
    </div>
  );
};

export default Header;
