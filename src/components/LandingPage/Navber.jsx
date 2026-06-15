
'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_ITEMS = [
    { label: 'VOLUME I', href: '/' },
    { label: 'VOLUME II', href: '/ii' },
    { label: 'ABOUT', href: '/about' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-4 z-50 w-full px-4">
            <nav className="max-w-6xl mx-auto border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl rounded-full" >
                <div className="px-6 lg:px-8">
                    <div className="h-14 flex items-center justify-between">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="
                text-xl
                font-semibold
                tracking-wide
                bg-gradient-to-r
                from-violet-300
                via-pink-300
                to-violet-300
                bg-clip-text
                text-transparent
              "
                        >
                            EATO
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-2">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="
                    px-5
                    py-2.5
                    rounded-full
                    text-xs
                    font-medium
                    tracking-widest
                    text-gray-300
                    hover:text-white
                    hover:bg-white/10
                    transition-all
                    duration-300
                  "
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link
                                href="/get-book"
                                className="
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  py-2
                  rounded-2xl
                  text-sm
                  font-medium
                  text-white
                  bg-gradient-to-r
                  from-violet-600
                  to-pink-500
                  hover:scale-105
                  hover:shadow-purple-500/40
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
                            >
                                Get the Book
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                            className="
                md:hidden
                p-2
                rounded-lg
                text-white
                hover:bg-white/10
                transition-colors
              "
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`
                    md:hidden
                    absolute
                    left-0
                    right-0
                    top-full
                    mt-3
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-xl
                    transition-all
                    duration-300
                ${isOpen
                            ? 'max-h-96 p-4 opacity-100'
                            : 'max-h-0 p-0 opacity-0 border-transparent'
                        }
`}
                >
                    <div className="flex flex-col gap-2">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="
                  px-4
                  py-3
                  rounded-xl
                  text-sm
                  font-medium
                  text-gray-300
                  hover:text-white
                  hover:bg-white/10
                  transition-all
                "
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            href="/get-book"
                            onClick={() => setIsOpen(false)}
                            className="
                mt-2
                text-center
                px-6
                py-3
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-pink-500
                text-white
                font-semibold
              "
                        >
                            Get the Book
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

