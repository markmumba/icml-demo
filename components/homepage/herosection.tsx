import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/navbar';

const HeroSection = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.jpg"
                    alt="Modern bus transportation"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay - reduced blue intensity */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/75 to-gray-900/80"></div>
            </div>

            {/* Animated background elements - reduced blue intensity */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Navigation */}
            <Navbar />

            {/* Main Hero Content */}
            <div className="relative z-40 container mx-auto px-6 lg:px-12 pt-20 pb-32">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30 hover:bg-gray-500/30">
                                🚌 Nairobi's #1 Transport Network
                            </Badge>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                                Safe & Reliable
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400">
                                    Transport
                                </span>
                                <span className="block">Solutions</span>
                            </h1>

                            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                                Connect across Nairobi and beyond with our modern fleet, real-time tracking, and trusted Sacco partnerships serving over 100,000 passengers daily.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">100K+</div>
                                <div className="text-gray-300 text-sm">Daily Passengers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">50+</div>
                                <div className="text-gray-300 text-sm">Routes</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">5</div>
                                <div className="text-gray-300 text-sm">Partner Saccos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">24/7</div>
                                <div className="text-gray-300 text-sm">Support</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                                <MapPin className="mr-2 h-5 w-5" />
                                Find Routes
                            </Button>
                            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                                <Clock className="mr-2 h-5 w-5" />
                                Track Live
                            </Button>
                        </div>

                        {/* Feature highlights */}
                        <div className="flex flex-wrap gap-6 text-gray-200 justify-center">
                            <div className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-green-400" />
                                <span>Safety Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-gray-400" />
                                <span>Trusted by Thousands</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-gray-400" />
                                <span>Real-time Tracking</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
                    <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default HeroSection;