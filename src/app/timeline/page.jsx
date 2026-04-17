"use client"
import { ParsonContext } from "@/component/ParsonProvider";
import { useContext, useState } from "react";
import { FaVideo } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import { IoCall } from "react-icons/io5";


const TimeLinePage = () => {
  const { stored } = useContext(ParsonContext);
  const [filter, setFilter] = useState("");

 
 const filteredData = filter
    ? stored.filter(item => item.type === filter)
    : stored;

  return (
    <div className="max-w-7xl mx-auto py-10 space-y-5 px-4">

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Timeline</h2>

        <select
        value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-500 focus:outline-none bg-white"
        >
          <option value="">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="flex items-center gap-4 shadow-sm border border-gray-100 px-5 py-4 rounded-2xl bg-white">

              <div className="bg-gray-50 p-3 rounded-xl text-gray-600">
                {item.type === 'Call' && <IoCall className="text-xl text-blue-500" />}
                {item.type === 'Text' && <IoMdText className="text-xl text-green-500" />}
                {item.type === 'Video' && <FaVideo className="text-xl text-purple-500" />}
              </div>

              <div>
                <h1 className="font-bold text-gray-800 ">
                  {item.type} <span className="font-normal text-gray-600">{item.name}</span>
                </h1>
               <p className="text-sm text-gray-400"> {new Date().toLocaleDateString()}</p>
              </div>

            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-400 bg-white rounded-2xl border border-dashed">
            No Timeline found.
          </div>
        )}
      </div>

    </div>
  );
};

export default TimeLinePage;