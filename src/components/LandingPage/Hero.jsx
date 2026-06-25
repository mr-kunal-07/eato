'use client';

import Navbar from './Navber';
import {
    Users,
    BookOpen,
    Star,
    Sparkles,
    ShoppingBag,
} from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "50",
        label: "Women Entrepreneurs Stories",
    },
    {
        icon: BookOpen,
        value: "2",
        label: "Volumes Published",
    },
    {
        icon: Star,
        value: "25",
        label: "Stories Per Volume",
    },
    {
        icon: Sparkles,
        value: "\u221e",
        label: "Inspiration",
    },
];

export default function Hero() {
    const scrollToStores = () => {
        document.getElementById("available-worldwide")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div>
            {/* Navbar - Fixed at top */}
            <Navbar />

            <section className="w-full h-screen flex items-center justify-center overflow-hidden bg-[#08070d] relative">
                {/* Responsive Background Image */}
                <picture className="absolute inset-0 w-full h-full">
                    <source media="(min-width: 768px)" srcSet="/hor-Hero.png" />
                    <img
                        src="/vec-Hero.png"
                        alt="EATO Books Background"
                        className="w-full h-full object-cover"
                    />
                </picture>

                {/* Content Overlay */}
                <div className="relative z-10 hidden md:flex w-full h-full flex-col justify-center px-6 md:px-16 lg:px-20">
                    <p className="uppercase tracking-[0.2em] text-sm md:text-md text-[#b99160] font-semibold mb-2">
                        BILLENNIUM DIVAS PRESENTS
                    </p>

                    <h1 className="font-bold uppercase tracking-[-0.04em] leading-[0.95] text-white text-[42px] md:text-[60px] lg:text-[80px]">
                        EVES AGAINST
                    </h1>

                    <h1 className="font-bold uppercase tracking-[-0.04em] leading-[0.95] text-[42px] md:text-[60px] lg:text-[80px] bg-[linear-gradient(180deg,#ff9df2_0%,#ff5cd6_40%,#ff2cb8_70%,#c61fff_100%)] bg-clip-text text-transparent">
                        THE ODDS
                    </h1>
                    <h2 className="mt-3 max-w-[750px] text-left text-[16px] md:text-[20px] lg:text-[26px] font-serif italic font-medium leading-relaxed text-[#E8DDF6]">
                        Celebrating <span className="text-[#b99160]">25 Inspiring Women Entrepreneurs Stories</span>
                        <br />
                        Who Turned Barriers Into Breakthroughs
                    </h2>

                    <button
                        type="button"
                        onClick={scrollToStores}
                        className="mt-8 inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F4D03F] px-6 py-3 text-md font-semibold uppercase tracking-[0.18em] text-black shadow-lg shadow-yellow-600/20 transition-all duration-300 hover:scale-105 hover:from-[#C89B3C] hover:via-[#E6C766] hover:to-[#FFD700] hover:shadow-yellow-500/40 cursor-pointer"
                    >
                        <ShoppingBag size={18} />
                        Grab Your Copy
                    </button>
                </div>
            </section>
            <section className="relative flex  items-center justify-center overflow-hidden bg-linear-to-b from-[#161327] to-[#2b0f26]">

                <div className=" relative z-10 flex text-center w-full h-full flex-col justify-center px-6 md:px-16 lg:px-20">
                    <p className="uppercase md:hidden tracking-[0.1em] py-4 text-sm md:text-md text-[#b99160] font-semibold mb-2">
                        BILLENNIUM DIVAS PRESENTS
                    </p>

                    <h1 className="font-bold md:hidden uppercase tracking-[-0.04em] leading-[0.95] text-white text-[42px] md:text-[60px] lg:text-[80px]">
                        EVES AGAINST
                    </h1>

                    <h1 className="font-bold mb-3 md:hidden uppercase tracking-[-0.04em] leading-[0.95] text-[42px] md:text-[60px] lg:text-[80px] bg-[linear-gradient(180deg,#ff9df2_0%,#ff5cd6_40%,#ff2cb8_70%,#c61fff_100%)] bg-clip-text text-transparent">
                        THE ODDS
                    </h1>

                    <h2 className=" max-w-[750px] md:hidden mb-6 text-[16px] md:text-[20px] lg:text-[26px] font-serif italic font-medium leading-relaxed text-[#E8DDF6]">
                        Celebrating <br /> <span className="text-[#b99160]">25 Inspiring Women Entrepreneurs Stories</span>
                        <br />
                        Who Turned Barriers Into Breakthroughs
                    </h2>

                    <button
                        type="button"
                        onClick={scrollToStores}
                        className="mx-auto mb-4 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#08070d] transition-all duration-300 hover:scale-105 hover:bg-pink-100 md:hidden"
                    >
                        <ShoppingBag size={16} />
                        Grab Your Copy
                    </button>

                    <section className="relative py-8 overflow-hidden ">

                        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">

                                {stats.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="group relative flex flex-col items-center justify-center text-center px-6 py-10 md:py-14 border-b lg:border-b-0 border-white/10 transition-all duration-500 hover:bg-white/[0.02]"
                                        >
                                            {/* Vertical Borders */}
                                            {index !== stats.length - 1 && (
                                                <div className="hidden lg:block absolute top-0 right-0 h-full w-px bg-white/10" />
                                            )}

                                            {/* Icon Glow */}
                                            <div
                                                className="relative mb-5 transition-all duration-500 group-hover:scale-110"
                                            >
                                                <div className="absolute inset-0 bg-white/10 blur-xl rounded-full" />

                                                <div
                                                    className="relative w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03]"
                                                >
                                                    <Icon
                                                        size={22}
                                                        className="text-white/70"
                                                        strokeWidth={1.5}
                                                    />
                                                </div>
                                            </div>

                                            {/* Number */}
                                            <h3
                                                className="text-white text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-none tracking-tight transition-transform duration-500 group-hover:scale-105"
                                            >
                                                {item.value}
                                            </h3>

                                            {/* Label */}
                                            <p
                                                className="mt-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/50 leading-relaxed"
                                            >
                                                {item.label}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>


            </section>
        </div>
    );
}
