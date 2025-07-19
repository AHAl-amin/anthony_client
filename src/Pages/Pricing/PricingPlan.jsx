// "use client";
// import { useState } from "react";
// import { Check, ArrowRight } from "lucide-react";

// const pricingData = [
//   {
//     "id": 1,
//     "name": "Basic Memorial",
//     "subtitle": "Essential features for remembrance",
//     "price": "Free",
//     "isLifetime": false,
//     "features": [
//       "Create one memorial page",
//       "Basic photo uploads (up to 5)",
//       "Public sharing option",
//       "Basic support"
//     ],
//     "buttonText": "Create a Memorial",
//     "isPopular": false
//   },
//   {
//     "id": 2,
//     "name": "Premium Legacy",
//     "subtitle": "Enhanced features for lasting memories",
//     "price": "$15",
//     "isLifetime": true,
//     "lifetimeText": "Lifetime Premium",
//     "features": [
//       "Unlimited memorial pages",
//       "Advanced photo and video uploads",
//       "Private sharing options",
//       "Custom themes",
//       "Priority support"
//     ],
//     "buttonText": "Create a Memorial",
//     "isPopular": true
//   },
//   {
//     "id": 3,
//     "name": "Family Circle",
//     "subtitle": "Collaborative features for families",
//     "price": "$40",
//     "isLifetime": true,
//     "lifetimeText": "Lifetime premium for up to 4 family members",
//     "features": [
//       "All Premium features",
//       "Up to 4 family member accounts",
//       "Collaborative editing",
//       "Advanced analytics",
//       "24/7 premium support"
//     ],
//     "buttonText": "Create a Memorial",
//     "isPopular": false
//   }
// ]
// // Bird/Dove SVG Component (Memoized)


// function PricingPlan() {
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const plans = pricingData || []; // Fallback to empty array if JSON is unavailable

//   const handleGetStarted = (plan) => {
//     setSelectedPlan(plan.id);
//     console.log("Selected plan:", plan);
//     // Add payment logic here (e.g., redirect to payment gateway)
//   };


//   ;

//   return (
//     <section className="relative lg:w-[60%] md:w-[60%]    mx-auto min-h-screen py-16 px-4">
//       {/* Header Section */}
//       <div className="relative py-20">

//         <div className="flex flex-col items-center justify-center">
//           <h1 className="text-3xl md:font-bold text1  "> Plans & Pricing</h1>

//           <p className="text-lg text max-w-2xl text-center font-sans">
//             Choose the plan that best fits your needs for preserving and honoring memories.
//           </p>
//         </div>
//       </div>

//       {/* Pricing Cards */}
//       <div className=" mx-auto">
//         {plans.length === 0 ? (
//           <p className="text-center text-gray-700 text-lg">No pricing plans available.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:gap-16 sm:gap-8">
//             {plans.map((plan) => (


//               <div
//                 key={plan.id}
//                 className={`
//     relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl 
//     hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 
//     ${selectedPlan === plan.id ? "ring-2 ring-amber-500" : ""}
//     flex flex-col
//   `}
//                 role="region"
//                 aria-label={`Pricing plan: ${plan.name}`}
//               >
//                 {/* Card Header */}
//                 <div className="p-6">
//                   <h3 className="text-xl md:text-3xl font-bold text-[#BA927C] mb-2 text-center">{plan.name}</h3>
//                   <p className="text-gray-600 text-center text-sm sm:text-base mb-6">{plan.subtitle}</p>
//                 </div>

//                 {/* Price Section */}
//                 <div className="px-6 sm:px-8 pb-6 relative">
//                   <div className="absolute z-10 w-50">
//                     <div className="text-3xl font-bold text mb-2">{plan.price}</div>
//                     {plan.isLifetime && (
//                       <div className="text text-sm">{plan.lifetimeText}</div>
//                     )}
//                   </div>
//                   <img
//                     src="../../../public/img/Banner/pricingImage.png"
//                     className="absolute left-[-40px] z-0 top-[-14px]"
//                     alt=""
//                   />
//                 </div>

//                 {/* Features List */}
//                 <div className="px-6 sm:px-8 pb-8 mt-24 flex-1 flex flex-col">
//                   <ul className="space-y-3 mb-8">
//                     {plan.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center">
//                         <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#BA927C] flex items-center justify-center mr-3">
//                           <Check className="w-3 h-3 text-gray-300" />
//                         </div>
//                         <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* CTA Button (fixed to bottom) */}
//                   <button
//                     onClick={() => handleGetStarted(plan)}
//                     className="button flex gap-2 items-center justify-center mt-auto"
//                   >
//                     <span>{plan.buttonText}</span>
//                     <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>

//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default PricingPlan;

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
        <section className="relative md:max-w-6xl md:w-[60%] mx-auto py-16 ">
            <div className="relative py-20">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="md:text-4xl text-2xl mb-2 md:font-bold text-[#111827]">Choose the plan that fits your writing needs</h1>
                    <p className="text-lg text-gray-500 max-w-2xl text-center font-sans">
                        AI-detection removal that keeps your tone, intent, and privacy intact
                    </p>
                </div>
            </div>
            <div className="mx-auto">
                {plans.length === 0 ? (
                    <p className="text-center text-gray-700 text-lg">No pricing plans available.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-16 sm:gap-8">
                        {plans.map((plan) => (
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
                                <div className="p-6">
                                    <h3 className="text-xl md:text-3xl font-bold text-[#111827] mb-2 ">{plan.name}</h3>
                                    <p className="text-[#1e4db2]  text-sm sm:text-base mb-6">{plan.subtitle}</p>
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
                                        className=" text-black border border-[#1e4db2] cursor-pointer  py-2 px-4 rounded-lg flex gap-2 items-center justify-center mt-auto hover:bg-[#1e4db2] hover:text-gray-200 transition-colors"
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