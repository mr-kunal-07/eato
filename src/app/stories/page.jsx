"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Quote, ArrowLeft, ChevronRight } from "lucide-react";

function WomenStoriesContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeVolume, setActiveVolume] = useState("vol1");
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [displayMode, setDisplayMode] = useState("grid"); // grid or list

    useEffect(() => {
        const volParam = searchParams.get("vol");
        if (volParam === "vol1" || volParam === "vol2") {
            setActiveVolume(volParam);
        }
    }, [searchParams]);

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
        <section className="relative overflow-hidden bg-gradient-to-b from-[#120f20] via-[#170f24] to-[#251224] py-12 sm:py-16 md:py-24 lg:py-32">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-pink-500/10 blur-[100px] sm:h-80 sm:w-80 sm:blur-[140px]" />
                <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px] sm:h-80 sm:w-80 sm:blur-[140px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-white rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-pink-400/30 transition-all duration-300"
                    aria-label="Go back to previous page"
                >
                    <ArrowLeft size={16} className="sm:size-[18px]" />
                    <span className="hidden xs:inline">Back</span>
                </button>

                {/* Heading */}
                <div className="mx-auto mb-12 sm:mb-16 md:mb-20 max-w-2xl sm:max-w-3xl text-center">
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                        Stories That
                        <span className="block text-pink-300">
                            Inspire Generations
                        </span>
                    </h1>
                    <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed">
                        Discover the remarkable journeys of women who dared to dream
                    </p>
                </div>

                {/* Volume Tabs & Display Mode Toggle */}
                <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <div className="flex gap-2 sm:gap-4">
                        {["vol1", "vol2"].map((vol) => (
                            <button
                                key={vol}
                                onClick={() => handleVolumeChange(vol)}
                                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 ${activeVolume === vol
                                    ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/30"
                                    : "bg-white/5 border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/8"
                                    }`}
                                aria-pressed={activeVolume === vol}
                                aria-label={`View ${vol === "vol1" ? "Volume 1" : "Volume 2"}`}
                            >
                                {vol === "vol1" ? "Vollume 1" : "Vollume 2"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="text-center">
                            <div className="inline-block">
                                <div className="w-12 h-12 border-4 border-white/20 border-t-pink-500 rounded-full animate-spin" />
                            </div>
                            <p className="mt-4 text-white/60 text-sm">Loading stories...</p>
                        </div>
                    </div>
                )}

                {/* Error State */}
                {error && !isLoading && (
                    <div className="flex justify-center items-center min-h-[300px]">
                        <div className="text-center max-w-md px-4">
                            <div className="text-4xl sm:text-5xl mb-4">⚠️</div>
                            <p className="text-white/80 text-sm sm:text-base">{error}</p>
                            <p className="text-white/50 text-xs sm:text-sm mt-3">
                                Please ensure your data files are in the{" "}
                                <code className="bg-white/10 px-2 py-1 rounded inline-block mt-1">/public/data/</code>
                            </p>
                        </div>
                    </div>
                )}

                {/* Stories Grid */}
                {!isLoading && !error && stories.length > 0 && (
                    <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
                        {stories.map((item) => (
                            <StoryCard key={item.id} item={item} />
                        ))}

                        {/* Bridge Card */}
                        <BridgeCard activeVolume={activeVolume} onVolumeChange={handleVolumeChange} />
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && !error && stories.length === 0 && (
                    <div className="flex justify-center items-center min-h-[300px]">
                        <p className="text-white/60 text-sm">No stories available for this volume</p>
                    </div>
                )}
            </div>
        </section>
    );
}

function StoryCard({ item }) {
    return (
        <div className="group h-full">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-pink-400/30 hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)] h-full flex flex-col">
                {/* WOMAN CARD */}
                {item.type === "woman" ? (
                    <>
                        <div className="relative h-96 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={600}
                                height={700}
                                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <div className="relative flex-1 flex flex-col p-4 sm:p-6 md:p-8">
                            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white">{item.name}</h3>
                            <p className="mt-1 sm:mt-2 text-xs sm:text-sm uppercase tracking-wider text-pink-300">{item.role}</p>
                            <div className="mt-3 sm:mt-4 md:mt-5 h-px w-12 sm:w-16 bg-gradient-to-r from-pink-400 to-transparent" />
                            <p className="mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm text-white/65 leading-relaxed transition-all duration-300 group-hover:text-white/85 flex-1">
                                {item.story}
                            </p>
                        </div>
                    </>
                ) : (
                    /* QUOTE CARD */
                    <div className="relative flex min-h-96 sm:min-h-[450px] md:min-h-[500px] flex-col justify-center p-6 sm:p-8 md:p-10">
                        <Quote size={100} className="absolute right-3 top-3 sm:right-5 sm:top-5 text-white/4" aria-hidden="true" />
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-violet-500/5" />
                        <div className="relative z-10">
                            <Quote size={40} className="sm:size-[52px] mb-4 sm:mb-6 md:mb-8 text-pink-300/80" aria-hidden="true" />
                            <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-[1.25] text-white break-words">
                                "{item.quote}"
                            </p>
                            <div className="mt-6 sm:mt-8 md:mt-10 h-px w-16 sm:w-24 bg-gradient-to-r from-pink-400 to-transparent" />
                            {item.author && (
                                <p className="mt-4 sm:mt-6 text-xs sm:text-sm uppercase tracking-wider text-pink-300">
                                    ~ {item.author}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function BridgeCard({ activeVolume, onVolumeChange }) {
    const nextVolume = activeVolume === "vol1" ? "vol2" : "vol1";
    const nextVolumeLabel = activeVolume === "vol1" ? "Volume 2" : "Volume 1";
    const volumeDescription = activeVolume === "vol1"
        ? "More stories of women who dared to dream"
        : "Inspiring tales from remarkable women";

    return (
        <div className="group relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/8 via-transparent to-violet-500/8" />

            <div className="relative flex flex-col h-full">
                {/* Next Volume Button */}
                <button
                    onClick={() => onVolumeChange(nextVolume)}
                    className="group/v2 relative flex flex-1 flex-col items-center justify-center gap-3 sm:gap-4 p-6 sm:p-8 md:p-10 text-center transition-all duration-300 hover:bg-pink-500/8"
                >
                    <div className="flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-full border border-pink-400/30 bg-pink-500/10 transition-all duration-300 group-hover/v2:border-pink-400/60 group-hover/v2:bg-pink-500/20 group-hover/v2:scale-110">
                        <span className="text-lg sm:text-2xl">📖</span>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest text-pink-300/70">Continue Reading</p>
                        <h3 className="mt-1 sm:mt-2 font-serif text-lg sm:text-2xl text-white">{nextVolumeLabel}</h3>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/50 px-2">{volumeDescription}</p>
                    </div>
                    <span className="text-xs text-pink-300/60 transition-all duration-300 group-hover/v2:text-pink-300 flex items-center gap-1">
                        Explore <ChevronRight size={14} />
                    </span>
                </button>

                {/* Divider */}
                <div className="mx-6 sm:mx-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Contact Section */}
                <a
                    href="/contact"
                    className="group/ct relative flex flex-1 flex-col items-center justify-center gap-3 sm:gap-4 p-6 sm:p-8 md:p-10 text-center transition-all duration-300 hover:bg-violet-500/8"
                >
                    <div className="flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 transition-all duration-300 group-hover/ct:border-violet-400/60 group-hover/ct:bg-violet-500/20 group-hover/ct:scale-110">
                        <span className="text-lg sm:text-2xl">✉️</span>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest text-violet-300/70">Get In Touch</p>
                        <h3 className="mt-1 sm:mt-2 font-serif text-lg sm:text-2xl text-white">Contact Us</h3>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/50 px-2">Share your story or collaborate</p>
                    </div>
                    <span className="text-xs text-violet-300/60 transition-all duration-300 group-hover/ct:text-violet-300 flex items-center gap-1">
                        Reach out <ChevronRight size={14} />
                    </span>
                </a>
            </div>
        </div>
    );
}

function StoriesLoadingFallback() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#120f20] via-[#170f24] to-[#251224] py-12 sm:py-24">
            <div className="absolute inset-0">
                <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-pink-500/10 blur-[100px]" />
                <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />
            </div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex justify-center items-center min-h-[400px]">
                    <div className="text-center">
                        <div className="inline-block">
                            <div className="w-12 h-12 border-4 border-white/20 border-t-pink-500 rounded-full animate-spin" />
                        </div>
                        <p className="mt-4 text-white/60 text-sm">Loading stories...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function WomenStoriesPage() {
    return (
        <Suspense fallback={<StoriesLoadingFallback />}>
            <WomenStoriesContent />
        </Suspense>
    );
} F