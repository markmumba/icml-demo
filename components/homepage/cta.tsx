"use client"
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    ArrowRight,
    Clock,
    Shield,
    Star,
    Users,
    CheckCircle
} from 'lucide-react';

const CTASection = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Header */}
                    <Badge className="bg-gray-100 text-gray-600 mb-4">Get Started</Badge>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ready to Experience Better Travel?
                    </h2>
                    <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                        Join thousands of satisfied passengers who trust ICML for their daily commute. Book your ride now and enjoy a seamless travel experience.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                            Book Your Ride
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-200">
                            Learn More
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                                <Shield className="h-6 w-6 text-gray-600" />
                            </div>
                            <div className="text-gray-900 font-semibold">Safe Travel</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                                <Clock className="h-6 w-6 text-gray-600" />
                            </div>
                            <div className="text-gray-900 font-semibold">24/7 Service</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                                <Star className="h-6 w-6 text-gray-600" />
                            </div>
                            <div className="text-gray-900 font-semibold">4.8/5 Rating</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                                <CheckCircle className="h-6 w-6 text-gray-600" />
                            </div>
                            <div className="text-gray-900 font-semibold">100K+ Rides</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;