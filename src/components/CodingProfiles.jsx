import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTrophy, FaFire } from "react-icons/fa";

const CodingProfiles = () => {
  const leetcodeProfile = "https://leetcode.com/u/ManasRanjanSatapathy/";
  const gfgProfile =
    "https://www.geeksforgeeks.org/user/manasranjansatapathy96/";
  const githubURL = "https://github.com/ManasRaj241/Leetcode-GFG_Problems";

  const [leetcodeData, setLeetcodeData] = useState(null);
  const [gfgData, setGfgData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [lcRes, gfgRes] = await Promise.all([
          fetch(
            "https://leetcode-stats-api.herokuapp.com/ManasRanjanSatapathy"
          ),
          fetch(
            "https://geeks-for-geeks-stats-api.vercel.app/?raw=Y&userName=manasranjansatapathy96"
          ),
        ]);

        const lc = await lcRes.json();
        const gfg = await gfgRes.json();

        setLeetcodeData(lc);
        setGfgData(gfg);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16 text-center">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/50 rounded-lg">
          <p className="text-green-400 font-semibold">
            Loading your coding stats...
          </p>
        </div>
      </div>
    );
  }

  if (!leetcodeData || !gfgData) {
    return (
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16 text-center">
        <p className="text-slate-400 text-lg">
          Unable to load coding profiles data
        </p>
      </div>
    );
  }

  const ProfileCard = ({ platform, data, icon, profileUrl }) => {
    const isLeetcode = platform === "LeetCode";
    const totalProblems = isLeetcode
      ? data.totalSolved
      : data.totalProblemsSolved;
    const easy = isLeetcode ? data.easySolved : data.Easy;
    const medium = isLeetcode ? data.mediumSolved : data.Medium;
    const hard = isLeetcode ? data.hardSolved : data.Hard;
    const ranking = isLeetcode ? data.ranking : "18784";
    const universityRank = !isLeetcode ? "7" : null;

    return (
      <div className="group relative">
        {/* Gradient Border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>

        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg text-green-400 group-hover:text-green-300 transition-colors">
                {icon}
              </div>
              <h2 className="text-3xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                {platform}
              </h2>
            </div>
            <FaFire className="text-orange-400 text-2xl" />
          </div>

          {/* Stats Grid */}
          <div className="space-y-4 mb-6">
            {/* Total Problems */}
            <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 hover:border-green-500/30 transition-colors">
              <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">
                Total Problems Solved
              </p>
              <p className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {totalProblems}
              </p>
            </div>

            {/* Difficulty Breakdown */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center hover:border-green-500 transition-colors">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                  Easy
                </p>
                <p className="text-2xl font-bold text-green-400">{easy}</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 text-center hover:border-orange-500 transition-colors">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                  Medium
                </p>
                <p className="text-2xl font-bold text-orange-400">{medium}</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center hover:border-red-500 transition-colors">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                  Hard
                </p>
                <p className="text-2xl font-bold text-red-400">{hard}</p>
              </div>
            </div>

            {/* Rankings */}
            {universityRank ? (
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 hover:border-green-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <FaTrophy className="text-yellow-400" />
                    <p className="text-slate-400 text-xs uppercase tracking-wider">
                      Global Rank
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-yellow-400">
                    {typeof ranking === "number"
                      ? ranking.toLocaleString()
                      : ranking}
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <FaTrophy className="text-blue-400" />
                    <p className="text-slate-400 text-xs uppercase tracking-wider">
                      University Rank
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-blue-400">
                    {universityRank}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <FaTrophy className="text-yellow-400" />
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    Global Rank
                  </p>
                </div>
                <p className="text-3xl font-bold text-yellow-400">
                  {typeof ranking === "number"
                    ? ranking.toLocaleString()
                    : ranking}
                </p>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-6 border-t border-slate-700">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaExternalLinkAlt size={16} />
              {platform} Profile
            </a>
            <a
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-green-400 font-bold rounded-lg border border-slate-600 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <FaGithub size={16} />
              Solutions
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      name="Coding Profiles"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-block mb-4">
          <span className="text-green-400 text-sm font-bold uppercase tracking-wider">
            Competitive Programming
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Coding Profiles
          </span>
        </h1>
        <p className="max-w-2xl">
          My competitive programming journey on LeetCode and GeeksForGeeks with
          detailed problem-solving statistics.
        </p>
      </div>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProfileCard
          platform="LeetCode"
          data={leetcodeData}
          icon={<FaExternalLinkAlt size={28} />}
          profileUrl={leetcodeProfile}
        />
        <ProfileCard
          platform="GeeksForGeeks"
          data={gfgData}
          icon={<FaTrophy size={28} />}
          profileUrl={gfgProfile}
        />
      </div>

      {/* Stats Summary */}
      <div className="mt-16 pt-12 border-t border-slate-700">
        <h3 className="text-2xl font-bold text-green-400 mb-6">
          Overall Stats
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              label: "Total Problems Solved",
              value: (
                leetcodeData.totalSolved + gfgData.totalProblemsSolved
              ).toLocaleString(),
              icon: "🎯",
            },
            {
              label: "Total Easy Problems",
              value: (leetcodeData.easySolved + gfgData.Easy).toLocaleString(),
              icon: "✅",
            },
            {
              label: "Problem-Solving Streak",
              value: "Consistent",
              icon: "🔥",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{stat.icon}</span>
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
