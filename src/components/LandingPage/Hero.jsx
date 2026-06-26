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

                    <section className="relative py-10 overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c89b3c]/10 blur-[150px]" />
                        </div>

                        <div className="relative max-w-7xl mx-auto px-3">

                            <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden">

                                {stats.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="group relative flex flex-col items-center justify-center py-12 px-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04]"
                                        >
                                            {/* Divider */}
                                            {index !== stats.length - 1 && (
                                                <div className="hidden lg:block absolute right-0 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                                            )}

                                            {/* Top Accent */}
                                            <div className="absolute top-0 left-0 h-1 w-0 bg-[#c89b3c] transition-all duration-500 group-hover:w-full" />

                                            {/* Glow */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute inset-0 bg-gradient-to-b from-[#c89b3c]/5 via-transparent to-transparent" />
                                            </div>

                                            {/* Icon */}
                                            <div className="relative mb-6">
                                                <div className="absolute inset-0 rounded-full bg-[#c89b3c]/25 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                                                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#c89b3c]/20 bg-white/[0.04] transition-all duration-500 group-hover:border-[#c89b3c]/60 group-hover:rotate-6">
                                                    <Icon
                                                        size={28}
                                                        strokeWidth={1.8}
                                                        className="text-[#c89b3c] transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                            </div>

                                            {/* Number */}
                                            <h3 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent tracking-tight">
                                                {item.value}
                                            </h3>

                                            {/* Label */}
                                            <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-white/60 text-center leading-relaxed">
                                                {item.label}
                                            </p>

                                            {/* Bottom Accent */}
                                            <div className="mt-6 h-px w-12 bg-[#c89b3c]/40 transition-all duration-500 group-hover:w-24 group-hover:bg-[#c89b3c]" />
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
