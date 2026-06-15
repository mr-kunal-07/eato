"use client";

import Link from "next/link";
import { FaArrowLeft, FaLinkedin, FaPhoneAlt, FaUser, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#08070d] py-24 md:py-32"
        >
            {/* Back Button */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 mb-8">
                <Link
                    href="/"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        uppercase
                        tracking-[0.3em]
                        text-white/70
                        hover:text-white
                        transition-colors
                        duration-300
                    "
                >
                    <FaArrowLeft size={16} />
                    Back to Home
                </Link>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[150px]" />
                <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />
            </div>
            

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <span className="text-xs uppercase tracking-[0.5em] text-pink-300">
                            Share Your Journey
                        </span>

                        <h2 className="mt-5 font-serif text-4xl leading-tight text-white md:text-6xl">
                            Get Featured In
                            <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                                Our Next Book
                            </span>
                        </h2>

                        <p className="mt-8 text-lg leading-relaxed text-white/60">
                            Are you a woman entrepreneur who has overcome
                            challenges, broken barriers, and created impact?
                            We'd love to hear your inspiring story.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                                <h4 className="text-lg font-semibold text-white">
                                    Who Can Apply?
                                </h4>

                                <p className="mt-3 text-white/60">
                                    Founders, business leaders, startup
                                    entrepreneurs, social innovators, and
                                    women creating meaningful impact.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                                <h4 className="text-lg font-semibold text-white">
                                    What We Look For
                                </h4>

                                <p className="mt-3 text-white/60">
                                    Courage, resilience, innovation,
                                    leadership, and inspiring stories that can
                                    motivate future generations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div
                        className="
                            rounded-[36px]
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-8
                            backdrop-blur-xl
                            md:p-10
                        "
                    >
                        <form className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="mb-3 block text-sm text-white/70">
                                    Full Name
                                </label>

                                <div className="relative">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />

                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="
                                            w-full
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-white/5
                                            py-4
                                            pl-12
                                            pr-4
                                            text-white
                                            outline-none
                                            transition-all
                                            focus:border-pink-400/40
                                        "
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-3 block text-sm text-white/70">
                                    Email Address
                                </label>

                                <div className="relative">
                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="
                                            w-full
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-white/5
                                            py-4
                                            pl-12
                                            pr-4
                                            text-white
                                            outline-none
                                            focus:border-pink-400/40
                                        "
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="mb-3 block text-sm text-white/70">
                                    Mobile Number
                                </label>

                                <div className="relative">
                                    <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />

                                    <input
                                        type="tel"
                                        placeholder="+91 9876543210"
                                        className="
                                            w-full
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-white/5
                                            py-4
                                            pl-12
                                            pr-4
                                            text-white
                                            outline-none
                                            focus:border-pink-400/40
                                        "
                                    />
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div>
                                <label className="mb-3 block text-sm text-white/70">
                                    LinkedIn Profile
                                </label>

                                <div className="relative">
                                    <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />

                                    <input
                                        type="url"
                                        placeholder="https://linkedin.com/in/..."
                                        className="
                                            w-full
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-white/5
                                            py-4
                                            pl-12
                                            pr-4
                                            text-white
                                            outline-none
                                            focus:border-pink-400/40
                                        "
                                    />
                                </div>
                            </div>

                            {/* Business Name */}
                            <div>
                                <label className="mb-3 block text-sm text-white/70">
                                    Business / Startup Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your company name"
                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        px-4
                                        py-4
                                        text-white
                                        outline-none
                                        focus:border-pink-400/40
                                    "
                                />
                            </div>



                            {/* Why Feature */}
                            <div>
                                <label className="mb-3 block text-sm text-white/70">
                                    Why Should We Feature You In Our Next Book?
                                </label>

                                <textarea
                                    rows={5}
                                    placeholder="Tell us what makes your story unique and inspiring..."
                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        px-4
                                        py-4
                                        text-white
                                        outline-none
                                        focus:border-pink-400/40
                                    "
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="
                                    w-full
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-violet-500/70
                                    to-purple-500/20
                                    px-8
                                    py-4
                                    font-medium
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:scale-[1.02]
                                "
                            >
                                Submit Your Story
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}