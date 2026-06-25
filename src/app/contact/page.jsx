"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaLinkedin, FaPhoneAlt, FaUser, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Failed to submit your interest.");
            }

            form.reset();
            setStatus({ type: "success", message: result.message });
        } catch (error) {
            setStatus({
                type: "error",
                message: error.message || "Failed to submit your interest.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#08070d] py-24 md:py-32"
        >
            {/* Back Button */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-white/70 hover:text-white transition-colors duration-300"
                >
                    <FaArrowLeft size={16} />
                    Back to Home
                </Link>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-0 top-0 h-100 w-100 rounded-full bg-pink-500/10 blur-[150px]" />
                <div className="absolute right-0 bottom-0 h-100 w-100 rounded-full bg-violet-500/10 blur-[150px]" />
            </div>


            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <span className="text-xs uppercase tracking-[0.5em] text-pink-300">
                            Share Your Journey
                        </span>

                        <h2 className="mt-5 font-serif text-4xl leading-tight text-white md:text-5xl">
                            Get Featured In
                            <span className="block bg-linear-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                                Upcomming Edition Of
                            </span>
                            Eves Against The Odds
                        </h2>

                        <p className="mt-8 text-lg leading-relaxed text-white/60">
                            No story lives unless someone wants to listen. The stories we love best do live in us forever.&quot; &ldquo;Those who tell stories rule the world.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
                                <h4 className="text-lg font-semibold text-white">
                                    Who Can Apply?
                                </h4>

                                <p className="mt-3 text-white/60">
                                    Women Founders, business leaders, startup
                                    entrepreneurs, social innovators, and
                                    women creating meaningful impact.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
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
                        className="rounded-[36px] border border-white/10 bg-white/3 p-8 backdrop-blur-xl md:p-10"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Name */}
                            <div>
                                <label className="mb-3 block text-sm text-white/70">
                                    Full Name
                                </label>

                                <div className="relative">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />

                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        required
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white outline-none transition-all focus:border-pink-400/40"
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
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white outline-none focus:border-pink-400/40"
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
                                        name="phone"
                                        type="tel"
                                        placeholder="+91 9876543210"
                                        required
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white outline-none focus:border-pink-400/40"
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
                                        name="linkedin"
                                        type="url"
                                        placeholder="https://linkedin.com/in/..."
                                        required
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white outline-none focus:border-pink-400/40"
                                    />
                                </div>
                            </div>

                            {/* Business Name */}
                            <div>
                                <label className="mb-3 block text-sm text-white/70">
                                    Business / Startup Name
                                </label>

                                <input
                                    name="business"
                                    type="text"
                                    placeholder="Your company name"
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none focus:border-pink-400/40"
                                />
                            </div>



                            {/* Why Feature */}
                            <div>
                                <label className="mb-3 block text-sm text-white/70">
                                    Why Should We Feature You In Our Next Edition?
                                </label>

                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us what makes your story unique and inspiring..."
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none focus:border-pink-400/40"
                                />
                            </div>

                            {status.message && (
                                <p
                                    className={`rounded-2xl border px-4 py-3 text-sm ${status.type === "success"
                                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                                        : "border-red-400/30 bg-red-400/10 text-red-200"
                                        }`}
                                >
                                    {status.message}
                                </p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-2xl bg-linear-to-r from-violet-500/70 to-purple-500/20 px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Your Interest"}
                            </button>
                        </form>

                        {/* Disclaimer */}
                        <div className="mt-8 border-t border-white/10 pt-6">
                            <p className="text-xs leading-relaxed text-white/50">
                                <span className="block mb-3 font-semibold text-white/70">
                                    &#10022; Disclaimer
                                </span>
                                We reserve the right to select or reject applications at our sole discretion. All Rights Reserved by Billennium Divas Pvt. Ltd. &apos;No Plagiarism&apos;.
                                <br />
                                <br />
                                In case you are shortlisted by us for publishing your inspiring journey, we will share the next steps with you and the applicable terms & conditions (T&C).
                                <br />
                                <br />
                                <span className="font-semibold text-pink-300">
                                    (KINDLY NOTE: We &apos;DO NOT&apos; charge any fees whatsoever to publish your story in our book).
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
