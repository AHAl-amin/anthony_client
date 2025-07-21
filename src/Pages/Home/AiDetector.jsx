


import React, { useState } from 'react';
import aiOne from '../../../public/image/home/ai1.png'
import aiTwo from '../../../public/image/home/ai2.png'
import aiThree from '../../../public/image/home/ai3.png'

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
    ];

    return (
        <div className="py-16 px-4" style={{ backgroundColor: '#6586AC' }}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-8">Our AI Detector is Helpful to...</h2>
                </div>

                {/* User Type Cards */}
                <div className="grid md:grid-cols-3 gap-30 mb-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            //   className="bg-white rounded-2xl p-6 text-center shadow-lg cursor-pointer"
                            className={`bg-white rounded-2xl p-6 text-center shadow-lg cursor-pointer ${selectedCard?.title === card.title ? 'border-b-4 border-[#2563EB]' : 'border-transparent'
                                }`}
                            onClick={() => setSelectedCard(card)}
                        >
                            <div className="mb-4">
                                <img
                                    src={card.image}
                                    alt={`${card.title} Image`}
                                    className="w-20 h-20 rounded-lg mx-auto object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold" style={{ color: '#111827' }}>
                                {card.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Detailed Section */}
                {selectedCard && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left side - Image */}
                            <div className="order-2 md:order-1">
                                <img
                                    src={selectedCard.image}
                                    alt={`${selectedCard.title} with VR headset`}
                                    className="w-full h-[600px] object-cover object-center rounded-xl"
                                />
                            </div>

                            {/* Right side - Content */}
                            <div className="order-1 md:order-2">
                                <h3 className="text-2xl font-bold mb-3" style={{ color: '#111827' }}>
                                    {selectedCard.title}
                                </h3>
                                <p className="mb-6" style={{ color: '#2563EB' }}>
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
