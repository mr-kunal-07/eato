"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Quote, ArrowRight, ArrowLeft } from "lucide-react";

const items = [
    {
        type: "woman",
        name: "Priya Sharma",
        role: "Founder, InnovateHer",
        image: "/women1.jpg",
        category: "Entrepreneur",
        story:
            "Built a successful startup empowering thousands of women entrepreneurs across India.",
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
        category: "Business Leader",
        story:
            "Turned challenges into opportunities and created a thriving business impacting countless lives.",
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
        category: "Author",
        story:
            "Inspiring women globally through leadership, storytelling, and meaningful impact.",
    },
    {
        type: "quote",
        quote:
            "The future belongs to women who dare to dream bigger.",
    },
];

export default function WomenStoriesGrid() {
    const router = useRouter();

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#120f20] via-[#170f24] to-[#251224] py-24">

            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-pink-500/10 blur-[140px]" />
                <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[140px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="
            mb-8
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-lg
            border
            border-white/20
            bg-white/[0.05]
            text-white
            text-sm
            font-medium
            hover:bg-white/10
            hover:border-pink-400/30
            transition-all
            duration-300
          "
                >
                    <ArrowLeft size={18} />
                    Back
                </button>

                {/* Heading */}
                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <h2 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight">
                        Stories That
                        <span className="block text-pink-300">
                            Inspire Generations
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-white/60">
                        Meet some of the remarkable women featured in the book
                        and discover the wisdom that shaped their journey.
                    </p>

                </div>

                {/* SAME 3 COLUMN LAYOUT */}
                <div className="grid gap-8 lg:grid-cols-3">

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-pink-400/30
                hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)]
              "
                        >
                            {item.type === "woman" ? (
                                <>
                                    {/* IMAGE */}
                                    <div className="relative h-[460px] overflow-hidden">

                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={600}
                                            height={700}
                                            className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                                        />

                                        {/* Overlays */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#07070d] via-black/20 to-transparent" />

                                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/15 via-transparent to-violet-500/10" />

                                        {/* Category Badge */}
                                        <div className="absolute left-5 top-5">
                                            <span
                                                className="
                          rounded-full
                          border
                          border-white/20
                          bg-black/20
                          px-4
                          py-2
                          text-xs
                          uppercase
                          tracking-[0.2em]
                          text-white
                          backdrop-blur-md
                        "
                                            >
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative p-8">

                                        <h3 className="font-serif text-3xl text-white">
                                            {item.name}
                                        </h3>

                                        <p className="mt-2 text-sm uppercase tracking-[0.25em] text-pink-300">
                                            {item.role}
                                        </p>

                                        <div className="mt-5 h-px w-16 bg-gradient-to-r from-pink-400 to-transparent" />

                                        <p
                                            className="
                        mt-5
                        text-white/65
                        leading-relaxed
                        transition-all
                        duration-300
                        group-hover:text-white/85
                      "
                                        >
                                            {item.story}
                                        </p>

                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* QUOTE CARD */}
                                    <div className="relative flex min-h-[620px] flex-col justify-center p-10">

                                        {/* Watermark */}
                                        <Quote
                                            size={150}
                                            className="
                        absolute
                        right-5
                        top-5
                        text-white/[0.04]
                      "
                                        />

                                        {/* Accent Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-violet-500/5" />

                                        <div className="relative z-10">

                                            <Quote
                                                size={52}
                                                className="mb-8 text-pink-300/80"
                                            />

                                            <p
                                                className="
                          font-serif
                          text-3xl
                          md:text-4xl
                          leading-[1.25]
                          text-white
                        "
                                            >
                                                “{item.quote}”
                                            </p>

                                            <div className="mt-10 h-px w-24 bg-gradient-to-r from-pink-400 to-transparent" />

                                        </div>

                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}