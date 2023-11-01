import React from "react";
import { Link } from "react-router-dom";
import { CiUser, CiMail, CiPenpot } from "react-icons/ci";
import { IoSchoolOutline } from "react-icons/io5";

const PreDetails = () => {
  return (
    <div className="flex justify-center bg-gray-800/80">
      <div
        className="w-11/12 rounded-md my-2 relative bg-white  lg:w-96"
        style={{ minHeight: "85vh" }}
      >
        <h2 className="p-2 border-b-2 text-center text-xl text-teal-400">
          Tell us more about your Fundraiser
        </h2>
        <form className="p-3.5">
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <input
              type="text"
              placeholder="How mush do you want to raise? *"
              required
              className="border-0  w-11/12 rounded-md"
            />
            <CiUser />
          </div>
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <select
              id="countries"
              class="bg-gray-50 border-0  w-11/12 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>The Needer is my</option>
              <option value="self">Self</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="grandFather">GrandFather</option>
              <option value="grandMother">GrandMother</option>
              <option value="son">Son</option>
              <option value="sister">Sister</option>
              <option value="brother">Brother</option>
              <option value="cousin">Cousin</option>
              <option value="aunty">Aunty</option>
              <option value="uncal">Uncal</option>
              <option value="relative">Relative</option>
              <option value="Other">Other</option>
            </select>
            <CiMail />
          </div>
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <select
              id="countries"
              class="bg-gray-50 border-0  w-11/12 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Your Education Qualification *</option>
              <option value="10th/12th">10th/12th pass</option>
              <option value="graduate">Graduate</option>
              <option value="pGraduate">
                Postgraduate (Masters, PHD, etc.)
              </option>
              <option value="below10th">Below 10th pass</option>
            </select>
            <IoSchoolOutline className="text-gray-600" />
          </div>
          <div className="flex justify-between  border-b-2 w-full mb-3 items-center pr-2 ">
            <select
              id="countries"
              class="bg-gray-50 border-0  w-11/12 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Your Employment Status *</option>
              <option value="salaried">Salaried</option>
              <option value="selfEmp">Self-employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="below10th">Below 10th pass</option>
            </select>
            <CiPenpot className="text-gray-600" />
          </div>

          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>

          <div className="absolute right-0 bottom-0  w-full">
            <p
              style={{ fontSize: "10px" }}
              className="px-2 mb-2 mx-auto text-gray-900 rounded-sm bg-teal-200 w-fit"
            >
              Madad Karo zero platform fee policy will ensure more funds for
              you.
            </p>
            <Link to={'/needer'}>
            <button className="bg-teal-400 w-full p-3 rounded-b-md text-white">
              Next
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PreDetails;
