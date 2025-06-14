// components/PackagesSection.jsx
import React, { useState } from "react";
import PackageCard from "./PakageCard";

const packages = [
  { label: "50 Likes" },
  { label: "100", discount: "$3 OFF" },
  { label: "250", discount: "$3 OFF" },
  { label: "500", discount: "$5 OFF" },
  { label: "1K", discount: "$12 OFF", highlight: "BEST SELLING" },
  { label: "2.5K", discount: "$33 OFF" },
  { label: "5K", discount: "$80 OFF" },
  { label: "10K", discount: "$260 OFF" },
  { label: "20K", discount: "$510 OFF", highlight: "BULK PRICE" },
];

export const PackagesSection = ({ fromInsta=true }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = packages[selectedIndex];

  return (
    <div className="max-w-md mx-auto py-8">
      {fromInsta && (
        <div className="flex items-center gap-8 text-sm font-semibold rounded-lg overflow-hidden">
          <button className="flex-1 h-20  px-4 py-2 rounded-t-2xl bg-white border border-gray-300 border-b-0">
            High-Quality Likes
          </button>
          <button className="flex-1 px-4 h-20 py-2 rounded-t-2xl border border-gray-300 border-b-0 bg-gradient-to-r from-blue-500 to-pink-500 text-white relative">
            Premium Likes
          </button>
        </div>
      )}
      <section className="rounded-b-2xl shadow-xl p-6 border border-gray-300 border-t-0">
        <div className="grid grid-cols-3 gap-4">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              {...pkg}
              selected={index === selectedIndex}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-2xl font-bold text-gray-900">
            <span className="text-pink-600">${"1.99"}</span>{" "}
            <span className="line-through text-gray-400 text-sm">$3.99</span>
          </p>
          <button className="w-full mt-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded-xl font-bold shadow-md hover:opacity-90 transition">
            BUY NOW
          </button>
          <p className="text-sm text-orange-500 mt-2">You Save $2.00</p>
        </div>
      </section>
    </div>
  );
};
