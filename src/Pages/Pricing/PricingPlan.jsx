

"use client";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { ArrowRight } from "lucide-react";

const pricingData = [
    {
        "id": 1,
        "name": "Free",
        "subtitle": "Perfect for trying out the service",
        "price": "$0 ",
        "isLifetime": true,
        "features": [
            "2,000 words per month",
            "Basic humanization",
            "Standard processing speed",
            "Email support",
            "No login required"
        ],
        "buttonText": "Start for Free",
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
        "buttonText": "Get Started",
        "isPopular": true
    },
    {
        "id": 3,
        "name": "Pro",
        "subtitle": "Best for content creators",
        "price": "$79 ",
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
        "buttonText": "Get Started",
        "isPopular": false
    }
];

function PricingPlan() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const plans = pricingData || [];

    const handleGetStarted = (plan) => {
        setSelectedPlan(plan.id);
        console.log("Selected plan:", plan);
    };

    return (
        <section className="relative md:max-w-6xl md:w-[60%] mx-auto md:py-16 py-10 px-6  inter">
            <div className="relative md:py-20">
                <div className="flex flex-col items-center justify-center py-8">
                    <h1 className="md:text-4xl text-center text-[16px] mb-2 md:font-bold text-[#111827]">Choose the plan that fits your writing needs</h1>
                    <p className="text-[16px] text-gray-500 max-w-2xl text-center font-sans">
                        AI-detection removal that keeps your tone, intent, and privacy intact
                    </p>
                </div>
            </div>
            <div className="mx-auto">
                {plans.length === 0 ? (
                    <p className="text-center text-gray-700 text-lg">No pricing plans available.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 md:gap-16 gap-8 ">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`
                  relative bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-transparent hover:border-[#1e4db2]  shadow 
                 transition-all duration-300 hover:-translate-y-2  
                  ${selectedPlan === plan.id ? "ring-2 ring-amber-500" : ""}
                  flex flex-col
                  
                `}
                                role="region"
                                aria-label={`Pricing plan: ${plan.name}`}
                            >
                                <div className="p-6">
                                    <h3 className="text-xl md:text-3xl font-bold text-[#111827] mb-2 ">{plan.name}</h3>
                                    <p className="text text-sm sm:text-base mb-6">{plan.subtitle}</p>
                                    <div className="text-3xl font-bold text-[#111827]  ">{plan.price}</div>
                                </div>




                                <div className="px-6 sm:px-8 pb-8 flex-1 flex flex-col">
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center">
                                                <div className="flex-shrink-0  rounded-full  flex items-center justify-center mr-3">
                                                    <IoMdCheckmark className="  size-5 text-[#22C55E]" />
                                                </div>
                                                <span className="text-[#111827] text-sm sm:text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => handleGetStarted(plan)}
                                        className=" text-gray-100  bg cursor-pointer  py-2 px-4 rounded-lg flex gap-2 items-center justify-center mt-auto  hover:text-gray-200 transition-colors"
                                    >
                                        <span>{plan.buttonText}</span>

                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default PricingPlan;