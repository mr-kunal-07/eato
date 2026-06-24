"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Quote, ArrowLeft } from "lucide-react";

export default function WomenStoriesPage() {
    const router = useRouter();
    const [activeVolume, setActiveVolume] = useState("vol1");
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

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
                </div>

                {/* Volume Tabs */}
                <div className="mb-10 flex justify-center gap-4">
                    <button
                        onClick={() => setActiveVolume("vol1")}
                        className={`
              px-8
              py-3
              rounded-lg
              font-semibold
              text-sm
              uppercase
              tracking-[0.1em]
              transition-all
              duration-300
              ${activeVolume === "vol1"
                                ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/30"
                                : "bg-white/[0.05] border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/[0.08]"
                            }
            `}
                    >
                        Volume 1
                    </button>
                    <button
                        onClick={() => setActiveVolume("vol2")}
                        className={`
              px-8
              py-3
              rounded-lg
              font-semibold
              text-sm
              uppercase
              tracking-[0.1em]
              transition-all
              duration-300
              ${activeVolume === "vol2"
                                ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/30"
                                : "bg-white/[0.05] border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/[0.08]"
                            }
            `}
                    >
                        Volume 2
                    </button>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex justify-center items-center min-h-[400px]">
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
                    <div className="flex justify-center items-center min-h-[400px]">
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
                        {stories.map((item) => (
                            <div
                                key={item.id}
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
                                {/* WOMAN CARD */}
                                {item.type === "woman" ? (
                                    <>
                                        {/* IMAGE SECTION */}
                                        <div className="relative h-[400px] overflow-hidden">
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
                                                priority={false}
                                            />

                                            {/* Dark to Transparent Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#07070d] via-black/20 to-transparent" />

                                            {/* Color Gradient Overlay */}
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

                                        {/* CONTENT SECTION */}
                                        <div className="relative p-8">
                                            <h3 className="font-serif text-3xl text-white">
                                                {item.name}
                                            </h3>

                                            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-pink-300">
                                                {item.role}
                                            </p>

                                            {/* Divider Line */}
                                            <div className="mt-5 h-px w-16 bg-gradient-to-r from-pink-400 to-transparent" />

                                            {/* Story Text */}
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
                                                {/* Leading Quote Icon */}
                                                <Quote
                                                    size={52}
                                                    className="mb-8 text-pink-300/80"
                                                />

                                                {/* Quote Text */}
                                                <p
                                                    className="
                            font-serif
                            text-3xl
                            md:text-4xl
                            leading-[1.25]
                            text-white
                          "
                                                >
                                                    "{item.quote}"
                                                </p>

                                                {/* Divider Line */}
                                                <div className="mt-10 h-px w-24 bg-gradient-to-r from-pink-400 to-transparent" />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && !error && stories.length === 0 && (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <p className="text-white/60">No stories available</p>
                    </div>
                )}
            </div>
        </section>
    );
}