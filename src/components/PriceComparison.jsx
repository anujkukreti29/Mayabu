// src/components/PriceComparison.jsx
import React from "react";

export default function PriceComparison({ comparisons }) {
  return (
    <div className="bg-white mt-10 rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        💰 Compare Prices
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-gray-700 uppercase tracking-wide">Platform</th>
              <th className="p-3 text-gray-700 uppercase tracking-wide">Price</th>
              <th className="p-3 text-center text-gray-700 uppercase tracking-wide">Action</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((site, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-all duration-200"
              >
                <td className="p-3 font-medium">{site.platform}</td>
                <td className="p-3 text-green-600 font-semibold">
                  {site.price ? `₹${site.price.toLocaleString("en-IN")}` : "N/A"}
                </td>
                <td className="p-3 text-center">
                  <a
                    href={site.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-1.5 rounded-md text-white font-medium transition ${
                      site.price ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Visit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
