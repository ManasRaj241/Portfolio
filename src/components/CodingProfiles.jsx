import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const CodingProfiles = () => {
  const leetcode_api_url =
    "https://leetcode-stats-api.herokuapp.com/ManasRanjanSatapathy";
  const gfg_api_url =
    "https://geeks-for-geeks-stats-api.vercel.app/?raw=Y&userName=manasranjansatapathy96";
  const leetcodeProfile = "https://leetcode.com/u/ManasRanjanSatapathy/";
  const gfgProfile =
    "https://www.geeksforgeeks.org/user/manasranjansatapathy96/";
  const githubURL = "https://github.com/ManasRaj241/Leetcode-GFG_Problems";

  const [leetcodeData, setLeetcodeData] = useState(null);
  const [gfgData, setGfgData] = useState(null);

  // Fetch LeetCode data
  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await axios.get(leetcode_api_url);
        setLeetcodeData(response.data);
      } catch (error) {
        console.error("Error fetching LeetCode data", error);
      }
    };

    const fetchGfgData = async () => {
      try {
        const response = await axios.get(gfg_api_url);
        setGfgData(response.data);
      } catch (error) {
        console.error("Error fetching GFG data", error);
      }
    };

    fetchLeetCodeData();
    fetchGfgData();
  }, []);

  if (!leetcodeData || !gfgData) {
    return <div className="text-center text-2xl">Loading...</div>;
  }

  // Data for LeetCode pie chart
  const leetcodePieData = {
    labels: [
      `Easy Solved (${leetcodeData.easySolved})`,
      `Medium Solved (${leetcodeData.mediumSolved})`,
      `Hard Solved (${leetcodeData.hardSolved})`,
    ],
    datasets: [
      {
        label: "LeetCode Problems",
        data: [
          leetcodeData.easySolved,
          leetcodeData.mediumSolved,
          leetcodeData.hardSolved,
        ],
        backgroundColor: ["#4caf50", "#ff9800", "#f44336"],
        hoverBackgroundColor: ["#66bb6a", "#ffb74d", "#ef5350"],
        borderWidth: 1,
      },
    ],
  };

  // Data for GeeksForGeeks pie chart
  const gfgPieData = {
    labels: [
      `Easy Solved (${gfgData.Easy})`,
      `Medium Solved (${gfgData.Medium})`,
      `Hard Solved (${gfgData.Hard})`,
    ],
    datasets: [
      {
        label: "GFG Problems",
        data: [gfgData.Easy, gfgData.Medium, gfgData.Hard],
        backgroundColor: ["#4caf50", "#ff9800", "#f44336"],
        hoverBackgroundColor: ["#66bb6a", "#ffb74d", "#ef5350"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-10">
      <h1 className="text-4xl font-bold text-center text-green-500 mb-10">
        Coding Profiles
      </h1>

      <div className="flex flex-wrap justify-center md:justify-between space-y-6 md:space-y-0 md:space-x-6">
        {/* LeetCode Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-[45%] mb-6">
          <h2 className="text-3xl font-bold text-black mb-4 text-center">
            LeetCode
          </h2>
          <p className="text-xl text-gray-700 mb-2">
            Total Solved: {leetcodeData.totalSolved}
          </p>
          <div className="flex justify-center">
            <Pie data={leetcodePieData} width={200} height={200} />
          </div>
          <p className="text-xl text-gray-700 mt-4 text-center">
            <b>Global Ranking: </b> {leetcodeData.ranking}
          </p>
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
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-[45%] mb-6">
          <h2 className="text-3xl font-bold text-black mb-4 text-center">
            GeeksForGeeks
          </h2>
          <p className="text-xl text-gray-700 mb-2">
            Total Solved: {gfgData.totalProblemsSolved}
          </p>
          <div className="flex justify-center">
            <Pie data={gfgPieData} width={200} height={200} />
          </div>
          <div className="flex justify-between items-start text-xl text-gray-700 mt-4">
            <div>
              <b>Global Ranking: </b> 18784
            </div>
            <div>
              <b>University Ranking: </b> 7
            </div>
          </div>
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
