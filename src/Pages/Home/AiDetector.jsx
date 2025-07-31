


import React, { useState } from 'react';
import aiOne from '../../../public/image/home/ai1.png'
import aiTwo from '../../../public/image/home/ai2.png'
import aiThree from '../../../public/image/home/ai3.png'
import aiFour from '../../../public/image/home/ai4.png'

function AiDetector() {
    const [selectedCard, setSelectedCard] = useState(null);

    const cards = [
        {
            title: 'SEO Agencies',
            image: aiTwo,
            description: 'Protect your SEO strategies with our AI Checker to ensure high-quality, original content.',
            features: [
                'Ensure content is indexed properly.',
                'Verify authenticity of agency submissions.',
                'Boost rankings with unique content.',
                'Get insights on content authenticity.',
            ],
        },
        {
            title: 'Marketers',
            image: aiThree,
            description: 'Enhance your marketing campaigns by ensuring original and engaging content.',
            features: [
                'Validate marketing materials for originality.',
                'Improve campaign performance with AI insights.',
                'Ensure compliance with content guidelines.',
                'Increase audience engagement with unique content.',
            ],
        },
        {
            title: 'Content Creators',
            image: aiOne,
            description: 'Protect your content from copy penalties and keep your rankings safe.',
            features: [
                'Ensure your content gets indexed by using our AI Checker.',
                'Verify authenticity of freelancer or agency articles.',
                'Publish unique content that captivates your audience.',
                'Get detailed insights on content origin.',
            ],
        },
        {
            title: 'Students',
            image: aiFour,
            description: 'Protect your content from copy penalties and keep your rankings safe.',
            features: [
                'Ensure your content gets indexed by using our AI Checker.',
                'Verify authenticity of freelancer or agency articles.',
                'Publish unique content that captivates your audience.',
                'Get detailed insights on content origin.',
            ],
        },
    ];

    return (
        <div className="py-16 px-4 inter" style={{ backgroundColor: '#011E39' }}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="md:text-3xl text-2xl font-bold text-white mb-8">Our AI Detector is Helpful to...</h2>
                </div>

                {/* User Type Cards */}
                <div className="grid md:grid-cols-4 gap-10 mb-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`text-center cursor-pointer ${selectedCard?.title === card.title ? 'border-b-2 pb-3 border-[#E15111]' : 'border-transparent'
                                }`}
                            onClick={() => setSelectedCard(card)}
                        >
                            <div className="mb-4">
                                <img
                                    src={card.image}
                                    alt={`${card.title} Image`}
                                    className="w-full h-50 rounded-lg mx-auto object-cover object-center"
                                />
                            </div>
                            <h3 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                                {card.title}
                            </h3>

                            {/* Show details below card only on small screens */}
                            <div className="block md:hidden">
                                {selectedCard?.title === card.title && (
                                    <div className="bg-gray-100 mt-6 rounded-2xl p-6 shadow-lg text-left">
                                        <img
                                            src={card.image}
                                            alt={`${card.title} detailed image`}
                                            className="w-full h-auto mb-4 rounded-xl"
                                        />
                                        <h3 className="text-xl font-bold mb-2 text-[#111827]">{card.title}</h3>
                                        <p className="mb-4 text-[#30B2A8]">{card.description}</p>
                                        <ul className="space-y-3">
                                            {card.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start space-x-2">
                                                    <span className="w-3 h-3 bg-[#111827] rounded-full mt-1 flex-shrink-0"></span>
                                                    <span className="text-[#111827]">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>


                {/* Detailed Section */}
                {selectedCard && (
                    <div className="bg-gray-100 max-w-5xl mx-auto mt-10 hidden md:block  rounded-2xl p-8 shadow-lg">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Left side - Image */}
                            <div className="order-2 md:order-1">
                                <img
                                    src={selectedCard.image}
                                    alt={`${selectedCard.title} with VR headset`}
                                    className=" h-full w-[380px] rounded-xl"
                                />
                            </div>

                            {/* Right side - Content */}
                            <div className="order-1 md:order-2">
                                <h3 className="text-2xl font-bold mb-3" style={{ color: '#111827' }}>
                                    {selectedCard.title}
                                </h3>
                                <p className="mb-6" style={{ color: '#30B2A8' }}>
                                    {selectedCard.description}
                                </p>

                                {/* Feature List */}
                                <div className="space-y-10">
                                    {selectedCard.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start space-x-3">
                                            <div
                                                className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5"
                                                style={{ backgroundColor: '#111827' }}
                                            ></div>
                                            <p style={{ color: '#111827' }}>{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AiDetector;
