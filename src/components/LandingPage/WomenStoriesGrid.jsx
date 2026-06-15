"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

const items = [
    {
        type: "woman",
        name: "Priya Sharma",
        role: "Founder, InnovateHer",
        image: "/women1.jpg",
        story:
            "Built a successful startup empowering thousands of women entrepreneurs.",
    },
    {
        type: "quote",
        quote:
            "Success begins the moment you decide not to give up on yourself.",
    },
    {
        type: "woman",
        name: "Ananya Patel",
        role: "CEO, GrowthNest",
        image: "/women2.jpg",
        story:
            "Turned challenges into opportunities and created a thriving business.",
    },
    {
        type: "quote",
        quote:
            "Every obstacle carries the seed of a greater opportunity.",
    },
    {
        type: "woman",
        name: "Meera Kapoor",
        role: "Author & Entrepreneur",
        image: "/women3.jpg",
        story:
            "Inspiring women globally through leadership, storytelling, and impact.",
    },
    {
        type: "quote",
        quote:
            "The future belongs to women who dare to dream bigger.",
    },
];

export default function WomenStoriesGrid() {
    return (
        <section className="relative bg-linear-to-b from-[#120f20] to-[#251224] py-20 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-500/10 blur-[120px]" />
                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-20">

                    <span className="text-xs uppercase tracking-[0.4em] text-white/50">
                        Featured Voices
                    </span>

                    <h2 className="mt-4 text-4xl md:text-6xl font-serif text-white leading-tight">
                        Stories That
                        <span className="block text-pink-300">
                            Inspire Generations
                        </span>
                    </h2>

                    <p className="mt-6 text-white/60 text-lg leading-relaxed">
                        Meet some of the remarkable women featured in the book and
                        discover the wisdom that shaped their journey.
                    </p>

                </div>

                {/* Cards Grid */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group rounded-[28px] overflow-hidden border border-white/10 bg-white/4 backdrop-blur-xl hover:border-pink-400/20 transition-all duration-500 hover:-translate-y-2"
                        >
                            {item.type === "woman" ? (
                                <>
                                    <div className="relative overflow-hidden">

                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={600}
                                            height={700}
                                            className="h-85 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-t from-[#08070d] via-transparent to-transparent" />

                                    </div>

                                    <div className="p-8">

                                        <h3 className="font-serif text-3xl text-white">
                                            {item.name}
                                        </h3>

                                        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-pink-300">
                                            {item.role}
                                        </p>

                                        <p className="mt-5 text-white/60 leading-relaxed">
                                            {item.story}
                                        </p>

                                    </div>
                                </>
                            ) : (
                                <div className="h-full flex flex-col justify-center p-10">

                                    <div className="mb-8">
                                        <Quote
                                            size={50}
                                            className="text-pink-300 opacity-70"
                                        />
                                    </div>

                                    <p className=" text-white text-2xl md:text-3xl font-serif leading-relaxed">
                                        &quot;{item.quote}&quot;
                                    </p>

                                    <div className="mt-8 h-px w-20 bg-pink-400/40" />

                                </div>
                            )}
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
