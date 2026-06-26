"use client";

import Image from "next/image";
import {
    BookOpen,
    Users,
    Star,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

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

const stores = [
    {
        name: "Amazon",
        icon: "https://images.icon-icons.com/159/PNG/256/amazon_22471.png",
        Link: "https://www.amazon.in/dp/1639975594",
    },
    {
        name: "Flipkart",
        icon: "https://imgs.search.brave.com/fyeQbWYUttbhrsBUdfhpeWIYwO_WcfxCcqzVPcz4JO8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9mbGlwa2Fy/dC1pY29uLnBuZw",
        Link: "https://www.flipkart.com/eves-against-odds/p/itm99bca2495d315",
    },
    {
        name: "Apple Books",
        icon: "https://imgs.search.brave.com/g9csYd0V-yXssza9h3WbPjF-JtF6iA9hf2UwHApOvMA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFwcGxlLWlib29r/cy1pY29uLXN2Zy1k/b3dubG9hZC1wbmct/NDkzMTQ2LnBuZz9m/PXdlYnAmdz0yNTY",
        Link: "https://books.apple.com/us/book/eves-against-the-odds/id1580783269",
    },
    {
        name: "Google Play",
        icon: "https://imgs.search.brave.com/LhFmrdTW7iiPKtZcIqYohWEq1LvSmKxXzGoTHgYQMSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzU1L0dvb2dsZV9Q/bGF5XzIwMTZfaWNv/bi5zdmc",
        Link: "https://play.google.com/store/books/details/Eves_against_the_Odds_25_Inspiring_Women_Entrepren?id=Qis8EAAAQBAJ&hl=en_US&gl=US",
    },
    {
        name: "Notion Press",
        icon: "https://notionpress.com/favicon.ico",
        Link: "https://notionpress.com/in/read/eves-against-the-odds/",
    },
    {
        name: "Amazon Kindle",
        icon: "https://imgs.search.brave.com/P3bBdb9cKIGClQLnRG-hIFLaLdEHzWTKaues6NT6MTs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9w/bGFzdGljaW5lLzEy/MDAvYW1hem9uLWtp/bmRsZS5qcGc",
        Link: "https://www.amazon.in/dp/1639975594/",
    },
    {
        name: "Rakuten Kobo",
        icon: "https://help.kobo.com/hc/article_attachments/25992131084311",
        Link: "https://www.kobo.com/in/en/ebook/eves-against-the-odds/",
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
                            className="relative transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-1"
                        >
                            <Image
                                src="/vec-Hero.png"
                                alt="Book Cover"
                                width={520}
                                height={700}
                                priority
                                className="h-auto rounded-2xl object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div
                            className="absolute -right-6 top-10 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                                Volume I & II
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div
                    className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12"
                >
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                    >
                        <BookOpen
                            size={14}
                            className="text-pink-300"
                        />

                        <span
                            className="text-[11px] uppercase tracking-[0.25em] text-white/60"
                        >
                            About The Book
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl"
                    >
                        Stories That
                        <span className="block text-pink-300">
                            Inspire & Transform
                        </span>
                    </h2>

                    {/* Description */}
                    <p
                        className="mt-8 text-lg leading-relaxed text-white/70"
                    >
                        This collection celebrates the journeys of
                        extraordinary women entrepreneurs who turned
                        challenges into opportunities and dreams into
                        successful ventures.
                    </p>
                    {/* Quote */}
                    <div
                        className="mt-8 border-l-2 border-pink-400/50 pl-6"
                    >
                        <p
                            className="text-lg italic leading-relaxed text-white/80"
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
                                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:bg-white/[0.05] hover:border-pink-400/20"
                                >
                                    <div
                                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-violet-500/20"
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

                        <Link href="/volumei">
                            <button
                                className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105"
                            >
                                Explore The Book

                                <ArrowRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>

        {/* Available Worldwide */}
        <div id="available-worldwide" className="relative mt-24 scroll-mt-28">
            {/* Divider */}
            <div className="mb-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                    Available Worldwide
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>

            <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {stores.map((store) => {
                        return (
                            <a
                                key={store.name}
                                href={store.Link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-6 transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/30 hover:bg-white/[0.05]"
                            >
                                {/* Glow */}
                                <div
                                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-pink-500/10 to-violet-500/10"
                                />

                                <div className="relative flex flex-col items-center gap-4">
                                    <div
                                        className="flex"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={store.icon}
                                            alt=""
                                            className="h-14 w-14 object-contain transition-all duration-500 group-hover:scale-110"
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
                <p className="mt-8 text-center text-sm text-pink-400">
                    Available in print, digital, and audiobook formats across major platforms.
                </p>
            </div>
        </div>
    </section>
    );
}
