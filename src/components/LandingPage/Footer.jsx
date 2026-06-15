"use client";

import Link from "next/link";
import {
    FaLinkedin,
    FaFacebook,
    FaEnvelope,
    FaGlobe,
    FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
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
                                    href="#stories"
                                    className="hover:text-pink-300"
                                >
                                    Stories
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
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    text-white/60
                                    transition-colors
                                    duration-300
                                    hover:text-pink-300
                                "
                            >
                                <FaLinkedin size={20} />
                                <span>LinkedIn</span>
                            </a>

                            <a
                                href="https://www.facebook.com/evesagainsttheodds"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    text-white/60
                                    transition-colors
                                    duration-300
                                    hover:text-pink-300
                                "
                            >
                                <FaFacebook size={20} />
                                <span>Facebook</span>
                            </a>
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