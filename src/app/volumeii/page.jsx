"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    ArrowRight,
    Users,
    BookOpen,
    Star,
    Sparkles,
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
        value: "∞",
        label: "Inspiration",
    },
];

export default function Hero() {
    const router = useRouter();

    return (
        <div className="bg-[#08070d]">
            {/* HERO SECTION */}
            <section className="relative min-h-svh overflow-hidden">
                <Image
                    src="/volume2.png"
                    alt="Eves Against The Odds Volume 2"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="absolute top-5 left-5 z-30 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2 text-white transition hover:bg-black/60"
                >
                    <ArrowLeft size={18} />
                    Back
                </button>

                {/* Content */}
                <div className="relative z-10 flex min-h-svh items-center">
                    <div className="max-w-7xl px-6 md:px-16 lg:px-24">
                        <p className="mb-4 uppercase tracking-[0.2em] text-sm md:text-base text-[#b99160] font-semibold">
                            BILLENNIUM DIVAS PRESENTS
                        </p>

                        <h1 className="font-bold uppercase tracking-[-0.04em] leading-none text-white text-[48px] md:text-[72px] lg:text-[96px]">
                            EVES AGAINST
                        </h1>

                        <h1 className="font-bold uppercase tracking-[-0.04em] leading-none text-[48px] md:text-[72px] lg:text-[96px] bg-linear-to-b from-pink-300 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
                            THE ODDS
                        </h1>

                        <p className="mt-6 max-w-3xl text-white/90 text-lg md:text-2xl font-serif italic leading-relaxed">
                            Celebrating{" "}
                            <span className="text-[#b99160] font-semibold">
                                25 Inspiring Women Entrepreneurs Stories
                            </span>
                            <br />
                            Who Turned Barriers Into Breakthroughs
                        </p>

                    </div>
                </div>
            </section>
            {/* VOLUME II SHOWCASE */}
            <section className="relative py-32 overflow-hidden bg-[#08070d]">
                {/* Background Glow */}
                <div className="absolute top-0 left-0 w-125 h-125 bg-fuchsia-600/20 blur-[180px]" />
                <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-600/20 blur-[180px]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* LEFT IMAGE */}
                        <div className="relative flex justify-center">

                            {/* Glow Behind Book */}
                            <div className="absolute w-105 h-105 rounded-full bg-violet-500/20 blur-[120px]" />

                            <div className="relative group">
                                <Image
                                    src="/volume1.png"
                                    alt="Volume I"
                                    width={700}
                                    height={700}
                                    className="object-contain transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-[0_30px_60px_rgba(236,72,153,0.4)]"
                                />
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>

                            <div className="inline-flex items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm text-pink-300 mb-6">
                                ✨ Previous Edition: Volume I
                            </div>

                            <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                                Continue the
                                <span className="block bg-linear-to-r from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                                    Journey
                                </span>
                            </h2>

                            <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                                Volume I brings together another powerful collection
                                of women entrepreneurs who shattered barriers,
                                overcame adversity, and built extraordinary success
                                stories that inspire generations.
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-8 mt-10">

                                <div>
                                    <h3 className="text-3xl font-bold text-white">
                                        25
                                    </h3>
                                    <p className="text-white/50 text-sm">
                                        Inspiring Stories
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-white">
                                        100%
                                    </h3>
                                    <p className="text-white/50 text-sm">
                                        Real Journeys
                                    </p>
                                </div>



                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 mt-12">

                                <Link
                                    href="/volumei"
                                    className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-500 to-fuchsia-600 px-8 py-4 text-white font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    Explore Volume I
                                    <ArrowRight size={18} />
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}