import React from "react";
import { Bookmark } from "lucide-react";
const Card = (props) => {
  return (
    <>
    <div className="bg-linear-to-br flex flex-wrap p-6">

        

      <div className="w-80 h-90 bg-white rounded-3xl shadow-2xl p-6 transition hover:scale-105 duration-300">
        {/* TOP SECTION */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <img
              src={props.logo}
              alt="logo"
              className="w-14 h-14 rounded-4xl object-cover border"
            />
          </div>

          <button className="flex p-2 rounded-full hover:bg-gray-100 transition">
            <h6>Save</h6> <Bookmark className="text-gray-600" />
          </button>
        </div>

        <div className="flex gap-2 align-baseline items-center mt-2">
          <h2 className="text-lg font-semibold text-gray-800">{props.company}</h2>
          <p className="text-sm text-gray-500">{props.datePosted}</p>
        </div>

        {/* JOB TITLE */}
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {props.post}
          </h1>
        </div>

        {/* TAGS */}
        <div className="flex gap-3 mt-4">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {props.tag1}
          </span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
            {props.tag2}
          </span>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex items-center justify-between mt-8 pt-5 border-t">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{props.pay}</h3>
            <p className="text-sm text-gray-500">{props.location}</p>
          </div>

          <button className="bg-black text-white px-5 py-2.5 rounded-xl font-medium hover:bg-gray-800 transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Card;
