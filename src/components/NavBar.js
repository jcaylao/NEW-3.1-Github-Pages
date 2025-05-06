"use client";  // Mark this file as a client component

import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
                {/* Desktop Menu */}
                <div className="flex space-x-6">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/projects" className="hover:text-gray-300">Projects</Link>
                    <Link href="/about" className="hover:text-gray-300">About</Link>
                </div>
        </nav>
    );
}
