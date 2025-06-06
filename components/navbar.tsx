import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 lg:px-8 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
            <Link href="/" className="flex items-center space-x-2">
                <div className="w-16 h-16 relative -ml-2">
                    <Image
                        src="/logo.png"
                        alt="ICML Logo"
                        fill
                        className="object-contain rounded-lg"
                    />
                </div>
                <span className="text-white font-bold text-lg">ICML</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6 text-white/90">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                <Link href="/routes" className="hover:text-white transition-colors">Routes</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>

            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-sm py-1">
                Book Now
            </Button>
        </nav>
    );
};

export default Navbar; 