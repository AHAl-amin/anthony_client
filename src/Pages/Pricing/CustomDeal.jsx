import React from 'react';
import { IoMdCheckmark } from "react-icons/io";

function CustomDeal() {
  return (
    <section className="relative w-full md:max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg border my-10 border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
          <p className="text-gray-600 mt-2">For large organizations with high-volume content needs</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <IoMdCheckmark className="size-5 text-[#22C55E] mr-3" />
              <span className="text-gray-700">Unlimited words per month</span>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark className="size-5 text-[#22C55E] mr-3" />
              <span className="text-gray-700">Dedicated account manager</span>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark className="size-5 text-[#22C55E] mr-3" />
              <span className="text-gray-700">Custom integration support</span>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark className="size-5 text-[#22C55E] mr-3" />
              <span className="text-gray-700">Advanced analytics and reporting</span>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark className="size-5 text-[#22C55E] mr-3" />
              <span className="text-gray-700">SLA with guaranteed uptime</span>
            </li>
          </ul>
        </div>
        <button className="bg-[#60AAFF] text-white px-4 py-2 rounded-full hover:bg-blue-600/70 cursor-pointer transition-colors">
          Custom Deals
        </button>
      </div>
      <button className="w-full mt-6  text-gray-700 py-2 rounded-lg border  border-[#60AAFF] hover:bg-[#60AAFF] cursor-pointer hover:text-gray-200 transition-colors">
        Contact Sales
      </button>
    </section>
  );
}

export default CustomDeal;