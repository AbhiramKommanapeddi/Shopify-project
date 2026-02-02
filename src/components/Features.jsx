import React from 'react';
import { Globe, FlaskConical, CircleSlash, Milk } from 'lucide-react';
import productLineup from '../assets/product-lineup.png';
import brandLogosImg from '../assets/brand-logos.png';

const Features = () => {
    const uniqueFeatures = [
        {
            title: 'Born, Brewed & Bottled in Brentford',
            description: 'With globally sourced ingredients, we handcraft every batch in the British Isles.',
            icon: <Globe size={24} className="text-white" />
        },
        {
            title: 'Nutrient Heavyweight Formula',
            description: 'Every ingredient has a job, and we hire the best. From Sea Buckthorn\'s omegas (3-6-9) + argans vitamin e, to jojoba sebum mimicry.',
            icon: <FlaskConical size={24} className="text-white" />
        },
        {
            title: 'No Cheap Tricks, No Fillers',
            description: 'We reject the industry\'s dirty secrets: no adulterated oils, no synthetic \'fragrances\' loopholes, no watered-down fillers.',
            icon: <CircleSlash size={24} className="text-white" />
        },
        {
            title: 'Bigger Bottle, Better Value',
            description: 'Our 100ml bottle of pure efficacy. 3X bigger than standard 30ml sized competitors. Replenish every 2-6 months & never run out via our automated subscription which includes free shipping',
            icon: <Milk size={24} className="text-white" />
        },
    ];

    return (
        <section className="bg-white py-16 space-y-16 overflow-hidden">
            {/* As Seen On */}
            <div className="container mx-auto px-4 text-center space-y-6">
                <div className="flex flex-wrap items-center justify-center">
                    <img src={brandLogosImg} alt="As Seen On" className="max-w-[800px] h-auto w-full px-4" />
                </div>
            </div>

            {/* Unique Selling Points */}
            <div className="bg-[#fcf5e9] py-20">
                <div className="container mx-auto px-4 space-y-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-center max-w-2xl mx-auto leading-tight">
                        What Makes Our Roots Beard Oil Unique?
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {uniqueFeatures.map((feature, idx) => (
                                <div
                                    key={feature.title}
                                    className={`p-8 space-y-6 flex flex-col items-start relative
                                        ${idx === 0 ? 'md:border-r md:border-b border-gray-400/30' : ''}
                                        ${idx === 1 ? 'md:border-b border-gray-400/30' : ''}
                                        ${idx === 2 ? 'md:border-r border-gray-400/30 border-t md:border-t-0' : ''}
                                        ${idx === 3 ? 'border-t md:border-t-0 border-gray-400/30' : ''}
                                    `}
                                >
                                    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center flex-shrink-0 shadow-lg mt-3">
                                        {feature.icon}
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-lg leading-snug">{feature.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="relative">
                            <img
                                src={productLineup}
                                alt="Product Lineup"
                                className="w-full h-auto object-contain rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
