"use client";

import Image from "next/image";
import {
    BookOpen,
    Users,
    Star,
    ArrowRight,
    FlipHorizontal,
} from "lucide-react";
import { BsAmazon, BsGooglePlay } from "react-icons/bs";
import { GiEvilBook } from "react-icons/gi";

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

export default function AboutBook() {

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

        {/* Available Worldwide */}
        <div className="relative mt-24">
            {/* Divider */}
            <div className="mb-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                    Available Worldwide
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>

            <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {[
                        {
                            name: "Amazon",
                            icon: BsAmazon,
                        },
                        {
                            name: "Flipkart",
                            icon: FlipHorizontal,
                        },
                        {
                            name: "Apple Books",
                            icon: GiEvilBook,
                        },
                        {
                            name: "Google Play",
                            icon: BsGooglePlay,
                        },
                    ].map((store) => {
                        const Icon = store.icon;

                        return (
                            <a
                                key={store.name}
                                href="#"
                                className="
                            group
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/[0.02]
                            px-8
                            py-6
                            transition-all
                            duration-500
                            hover:-translate-y-2
                            hover:border-pink-400/30
                            hover:bg-white/[0.05]
                        "
                            >
                                {/* Glow */}
                                <div
                                    className="
                                absolute
                                inset-0
                                opacity-0
                                transition-opacity
                                duration-500
                                group-hover:opacity-100
                                bg-gradient-to-br
                                from-pink-500/10
                                to-violet-500/10
                            "
                                />

                                <div className="relative flex flex-col items-center gap-4">
                                    <div
                                        className="
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-gradient-to-br
                                    from-pink-500/15
                                    to-violet-500/15
                                "
                                    >
                                        <Icon
                                            size={30}
                                            className="
                                        text-pink-300
                                        transition-all
                                        duration-500
                                        group-hover:scale-110
                                    "
                                        />
                                    </div>

                                    <span className="text-sm font-medium text-white/80">
                                        {store.name}
                                    </span>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Bottom Text */}
                <p className="mt-8 text-center text-sm text-white/50">
                    Available in print, digital, and audiobook formats across major platforms.
                </p>
            </div>
        </div>
    </section>
    );
}
