// src/components/PriceHistoryChart.jsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function PriceHistoryChart({ priceHistory }) {
  // Convert date string to formatted month for chart
  const formattedData = priceHistory?.map(item => ({
    month: new Date(item.date).toLocaleString("default", { month: "short", year: "numeric" }),
    price: item.price,
  })) || [];

  return (
    <div className="bg-white mt-10 rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        📉 Price History
      </h2>
      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip formatter={(value) => `₹${value.toLocaleString("en-IN")}`} />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
