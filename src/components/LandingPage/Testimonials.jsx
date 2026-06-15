"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        quote:
            "Bhavesh Kothari's mentorship transformed the way I approached entrepreneurship. His guidance helped me scale my business with confidence.",
        name: "Women Entrepreneur",
        role: "Startup Founder",
    },

    {
        quote:
            "Hariharan Iyer has a remarkable ability to inspire and educate. His words leave a lasting impact on every audience.",
        name: "Leadership Coach",
        role: "Learning Professional",
    },

    {
        quote:
            "This initiative celebrates the resilience, courage, and success stories of women entrepreneurs in the most authentic way.",
        name: "Business Mentor",
        role: "Community Leader",
    },

    {
        quote:
            "The mentorship ecosystem created through Billennium Divas has empowered countless women to dream bigger and achieve more.",
        name: "Founder",
        role: "Women-Led Startup",
    },

    {
        quote:
            "Stories shared through this book inspire transformation and encourage women to break barriers with confidence.",
        name: "Author",
        role: "Business Speaker",
    },
];

export default function Testimonials() {
    return (
        <section className="relative overflow-hidden bg-[#08070d] py-24">
            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-100 w-100 rounded-full bg-pink-500/10 blur-[120px]" />
                <div className="absolute right-0 bottom-0 h-100 w-100 rounded-full bg-purple-500/10 blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-xs uppercase tracking-[0.5em] text-pink-300">
                        Testimonials
                    </span>

                    <h2 className="mt-4 font-serif text-4xl text-white md:text-6xl">
                        Voices Of
                        <span className="block bg-linear-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                            Inspiration & Impact
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-white/60">
                        Hear from leaders, founders, mentors, and changemakers
                        who believe in the power of mentorship, storytelling,
                        and women entrepreneurship.
                    </p>
                </div>

                {/* Slider */}
                <div className="mt-16">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="
                                        h-full
                                        rounded-4xl
                                        border
                                        border-white/10
                                        bg-white/4
                                        p-8
                                        backdrop-blur-xl
                                        transition-all
                                        duration-500
                                        hover:-translate-y-2
                                        hover:border-pink-400/30
                                        hover:bg-white/6
                                    "
                                >
                                    <div className="text-6xl leading-none text-pink-300">
                                        &quot;
                                    </div>

                                    <p className="mt-4 text-lg leading-relaxed text-white/75">
                                        {item.quote}
                                    </p>

                                    <div className="mt-8 border-t border-white/10 pt-6">
                                        <h4 className="font-semibold text-white">
                                            {item.name}
                                        </h4>

                                        <p className="mt-1 text-sm text-white/50">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
