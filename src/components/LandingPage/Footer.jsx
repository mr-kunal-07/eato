"use client";

import Link from "next/link";
import {
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";

const supporters = [
    {
        name: "BSE",
        logo: "/patners/BSE.png",
        description: "Supporting entrepreneurial growth, market awareness, and leadership visibility.",
    },
    {
        name: "PL",
        logo: "/patners/PL.png",
        description: "Enabling meaningful platforms for stories that inspire action and impact.",
    },
    {
        name: "MMB",
        logo: "/patners/MMB.png",
        description: "Championing collaboration, business networks, and women-led initiatives.",
    },
];

export default function Footer() {
    const scrollToStores = () => {
        document.getElementById("available-worldwide")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#08070d]">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[140px]" />
                <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[140px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Top CTA */}
                <div className="border-b border-white/10 py-20 text-center">
                    <span className="text-xs uppercase tracking-[0.5em] text-pink-300">
                        Empower • Inspire • Lead
                    </span>

                    <h2 className="mt-6 font-serif text-4xl text-white md:text-6xl">
                        Celebrating Women Who
                        <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                            Defied The Odds
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
                        A tribute to resilience, leadership, determination,
                        and entrepreneurial excellence.
                    </p>

                    <div className="mt-20 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-white/[0.05] p-6 md:p-10 lg:p-10 backdrop-blur-2xl">
                        <div className="grid gap-10 xl:grid-cols-[400px_1px_1fr] xl:items-center">

                            {/* Featured Partner */}
                            <a
                                href="https://billenniumdivas.fund/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-[32px] border border-pink-500/15 bg-gradient-to-br from-pink-500/10 via-white/[0.04] to-violet-500/10 p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/30 hover:shadow-[0_25px_60px_rgba(236,72,153,0.15)]"
                            >
                                {/* Glow */}
                                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-pink-500/20 blur-3xl" />
                                    <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
                                </div>

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="flex h-40 w-40 items-center justify-center rounded-[30px] border border-white/10 bg-gradient-to-br from-pink-500/20 to-violet-500/20 backdrop-blur-xl transition-transform duration-500 group-hover:scale-105">
                                        <span className="font-serif text-7xl font-bold text-pink-300">
                                            BD
                                        </span>
                                    </div>

                                    <div className="mt-8 inline-flex items-center rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-300">
                                        Official Partner
                                    </div>

                                    <h3 className="mt-6 font-serif text-3xl md:text-4xl text-white">
                                        Billennium Divas
                                    </h3>

                                    <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
                                        The driving force behind Eves Against The Odds, amplifying
                                        women entrepreneur stories and creating opportunities for
                                        future changemakers.
                                    </p>
                                </div>
                            </a>

                            {/* Divider */}
                            <div className="hidden xl:block h-full w-px bg-gradient-to-b from-transparent via-[#c89b3c]/30 to-transparent" />

                            {/* Supporters */}
                            <div className="relative">

                                {/* Header */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="inline-flex items-center gap-4">
                                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c89b3c]" />
                                        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c89b3c]">
                                            Supported By
                                        </span>
                                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c89b3c]" />
                                    </div>
                                </div>

                                {/* Cards */}
                                <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                    {supporters.map((supporter) => (
                                        <div
                                            key={supporter.name}
                                            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#c89b3c]/30 hover:bg-white/[0.07] hover:shadow-[0_20px_40px_rgba(200,155,60,0.12)]"
                                        >
                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                <div className="absolute top-0 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[#c89b3c]/15 blur-3xl" />
                                            </div>

                                            <div className="relative z-10 flex flex-col items-center text-center">
                                                <div className="flex h-36 w-full items-center justify-center">
                                                    <img
                                                        src={supporter.logo}
                                                        alt={supporter.name}
                                                        className="max-h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>

                                                <div className="mt-4 h-px w-12 bg-gradient-to-r from-transparent via-[#c89b3c]/50 to-transparent" />

                                                <h3 className="mt-5 text-lg font-bold text-white">
                                                    {supporter.name}
                                                </h3>

                                                <p className="mt-3 text-sm leading-relaxed text-white/60">
                                                    {supporter.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/* Main Footer */}
                <div className="grid gap-12 py-20 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h3 className="font-serif text-3xl text-white">
                            Eves Against
                            <span className="block text-pink-300">
                                The Odds
                            </span>
                        </h3>

                        <p className="mt-5 leading-relaxed text-white/60">
                            Inspiring stories of women entrepreneurs,
                            changemakers, and visionaries who transformed
                            challenges into opportunities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white">
                            Quick Links
                        </h4>

                        <ul className="mt-6 space-y-3 text-white/60">
                            <li>
                                <Link href="/" className="hover:text-pink-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#stories"
                                    className="hover:text-pink-300"
                                >
                                    Stories
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#about"
                                    className="hover:text-pink-300"
                                >
                                    About Book
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#authors"
                                    className="hover:text-pink-300"
                                >
                                    Authors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href=""
                                    className="hover:text-pink-300"
                                >
                                    Billennium Divas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/gallery"
                                    className="hover:text-pink-300"
                                >
                                    Gallery
                                </Link>
                            </li>



                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-pink-300"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h4 className="text-lg font-semibold text-white">
                            Follow Us
                        </h4>

                        <div className="mt-6 space-y-4">
                            <a
                                href="https://www.linkedin.com/company/evesagainsttheodds/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white/60 transition-colors duration-300 hover:text-pink-300"
                            >
                                <FaLinkedin size={20} />
                                <span>LinkedIn</span>
                            </a>

                            <a
                                href="https://www.facebook.com/evesagainsttheodds"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white/60 transition-colors duration-300 hover:text-pink-300"
                            >
                                <FaFacebook size={20} />
                                <span>Facebook</span>
                            </a>

                        </div>
                        <div className="mt-10">
                            <button
                                type="button"
                                onClick={scrollToStores}
                                className="mt-8 inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F4D03F] px-6 py-3 text-md font-semibold uppercase tracking-[0.18em] text-black shadow-lg shadow-yellow-600/20 transition-all duration-300 hover:scale-105 hover:from-[#C89B3C] hover:via-[#E6C766] hover:to-[#FFD700] hover:shadow-yellow-500/40 cursor-pointer"
                            >
                                Grab Your Copy
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-center md:flex-row">
                    <p className="text-sm text-white/40">
                        © 2026 Billennium Divas Pvt. Ltd. All Rights Reserved.
                    </p>

                    <p className="text-sm text-white/40">
                        Designed with passion for inspiring women entrepreneurs.
                    </p>

                </div>
            </div>
        </footer>
    );
}
