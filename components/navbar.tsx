import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="relative z-50 flex items-center justify-between px-6 py-4 lg:px-12">
            <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-lg">I</span>
                </div>
                <span className="text-white font-bold text-xl">ICML</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8 text-white/90">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                <Link href="/routes" className="hover:text-white transition-colors">Routes</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>

            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Book Now
            </Button>
        </nav>
    );
};

export default Navbar; 