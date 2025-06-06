import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const AboutHero = () => {
    return (
        <div className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 right-0 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-0 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>
                </div>
            </div>

            <div className="relative container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30 hover:bg-gray-500/30">
                                Our Story
                            </Badge>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Transforming
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400">
                                    Urban Mobility
                                </span>
                                in Kenya
                            </h1>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Since 2020, we&apos;ve been at the forefront of revolutionizing public transportation in Nairobi&apos;s,
                                combining technology with traditional Sacco partnerships to create a safer, more efficient,
                                and more accessible transport network.
                            </p>
                        </div>

                        {/* Key Points */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-white">3+</div>
                                <div className="text-gray-300">Years of Excellence</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-white">5</div>
                                <div className="text-gray-300">Partner Saccos</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-white">50+</div>
                                <div className="text-gray-300">Active Routes</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-white">100K+</div>
                                <div className="text-gray-300">Daily Passengers</div>
                            </div>
                        </div>

                        {/* Learn More Link */}
                        <div className="pt-4">
                            <a href="#our-story" className="inline-flex items-center text-gray-300 hover:text-white transition-colors group">
                                Learn more about our journey
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Image Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative h-48 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/about/fleet.jpg"
                                        alt="ICML's modern fleet of vehicles"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-64 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/about/team.jpg"
                                        alt="ICML's dedicated team of professionals"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative h-64 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/about/operations.jpg"
                                        alt="ICML's state-of-the-art operations center"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-48 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/about/service.jpg"
                                        alt="ICML's customer-focused service"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;