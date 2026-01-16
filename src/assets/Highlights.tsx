import React from 'react';
import { GiCoffeeBeans } from "react-icons/gi";
import { LuCoffee, LuChefHat } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";

interface HighlightItem {
    id: number;
    title: string;
    description: string;
    Icon: React.ElementType;
}

const Highlights: React.FC = () => {
    const highlightData: HighlightItem[] = [
        {
            id: 1,
            title: "Excellent Beans",
            description: "Sourcing only the top 1% of specialty beans for maximum clarity.",
            Icon: GiCoffeeBeans
        },
        {
            id: 2,
            title: "Fresh Roasts",
            description: "Roasted on demand and shipped within 24h for peak aroma.",
            Icon: LuChefHat
        },
        {
            id: 3,
            title: "Perfect Cup",
            description: "A seamless experience from the first click to the final sip.",
            Icon: LuCoffee
        },
        {
            id: 4,
            title: "Expert Support",
            description: "Direct access to certified baristas for home-brewing advice.",
            Icon: HiOutlineUserGroup
        },
    ];

    return (
        <section className="w-full py-16">
            <div className="space-y-16">
                {/* Header matched to Hero H1 style */}
                <div className="text-center lg:text-start">
                    <h1 className="font-semibold text-center text-4xl leading-tight">
                        <span className="inline-flex items-center gap-2">
                            Why Choose <GiCoffeeBeans />
                        </span> NA Coffee & Roastery?
                    </h1>

                </div>

                {/* 4-Box Grid with Backdrop Blur */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {highlightData.map(({ id, title, description, Icon }) => (
                        <div
                            key={id}
                            className="p-8 rounded-2xl bg-white/20 backdrop-blur-md border border-[#4b2c20]/5 flex flex-col items-center lg:items-start text-center lg:text-start transition-all duration-300 hover:scale-[1.03] hover:bg-white/30 group"
                        >
                            {/* React Icon Component Usage */}
                            <div className="bg-[#4b2c20] text-white rounded-full p-4 mb-6 shadow-xl transition-transform group-hover:scale-110">
                                <Icon size={28} />
                            </div>
                            <h4 className="font-bold text-xl mb-3 text-[#4b2c20]">{title}</h4>
                            <p className="text-sm opacity-90 leading-relaxed font-medium text-[#4b2c20]">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
