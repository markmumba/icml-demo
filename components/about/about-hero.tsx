import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Shield, Users, Building2, Award, Target, Heart } from 'lucide-react';
import Image from 'next/image';

const AboutHero = () => {
    return (
        <div className="relative min-h-[90vh] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/about/hero.svg"
                    alt="ICML Transport Network"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-gray-900/90"></div>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-40 container mx-auto px-6 lg:px-12 pt-20 pb-32">
                <div className="max-w-4xl mx-auto">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30 hover:bg-gray-500/30">
                                <Building2 className="mr-2 h-4 w-4" />
                                Our Story
                            </Badge>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                                Leading Nairobi's
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400">
                                    Transport Revolution
                                </span>
                                <span className="block">Since 2020</span>
                            </h1>

                            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
                                We're on a mission to revolutionize public transportation in Nairobi by combining cutting-edge technology with trusted Sacco partnerships. Our commitment to safety, reliability, and customer satisfaction has made us the city's most trusted transport network.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                                <div className="text-3xl font-bold text-white">100K+</div>
                                <div className="text-gray-300 text-sm">Daily Passengers</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                                <div className="text-3xl font-bold text-white">50+</div>
                                <div className="text-gray-300 text-sm">Routes</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                                <div className="text-3xl font-bold text-white">5</div>
                                <div className="text-gray-300 text-sm">Partner Saccos</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                                <div className="text-3xl font-bold text-white">24/7</div>
                                <div className="text-gray-300 text-sm">Support</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                                <Target className="mr-2 h-5 w-5" />
                                Our Mission
                            </Button>
                            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                                <Award className="mr-2 h-5 w-5" />
                                Our Achievements
                            </Button>
                        </div>

                        {/* Feature highlights */}
                        <div className="flex flex-wrap gap-6 text-gray-200">
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
                            <div className="flex items-center gap-2">
                                <Heart className="h-5 w-5 text-gray-400" />
                                <span>Customer First</span>
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

export default AboutHero;