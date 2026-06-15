'use client';

import Navbar from './Navber';

export default function Hero() {
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
                        BILLENNIUM DIVAS FUND PRESENTS
                    </p>

                    <h1 className="font-bold uppercase tracking-[-0.04em] leading-[0.95] text-white text-[42px] md:text-[60px] lg:text-[80px]">
                        EVES AGAINST
                    </h1>

                    <h1 className="font-bold uppercase tracking-[-0.04em] leading-[0.95] text-[42px] md:text-[60px] lg:text-[80px] bg-[linear-gradient(180deg,#ff9df2_0%,#ff5cd6_40%,#ff2cb8_70%,#c61fff_100%)] bg-clip-text text-transparent">
                        THE ODDS
                    </h1>
                    <h2 className="mt-3 max-w-[750px] text-left text-[16px] md:text-[20px] lg:text-[26px] font-serif italic font-medium leading-relaxed text-[#E8DDF6]">
                        Celebrating <span className="text-[#b99160]">25 Inspiring Women Entrepreneurs</span>
                        <br />
                        Who Turned Barriers Into Breakthroughs
                    </h2>
                </div>
            </section>
            <section className="relative flex  items-center justify-center overflow-hidden bg-[#0B0715]">

                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute left-0 top-0 h-full w-[600px] bg-violet-700/20 blur-[180px]" />
                    <div className="absolute right-0 top-0 h-full w-[600px] bg-pink-600/15 blur-[180px]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-950/40 via-transparent to-pink-950/30" />
                </div>

                <div className=" relative md:hidden z-10 flex text-center w-full h-full flex-col justify-center px-6 md:px-16 lg:px-20">
                    <p className="uppercase tracking-[0.1em] py-4 text-sm md:text-md text-[#b99160] font-semibold mb-2">
                        BILLENNIUM DIVAS FUND PRESENTS
                    </p>

                    <h1 className="font-bold uppercase tracking-[-0.04em] leading-[0.95] text-white text-[42px] md:text-[60px] lg:text-[80px]">
                        EVES AGAINST
                    </h1>

                    <h1 className="font-bold mb-3 uppercase tracking-[-0.04em] leading-[0.95] text-[42px] md:text-[60px] lg:text-[80px] bg-[linear-gradient(180deg,#ff9df2_0%,#ff5cd6_40%,#ff2cb8_70%,#c61fff_100%)] bg-clip-text text-transparent">
                        THE ODDS
                    </h1>

                    <h2 className=" max-w-[750px] mb-6 text-[16px] md:text-[20px] lg:text-[26px] font-serif italic font-medium leading-relaxed text-[#E8DDF6]">
                        Celebrating <br /> <span className="text-[#b99160]">25 Inspiring Women Entrepreneurs</span>
                        <br />
                        Who Turned Barriers Into Breakthroughs
                    </h2>

                    <section className="relative w-full py-10">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid grid-cols-2 md:grid-cols-4">

                                {/* Item 1 */}
                                <div className="flex flex-col items-center text-center border-r border-white/10">
                                    <svg
                                        className="w-5 h-5 mb-4 text-white/60"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M16 14a4 4 0 10-8 0m8 0v1a2 2 0 002 2h1m-3-3a4 4 0 01-8 0m8 0H8"
                                        />
                                    </svg>

                                    <h3 className="text-white text-6xl font-serif font-bold">50+</h3>

                                    <p className="mt-2 text-[12px] tracking-[0.25em] uppercase text-white/50">
                                        Women Entrepreneurs
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="flex flex-col items-center text-center border-r border-white/10">
                                    <svg
                                        className="w-5 h-5 mb-4 text-white/60"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M12 6v12m0-12c-1.5-1-3.5-1.5-6-1.5v12c2.5 0 4.5.5 6 1.5m0-12c1.5-1 3.5-1.5 6-1.5v12c-2.5 0-4.5.5-6 1.5"
                                        />
                                    </svg>

                                    <h3 className="text-white text-6xl font-serif font-bold">2</h3>

                                    <p className="mt-2 text-[12px] tracking-[0.25em] uppercase text-white/50">
                                        Volumes Published
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="flex flex-col items-center text-center border-r border-white/10">
                                    <svg
                                        className="w-5 h-5 mb-4 text-white/60"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.05 3.232a1 1 0 00.95.69h3.398c.969 0 1.371 1.24.588 1.81l-2.75 1.998a1 1 0 00-.364 1.118l1.05 3.232c.3.922-.755 1.688-1.539 1.118l-2.75-1.998a1 1 0 00-1.176 0l-2.75 1.998c-.783.57-1.838-.196-1.539-1.118l1.05-3.232a1 1 0 00-.364-1.118L2.114 8.659c-.783-.57-.38-1.81.588-1.81H6.1a1 1 0 00.95-.69l1.05-3.232z"
                                        />
                                    </svg>

                                    <h3 className="text-white text-6xl font-serif font-bold">25</h3>

                                    <p className="mt-2 text-[12px] tracking-[0.25em] uppercase text-white/50">
                                        Stories Per Volume
                                    </p>
                                </div>

                                {/* Item 4 */}
                                <div className="flex flex-col items-center text-center">
                                    <svg
                                        className="w-5 h-5 mb-4 text-white/60"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"
                                        />
                                    </svg>

                                    <h3 className="text-white text-6xl font-serif font-bold">∞</h3>

                                    <p className="mt-2 text-[12px] tracking-[0.25em] uppercase text-white/50">
                                        Inspiration
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>


            </section>
        </div>
    );
}