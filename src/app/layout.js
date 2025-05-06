import NavBar from '@/components/NavBar';  // Ensure the correct import path
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "My Next.js Site",
    description: "Welcome to my simple Next.js app!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>{children}</main> {/* Main content area */}
        </body>
        </html>
    );
}
