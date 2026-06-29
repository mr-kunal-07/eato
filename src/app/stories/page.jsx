"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Quote, ArrowLeft } from "lucide-react";

export default function WomenStoriesPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeVolume, setActiveVolume] = useState("vol1");
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Initialize activeVolume from URL params
    useEffect(() => {
        const volParam = searchParams.get("vol");
        if (volParam === "vol1" || volParam === "vol2") {
            setActiveVolume(volParam);
        }
    }, [searchParams]);

    // Load data from JSON
    useEffect(() => {
        const fetchStories = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`/data/${activeVolume}.json`);
                if (!response.ok) {
                    throw new Error(`Failed to load ${activeVolume} data`);
                }
                const data = await response.json();
                setStories(data);
            } catch (err) {
                setError(err.message);
                console.error("Error loading stories:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStories();
    }, [activeVolume]);

    const handleVolumeChange = (volume) => {
        setActiveVolume(volume);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#120f20] via-[#170f24] to-[#251224] py-24">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-112.5 w-112.5 rounded-full bg-pink-500/10 blur-[140px]" />
                <div className="absolute right-0 bottom-0 h-112.5 w-112.5 rounded-full bg-violet-500/10 blur-[140px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-white/5 text-white text-sm font-medium hover:bg-white/10 hover:border-pink-400/30 transition-all duration-300"
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
                </div>

                {/* Volume Tabs */}
                <div className="mb-10 flex justify-center gap-4">
                    <button
                        onClick={() => handleVolumeChange("vol1")}
                        className={`px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-widest transition-all duration-300 ${activeVolume === "vol1"
                            ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/30"
                            : "bg-white/5 border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/8"
                            }`}
                    >
                        Volume 1
                    </button>
                    <button
                        onClick={() => handleVolumeChange("vol2")}
                        className={`px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-widest transition-all duration-300 ${activeVolume === "vol2"
                            ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/30"
                            : "bg-white/5 border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/8"
                            }`}
                    >
                        Volume 2
                    </button>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex justify-center items-center min-h-100">
                        <div className="text-center">
                            <div className="inline-block">
                                <div className="w-12 h-12 border-4 border-white/20 border-t-pink-500 rounded-full animate-spin" />
                            </div>
                            <p className="mt-4 text-white/60">Loading stories...</p>
                        </div>
                    </div>
                )}

                {/* Error State */}
                {error && !isLoading && (
                    <div className="flex justify-center items-center min-h-100">
                        <div className="text-center max-w-md">
                            <div className="text-4xl mb-4">⚠️</div>
                            <p className="text-white/80">{error}</p>
                            <p className="text-white/50 text-sm mt-2">
                                Please ensure your data files are in the{" "}
                                <code className="bg-white/10 px-2 py-1 rounded">/public/data/</code> directory
                            </p>
                        </div>
                    </div>
                )}

                {/* Stories Grid */}
                {!isLoading && !error && stories.length > 0 && (
                    <div className="grid gap-8 lg:grid-cols-3">
                        {stories.map((item, index) => (
                            <div key={item.id}>
                                {/* Story Card */}
                                <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/30 hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)]">
                                    {/* WOMAN CARD */}
                                    {item.type === "woman" ? (
                                        <>
                                            <div className="relative h-100 overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={600}
                                                    height={700}
                                                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                    priority={false}
                                                />
                                            </div>
                                            <div className="relative p-8">
                                                <h3 className="font-serif text-3xl text-white">{item.name}</h3>
                                                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-pink-300">{item.role}</p>
                                                <div className="mt-5 h-px w-16 bg-gradient-to-r from-pink-400 to-transparent" />
                                                <p className="mt-5 text-white/65 leading-relaxed transition-all duration-300 group-hover:text-white/85">{item.story}</p>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="relative flex min-h-155 flex-col justify-center p-10">
                                            <Quote size={150} className="absolute right-5 top-5 text-white/4" />
                                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-violet-500/5" />
                                            <div className="relative z-10">
                                                <Quote size={52} className="mb-8 text-pink-300/80" />
                                                <p className="font-serif text-3xl md:text-4xl leading-[1.25] text-white">"{item.quote}"</p>
                                                <div className="mt-10 h-px w-24 bg-gradient-to-r from-pink-400 to-transparent" />
                                                {item.author && (
                                                    <p className="mt-6 text-sm uppercase tracking-[0.25em] text-pink-300">~ {item.author}</p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Bridge Card — show opposite volume */}
                        {(
                            <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/3 backdrop-blur-xl">
                                {/* Ambient glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/8 via-transparent to-violet-500/8" />

                                <div className="relative flex h-full flex-col">
                                    {/* Next Volume Button */}
                                    <button
                                        onClick={() => handleVolumeChange(activeVolume === "vol1" ? "vol2" : "vol1")}
                                        className="group/v2 relative flex flex-1 flex-col items-center justify-center gap-4 p-10 text-center transition-all duration-300 hover:bg-pink-500/8"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-pink-400/30 bg-pink-500/10 transition-all duration-300 group-hover/v2:border-pink-400/60 group-hover/v2:bg-pink-500/20">
                                            <span className="text-2xl">📖</span>
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.45em] text-pink-300/70">Continue Reading</p>
                                            <h3 className="mt-2 font-serif text-2xl text-white">{activeVolume === "vol1" ? "Volume 2" : "Volume 1"}</h3>
                                            <p className="mt-2 text-sm text-white/50">{activeVolume === "vol1" ? "More stories of women who dared to dream" : "Inspiring tales from remarkable women"}</p>
                                        </div>
                                        <span className="text-xs text-pink-300/60 transition-all duration-300 group-hover/v2:text-pink-300">
                                            Explore →
                                        </span>
                                    </button>

                                    {/* Divider */}
                                    <div className="mx-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                                    {/* Contact — bottom half */}
                                    <a
                                        href="/contact"
                                        className="group/ct relative flex flex-1 flex-col items-center justify-center gap-4 p-10 text-center transition-all duration-300 hover:bg-violet-500/8"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 transition-all duration-300 group-hover/ct:border-violet-400/60 group-hover/ct:bg-violet-500/20">
                                            <span className="text-2xl">✉️</span>
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.45em] text-violet-300/70">Get In Touch</p>
                                            <h3 className="mt-2 font-serif text-2xl text-white">Contact Us</h3>
                                            <p className="mt-2 text-sm text-white/50">Share your story or collaborate with us</p>
                                        </div>
                                        <span className="text-xs text-violet-300/60 transition-all duration-300 group-hover/ct:text-violet-300">
                                            Reach out →
                                        </span>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && !error && stories.length === 0 && (
                    <div className="flex justify-center items-center min-h-100">
                        <p className="text-white/60">No stories available</p>
                    </div>
                )}
            </div>
        </section>
    );
}