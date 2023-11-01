import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser, CiMail, CiLock, CiPhone } from "react-icons/ci";

const SignUpFund = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [mobile, setMobile] = useState();
const navigator = useNavigate()
  const changeFun = (e) => {
  
    const { value, name } = e.target;
    if (name == "name") {
      setName(value);
    } else if (name == "email") {
      setEmail(value);
    } else if (name == "pass") {
      setPass(value);
    } else if (name == "mobile") {
      setMobile(value);
    } else {
      alert("your code is wrong");
    }
  };
  return (
    <div className="flex justify-center bg-gray-800/80">
      <div
        className="w-11/12 rounded-md my-2 relative bg-white  lg:w-96"
        style={{ height: "70vh" }}
      >
        <h2 className="p-2 border-b-2 text-center text-xl text-teal-400">
          Start Your Fundraise
        </h2>
        <form
          className="p-3.5"
          onSubmit={(e) => {
            e.preventDefault();
            let pandingData = { eamil: email, pass: pass };
            localStorage.setItem("pdata", JSON.stringify(pandingData));
            navigator('/predetails')
          }}
        >
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <input
              type="text"
              placeholder="Name *"
              required
              className="border-0  w-11/12 rounded-md"
              name="name"
              onChange={changeFun}
            />
            <CiUser />
          </div>
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <input
              type="email"
              placeholder="Email Address *"
              required
              className="border-0  w-11/12 rounded-md"
              name="email"
              onChange={changeFun}
            />
            <CiMail />
          </div>
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <input
              type="password"
              placeholder="Creaate a Password*"
              required
              className="border-0  w-11/12 rounded-md"
              name="pass"
              onChange={changeFun}
            />
            <CiLock />
          </div>
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <input
              type="number"
              placeholder="Mobile *"
              required
              className="border-0  w-11/12 rounded-md"
              name="mobile"
              onChange={changeFun}
            />
            <CiPhone />
          </div>

          <div className="absolute right-0 bottom-0  w-full">
            <p className=" text-center mb-2">
              Already have a account?{" "}
              <Link to={"/login"} className="text-teal-400">
                {" "}
                Login
              </Link>
            </p>
    
              <button className="bg-teal-400 w-full p-3 rounded-b-md text-white">
                Next
              </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpFund;
