"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGlobe, FaEnvelope } from "react-icons/fa";

const authors = [
    {
        name: "Bhavesh Kothari",
        role: "Director, Billennium Divas",
        image: "/BhaveshKothari.jpg",

        description:
            "Bhavesh Kothari is passionate about making a difference to women entrepreneurs through the power of learning and mentoring. He carries over two and a half decades of experience in sales and marketing.",

        longDescription:
            "As Director of Billennium Divas, he is committed to inspiring women entrepreneurs to conquer their limitations and showcase their incredible prowess to the world. A passionate mentor, he is frequently invited to various forums as a Keynote Speaker, Panellist, and Startup Jury member. An advocate of mentoring for more than a decade, he actively mentors startups and serves on the mentor boards of several renowned incubators in the country. He also facilitates funding for startups via Billennium Divas Angel Network (BDAN) and Billennium Divas Fund (BDF). An ardent community builder, he strongly believes in creating value first and follows the mantra: 'Build Value and the Valuation will Follow.'",

        quote:
            "Build Value and the Valuation will Follow.",

        linkedin:
            "https://www.linkedin.com/in/bhaveshkothari1511",

        website:
            "https://www.billenniumdivas.fund",

        email:
            "billenniumdivas@gmail.com",
    },

    {
        name: "Hariharan Iyer",
        role: "Speaker, Trainer, Author & Founder, HSSE",
        image: "/HariharanIyer.jpg",

        description:
            "Hariharan Iyer started his career in research and built his journey as a journalist. Eventually, he took to his core passion – Speaking and Training.",

        longDescription:
            "Hariharan is a celebrated Speaker, Trainer and Author with over 25 years of Learning & Development experience. He has authored eight other books, including the first volume of Eves Against The Odds. He is the Founder & Chief Mentor of Hariharan’s School Of Success Education (HSSE), established in 2009. He also holds a unique registered trademark for the moniker – The Enter-Trainer®.",

        quote:
            "Transforming lives through learning, speaking and mentoring.",

        linkedin:
            "https://www.linkedin.com/in/hariharan-iyer-the-enter-trainer-54456516",

        website:
            "https://www.thehsse.com",

        email:
            "hariharan@thehsse.com",
    },
];

export default function AuthorsSection() {
    return (
        <section id="authors" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-[#08070d] via-[#0d0c13] to-[#08070d] py-24 md:py-32">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[150px]" />
                <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-5xl text-center">
                    <span className="text-xs uppercase tracking-[0.5em] text-pink-300">
                        Meet The Authors
                    </span>

                    <h2 className="mt-5 font-serif text-4xl leading-tight text-white md:text-6xl">
                        The Minds Behind
                        <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                            Eves Against The Odds
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-4xl text-xl leading-relaxed text-white/60">
                        Visionaries, mentors, and storytellers dedicated to
                        amplifying the voices of women entrepreneurs through
                        mentorship, leadership, funding opportunities, and
                        transformative storytelling.
                    </p>
                </div>

                {/* Author Cards */}
                <div className="mt-20 grid gap-10 lg:grid-cols-2">
                    {authors.map((author, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/30 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_rgba(236,72,153,0.12)]"
                        >
                            {/* Image Section */}
                            <div className="relative overflow-hidden">
                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#08070d] via-transparent to-transparent" />

                                <Image
                                    src={author.image}
                                    alt={author.name}
                                    width={800}
                                    height={900}
                                    className="h-[520px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-10">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-serif text-3xl text-white md:text-4xl">
                                            {author.name}
                                        </h3>

                                        <div className="mt-4 inline-flex items-center rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2">
                                            <span className="text-xs uppercase tracking-[0.25em] text-pink-300">
                                                {author.role}
                                            </span>
                                        </div>
                                    </div>

                                    <Link
                                        href={author.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-pink-400/30 hover:bg-pink-500/10 hover:text-pink-300"
                                    >
                                        <FaLinkedin size={20} />
                                    </Link>
                                </div>

                                {/* Description */}
                                <p className="mt-8 leading-relaxed text-white/75">
                                    {author.description}
                                </p>

                                <p className="mt-5 leading-relaxed text-white/55">
                                    {author.longDescription}
                                </p>

                                {/* Quote */}
                                <div className="mt-8 rounded-3xl border border-pink-400/20 bg-gradient-to-r from-pink-500/10 to-violet-500/10 p-6">
                                    <p className="text-xs uppercase tracking-[0.3em] text-pink-300">
                                        Personal Mantra
                                    </p>

                                    <p className="mt-3 font-serif text-xl italic text-white">
                                        &quot;{author.quote}&quot;
                                    </p>
                                </div>

                                {/* Contact Buttons */}
                                {author.website && (
                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <a
                                            href={author.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70 transition-all duration-300 hover:border-pink-400/30 hover:bg-white/10 hover:text-white"
                                        >
                                            <FaGlobe />
                                            Website
                                        </a>

                                        <a
                                            href={`mailto:${author.email}`}
                                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70 transition-all duration-300 hover:border-pink-400/30 hover:bg-white/10 hover:text-white"
                                        >
                                            <FaEnvelope />
                                            Email
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
