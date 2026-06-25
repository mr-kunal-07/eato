"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";

export default function GalleryClient({ images }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const activeImage = activeIndex === null ? null : images[activeIndex];

    const closeLightbox = () => setActiveIndex(null);
    const showPrevious = useCallback(() =>
        setActiveIndex((current) =>
            current === null ? current : (current - 1 + images.length) % images.length
        ), [images.length]);
    const showNext = useCallback(() =>
        setActiveIndex((current) =>
            current === null ? current : (current + 1) % images.length
        ), [images.length]);

    useEffect(() => {
        if (activeIndex === null) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") closeLightbox();
            if (event.key === "ArrowLeft") showPrevious();
            if (event.key === "ArrowRight") showNext();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeIndex, showNext, showPrevious]);

    return (
        <main className="min-h-screen bg-[#08070d] text-white">
            <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
                <div className="absolute inset-0">
                    <div className="absolute left-0 top-0 h-100 w-100 rounded-full bg-pink-500/10 blur-[150px]" />
                    <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-violet-500/10 blur-[150px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white">
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>

                    <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.5em] text-pink-300">
                                Photo Gallery
                            </p>
                            <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                                Moments From EATO
                            </h1>
                        </div>

                    </div>

                    {images.length > 0 ? (
                        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-2 sm:auto-rows-[180px] md:grid-cols-4 lg:grid-cols-6">
                            {images.map((image, index) => (
                                <button
                                    key={image.id}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    className={`group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 text-left outline-none transition-all duration-300 hover:z-10 hover:scale-[1.02] hover:border-pink-300/50 focus-visible:border-pink-300 ${image.featured ? "col-span-2 row-span-2" : ""}`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes={image.featured ? "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 17vw, (min-width: 768px) 25vw, 50vw"}
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <p className="truncate text-xs font-medium text-white">
                                            {image.alt}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
                            <p className="text-lg font-medium text-white">
                                No gallery images found.
                            </p>
                            <p className="mt-3 text-sm text-white/60">
                                Put your photos inside <span className="text-white/80">public/gallery</span>, then refresh this page.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {activeImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-md"
                    role="dialog"
                    aria-modal="true"
                    aria-label={activeImage.alt}
                    onClick={closeLightbox}
                >
                    <button
                        type="button"
                        onClick={closeLightbox}
                        aria-label="Close gallery image"
                        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                        <X size={22} />
                    </button>

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPrevious();
                        }}
                        aria-label="Previous image"
                        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="relative h-[82vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
                        <Image
                            src={activeImage.src}
                            alt={activeImage.alt}
                            fill
                            sizes="100vw"
                            priority
                            className="object-contain"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNext();
                        }}
                        aria-label="Next image"
                        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-center text-sm text-white/80 backdrop-blur">
                        {activeImage.alt} - {activeIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </main>
    );
}
