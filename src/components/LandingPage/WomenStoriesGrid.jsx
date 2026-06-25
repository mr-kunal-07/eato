"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import Link from "next/link";

const items = [
    {
        "id": 1,
        "type": "woman",
        "name": "Ms. Pabiben Rabari",
        "role": "Founder",
        "image": "/Vol1 Images/Pabiben Rabari.jpeg",
        "story": "The real empowerment is the ability to think and choose. Use maximum creativity in our work, match the potential in ourselves to fulfil our dreams and get self-respect and recognition."
    },
    {
        "id": 2,
        "type": "quote",
        "quote": "Build Value and the Valuation will Follow.",
        "author": "Mr. Bhavesh Kothari"
    },
    {
        "id": 3,
        "type": "woman",
        "name": "Dr. Tarita Shankar",
        "role": "Founder",
        "image": "/Vol1 Images/Tarita Shankar.jpeg",
        "story": "Successful leaders see the opportunities in every difficulty, rather than the difficulty in every opportunity."
    },
    {
        "id": 4,
        "type": "quote",
        "quote": "Women just know how to multitask, and this is exactly what leadership is about.",
        "author": "Ms. Shweta Shalini"
    },
    {
        "id": 5,
        "type": "woman",
        "name": "Dr. Ushy Mohan Das",
        "role": "Founder & Nucleus",
        "image": "/Vol1 Images/Ushy Mohan Das.jpeg",
        "story": "When your soul burns with purpose and passion, it's your duty to be burnt to ashes by it."
    },
    {
        "id": 6,
        "type": "quote",
        "quote": "Take decisions and then make them right.",
        "author": "Shre. Ratan Tata"
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
                                            className="h-85 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />


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

                                    {/* Divider Line */}
                                    <div className="mt-10 h-px w-24 bg-linear-to-r from-pink-400 to-transparent" />

                                    {/* Author Name */}
                                    {item.author && (
                                        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-pink-300">
                                            ~ {item.author}
                                        </p>
                                    )}

                                </div>
                            )}
                        </div>
                    ))}

                </div>
                {/* Explore More Button */}
                <div className="mt-16 flex justify-center">
                    <Link
                        href="/stories"
                        className="group inline-flex items-center gap-3 rounded-full border border-pink-400/30 bg-white/5 px-8 py-4 text-white backdrop-blur-md transition-all duration-300 hover:border-pink-300 hover:bg-pink-500/10 hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]"
                    >
                        <span className="font-medium tracking-wide">
                            Explore More Stories
                        </span>

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
