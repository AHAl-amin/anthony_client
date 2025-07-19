

"use client";
import { useState } from "react";
import { IoIosAdd, IoMdCheckmark } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import PaymentManagement from "./PaymentManagement";

const pricingData = [
  {
    "id": 1,
    "name": "Free",
    "subtitle": "Perfect for trying out the service",
    "price": "$0",
    "isLifetime": true,
    "features": [
      "2,000 words per month",
      "Basic humanization",
      "Standard processing speed",
      "Email support",
      "No login required"
    ],
    "isPopular": false
  },
  {
    "id": 2,
    "name": "Basic",
    "subtitle": "Best for students",
    "price": "$29",
    "isLifetime": false,
    "features": [
      "10,000 words per month",
      "Advanced humanization",
      "Faster processing speed",
      "Priority email support",
      "Save humanization history"
    ],
    "isPopular": true
  },
  {
    "id": 3,
    "name": "Pro",
    "subtitle": "Best for content creators",
    "price": "$79",
    "isLifetime": false,
    "features": [
      "50,000 words per month",
      "Maximum humanization quality",
      "Fastest processing speed",
      "Priority email & chat support",
      "Save humanization history",
      "Team member accounts",
      "API access"
    ],
    "isPopular": false
  }
];

function Billing() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editPlan, setEditPlan] = useState(null);

  const handleGetStarted = (plan) => {
    setSelectedPlan(plan.id);
    console.log("Selected plan:", plan);
  };

  const handleEditClick = (plan) => {
    setEditPlan(plan);
    setIsModalOpen(true);
  };

  const handleSaveChanges = () => {
    setIsModalOpen(false);
    // Add logic to save changes if needed
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditPlan(null);
  };

  return (
    <section className="relative md:max-w-7xl mx-auto">
      <div className="relative py-10">
        <div className="flex items-center justify-between">
          <h1 className="md:text-4xl text-2xl mb-2 md:font-bold text-[#111827]">Subscription Plans</h1>
          <p className="text-lg text-gray-200 max-w-2xl text-center font-sans flex gap-2 items-center bg-[#2563EB] p-2 rounded-full cursor-pointer">
            <IoIosAdd className="size-8" />Add Plan
          </p>
        </div>
      </div>
      <div className="mx-auto">
        {pricingData.length === 0 ? (
          <p className="text-center text-gray-700 text-lg">No pricing plans available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-16 sm:gap-8">
            {pricingData.map((plan) => (
              <div
                key={plan.id}
                className={`
                  relative bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-transparent shadow 
                  transition-all duration-300 hover:-translate-y-2 hover:border-[#1e4db2] 
                  ${selectedPlan === plan.id ? "ring-2 ring-amber-500" : ""}
                  flex flex-col
                `}
                role="region"
                aria-label={`Pricing plan: ${plan.name}`}
              >
                <div className="p-6 flex justify-between">
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-[#111827] mb-2">{plan.name}</h3>
                    <p className="text-[#1e4db2] text-sm sm:text-base mb-6">{plan.subtitle}</p>
                    <div className="text-3xl font-bold text-[#111827]">{plan.price}</div>
                  </div>
                  <div>
                    <FaRegEdit
                      className="size-5 cursor-pointer text-gray-600"
                      onClick={() => handleEditClick(plan)}
                    />
                  </div>
                </div>
                <div className="px-6 sm:px-8 pb-8 flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center ">
                        <div className="flex-shrink-0 rounded-full flex items-center justify-center mr-3">
                          <IoMdCheckmark className="size-5 text-[#22C55E]" />
                        </div>
                        <span className="text-[#111827] text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && editPlan && (
        <div className="fixed inset-0  backdrop-blur bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow">
            <h2 className="text-2xl font-bold mb-4">Edit Plan: {editPlan.name}</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Plan Name</label>
                <input
                  type="text"
                  value={editPlan.name}
                  onChange={(e) => setEditPlan({ ...editPlan, name: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 px-2 py-1 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Price ($)</label>
                <input
                  type="text"
                  value={editPlan.price}
                  onChange={(e) => setEditPlan({ ...editPlan, price: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 px-2 py-1 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <input
                  type="text"
                  value="30 days"
                  readOnly
                  className="mt-1 block w-full border border-gray-300 px-2 py-1 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Features</label>
                {editPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center mb-2 ">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => {
                        const newFeatures = [...editPlan.features];
                        newFeatures[index] = e.target.value;
                        setEditPlan({ ...editPlan, features: newFeatures });
                      }}
                      className="mt-1 block w-full border border-gray-300 px-2 py-1 rounded "
                    />
                    <RiDeleteBinLine className="cursor-pointer ml-2" />
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="px-4 py-2 bg-black text-white rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


    <PaymentManagement/>
    </section>
  );
}

export default Billing;