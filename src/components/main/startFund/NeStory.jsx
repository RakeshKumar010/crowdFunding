import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NeStory = () => {
  const navigater =useNavigate()
  const submitFun=(e)=>{
    e.preventDefault()
    let data=localStorage.getItem('pdata')
    localStorage.setItem('data',data)
    navigater('/congratulations')
  }
  return (
     <div className="flex justify-center bg-gray-800/80">
      <div
        className="w-11/12 rounded-md my-2 relative bg-white  lg:w-96"
        style={{ minHeight: "85vh" }}
      >
        <h2 className="p-2 border-b-2 text-center text-xl text-teal-400">
          Tell the story why run the Fundraise
        </h2>
        <form className="p-3.5" onSubmit={submitFun}>
         
         
          

          <div className="absolute right-0 bottom-0  w-full">
            <p
              style={{ fontSize: "10px" }}
              className="px-2 mb-2 mx-auto text-gray-900 rounded-sm bg-teal-200 w-fit"
            >
              Madad Karo zero platform fee policy will ensure more funds for
              you.
            </p>
    
            <button className="bg-teal-400 w-full p-3 rounded-b-md text-white">
              Submit
            </button>
          
          </div>
        </form>
      </div>
    </div>
  )
}

export default NeStory