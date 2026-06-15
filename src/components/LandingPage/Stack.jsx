"use client";

import {
    Users,
    BookOpen,
    Star,
    Sparkles
} from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "50+",
        label: "Women Entrepreneurs",
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

export default function Stack() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-[#08070d]">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">

                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="
                                    group
                                    relative
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    text-center
                                    px-6
                                    py-10
                                    md:py-14
                                    border-b
                                    lg:border-b-0
                                    border-white/10
                                    transition-all
                                    duration-500
                                    hover:bg-white/[0.02]
                                "
                            >
                                {/* Vertical Borders */}
                                {index !== stats.length - 1 && (
                                    <div className="hidden lg:block absolute top-0 right-0 h-full w-px bg-white/10" />
                                )}

                                {/* Icon Glow */}
                                <div
                                    className="
                                        relative
                                        mb-5
                                        transition-all
                                        duration-500
                                        group-hover:scale-110
                                    "
                                >
                                    <div className="absolute inset-0 bg-white/10 blur-xl rounded-full" />

                                    <div
                                        className="
                                            relative
                                            w-12
                                            h-12
                                            flex
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-white/10
                                            bg-white/[0.03]
                                        "
                                    >
                                        <Icon
                                            size={22}
                                            className="text-white/70"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                </div>

                                {/* Number */}
                                <h3
                                    className="
                                        text-white
                                        text-4xl
                                        sm:text-5xl
                                        md:text-6xl
                                        font-serif
                                        font-bold
                                        leading-none
                                        tracking-tight
                                        transition-transform
                                        duration-500
                                        group-hover:scale-105
                                    "
                                >
                                    {item.value}
                                </h3>

                                {/* Label */}
                                <p
                                    className="
                                        mt-3
                                        text-[10px]
                                        sm:text-xs
                                        tracking-[0.25em]
                                        uppercase
                                        text-white/50
                                        leading-relaxed
                                    "
                                >
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}