import React from "react";
import gfg from "../../public/GFG06092024.png";
import leetcode from "../../public/leetcode06092024.png";

const CodingProfiles = () => {
  const leetcodeProfile = "https://leetcode.com/u/ManasRanjanSatapathy/";
  const gfgProfile =
    "https://www.geeksforgeeks.org/user/manasranjansatapathy96/";
  const githubURL = "https://github.com/ManasRaj241/Leetcode-GFG_Problems";
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-3xl font-bold mb-2 text-green-500">
        Coding Profiles
      </h1>
      <div className="flex justify-center items-center space-x-4 p-6">
        {/* LeetCode Card */}
        <div className="flex flex-col items-center w-1/2 bg-white shadow-md rounded-lg overflow-hidden">
          <h2 className="text-2xl font-bold p-4 text-black">LeetCode</h2>
          <img
            src={leetcode}
            alt="LeetCode"
            className="w-full h-480 object-cover"
          />
          <div className="px-6 py-4 space-x-3 flex justify-center">
            <button className="bg-blue-500 hover:bg-slate-700 text-black font-bold px-4 py-2 rounded">
              <a href={leetcodeProfile}>Leetcode Profile</a>
            </button>
            <button className="bg-green-500 hover:bg-orange-700 text-black font-bold px-4 py-2 rounded">
              <a href={githubURL}>Github</a>
            </button>
          </div>
        </div>

        {/* GeeksForGeeks Card */}
        <div className="flex flex-col items-center w-1/2 bg-white shadow-md rounded-lg overflow-hidden">
          <h2 className="text-2xl font-bold p-4 text-black">GeeksForGeeks</h2>
          <img
            src={gfg}
            alt="GeeksForGeeks"
            className="w-full h-480 object-cover"
          />
          <div className="px-6 py-4 space-x-3 flex justify-center">
            <button className="bg-blue-500 hover:bg-slate-700 text-black font-bold px-4 py-2 rounded">
              <a href={gfgProfile}>GeeksForGeeks Profile</a>
            </button>
            <button className="bg-green-500 hover:bg-orange-700 text-black font-bold px-4 py-2 rounded">
              <a href={githubURL}>Github</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
