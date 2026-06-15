"use client";

import Image from "next/image";
import { useState } from "react";
import {
    BookOpen,
    Users,
    Star,
    ArrowRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const highlights = [
    {
        icon: Users,
        title: "50+ Inspiring Women",
        description: "Real entrepreneurial journeys and transformative experiences.",
    },
    {
        icon: BookOpen,
        title: "Two Published Volumes",
        description: "A collection of powerful stories, insights, and lessons.",
    },
    {
        icon: Star,
        title: "Actionable Inspiration",
        description: "Practical wisdom to help readers grow and lead.",
    },
];

const purchasePlatforms = [
    { name: "Notion Press", icon: "📚", links: { vol1: "https://bit.ly/NPeato", vol2: "https://bit.ly/NPeatoII" } },
    { name: "Flipkart", icon: "🛒", links: { vol1: "https://bit.ly/FKeato", vol2: "https://bit.ly/FKeatoII" } },
    { name: "Amazon", icon: "🔵", links: { vol1: "https://amzn.to/3bd90k9", vol2: "https://amzn.to/3pgBNr6" } },
    { name: "Amazon Kindle", icon: "📱", links: { vol1: "https://amzn.to/3rzUgPS", vol2: "https://amzn.to/3CXAFAS" } },
    { name: "Apple EBooks", icon: "🍎", links: { vol1: "https://apple.co/3g16z2H", vol2: "https://apple.co/3ejmps7" } },
    { name: "Google Play", icon: "▶️", links: { vol1: "https://bit.ly/Goeato", vol2: "https://bit.ly/GPeatoII" } },
    { name: "Booktopia", icon: "🌏", links: { vol1: "https://bit.ly/BTeato", vol2: "https://bit.ly/BAeatoII" } },
    { name: "Rakuten Kobo", icon: "📖", links: { vol1: "https://bit.ly/RKeato", vol2: "https://bit.ly/RKeatoII" } },
];

export default function AboutBook() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isHovering, setIsHovering] = useState(false);

    return (<section className="relative overflow-hidden bg-[#08070d] py-24 md:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-24 top-0 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[150px]" />
            <div className="absolute -right-24 bottom-0 h-[500px] w-[500px] rounded-full bg-pink-500/30 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">

                {/* Left Side */}
                <div className="relative flex justify-center">

                    <div className="relative group">

                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-[120px]" />

                        {/* Floating Book */}
                        <div
                            className="
                                relative
                                transition-all
                                duration-700
                                group-hover:-translate-y-4
                                group-hover:rotate-1
                            "
                        >
                            <Image
                                src="/vec-Hero.png"
                                alt="Book Cover"
                                width={520}
                                height={700}
                                priority
                                className="
                                    h-auto
                                    rounded-2xl
                                    object-contain
                                    drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                                "
                            />
                        </div>

                        {/* Floating Badge */}
                        <div
                            className="
                                absolute
                                -right-6
                                top-10
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                px-5
                                py-3
                                backdrop-blur-xl
                            "
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                                Volume I & II
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div
                    className="
                        rounded-[32px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-8
                        backdrop-blur-xl
                        md:p-12
                    "
                >
                    {/* Badge */}
                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-4
                            py-2
                        "
                    >
                        <BookOpen
                            size={14}
                            className="text-pink-300"
                        />

                        <span
                            className="
                                text-[11px]
                                uppercase
                                tracking-[0.25em]
                                text-white/60
                            "
                        >
                            About The Book
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="
                            mt-6
                            font-serif
                            text-4xl
                            leading-tight
                            text-white
                            md:text-5xl
                        "
                    >
                        Stories That
                        <span className="block text-pink-300">
                            Inspire & Transform
                        </span>
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            mt-8
                            text-lg
                            leading-relaxed
                            text-white/70
                        "
                    >
                        This collection celebrates the journeys of
                        extraordinary women entrepreneurs who turned
                        challenges into opportunities and dreams into
                        successful ventures.
                    </p>
                    {/* Quote */}
                    <div
                        className="
                            mt-8
                            border-l-2
                            border-pink-400/50
                            pl-6
                        "
                    >
                        <p
                            className="
                                text-lg
                                italic
                                leading-relaxed
                                text-white/80
                            "
                        >
                            “Every chapter is a reminder that courage,
                            resilience, and vision can turn dreams into
                            reality.”
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="mt-10 grid gap-4">
                        {highlights.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-4
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/[0.03]
                                        p-4
                                        transition-all
                                        duration-300
                                        hover:bg-white/[0.05]
                                        hover:border-pink-400/20
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-gradient-to-br
                                            from-pink-500/20
                                            to-violet-500/20
                                        "
                                    >
                                        <Icon
                                            size={20}
                                            className="text-pink-300"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-white">
                                            {item.title}
                                        </h4>

                                        <p className="text-sm text-white/50">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">

                        <button
                            className="
                                group
                                flex
                                items-center
                                gap-2
                                rounded-full
                                bg-white
                                px-8
                                py-4
                                font-medium
                                text-black
                                transition-all
                                duration-300
                                hover:scale-105
                            "
                        >
                            Explore The Book

                            <ArrowRight
                                size={18}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
}
