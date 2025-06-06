import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Bus,
    Wifi,
    Shield,
    Smartphone,
    Gauge,
    Users,
    ArrowRight,
    Zap,
    MapPin,
    Clock
} from 'lucide-react';
import Image from 'next/image';

const Fleet = () => {
    const fleetFeatures = [
        {
            icon: <Shield className="h-6 w-6" />,
            title: "Safety First",
            description: "Advanced safety systems including GPS tracking, speed monitoring, and emergency response"
        },
        {
            icon: <Wifi className="h-6 w-6" />,
            title: "Free WiFi",
            description: "High-speed internet connectivity for all passengers throughout their journey"
        },
        {
            icon: <Smartphone className="h-6 w-6" />,
            title: "Mobile App",
            description: "Real-time tracking, booking, and payment through our mobile application"
        },
        {
            icon: <Gauge className="h-6 w-6" />,
            title: "Eco-Friendly",
            description: "Modern engines with reduced emissions and improved fuel efficiency"
        }
    ];

    const techFeatures = [
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Real-Time Tracking",
            description: "Live location updates and ETA predictions"
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: "Smart Scheduling",
            description: "AI-powered route optimization and timing"
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "Digital Payments",
            description: "Multiple payment options including mobile money"
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: "Instant Updates",
            description: "Real-time notifications for delays and changes"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 mb-4">
                        <Bus className="mr-2 h-4 w-4" />
                        Our Fleet
                    </Badge>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Modern Fleet & Technology
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Experience the future of public transportation with our state-of-the-art vehicles and innovative technology
                    </p>
                </div>

                {/* Fleet Overview */}
                <div className="max-w-7xl mx-auto mb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Fleet Image */}
                        <div className="relative h-[400px] rounded-2xl overflow-hidden">
                            <Image
                                src="/features/fleet.jpg"
                                alt="ICML's modern fleet of vehicles"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Fleet Features */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-gray-900">Our Modern Fleet</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {fleetFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h4>
                                            <p className="text-gray-600 text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technology Section */}
                <div className="max-w-7xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovative Technology</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our cutting-edge technology ensures a seamless and efficient travel experience for all passengers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {techFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white mb-4">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Experience Our Service
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Book your next journey with ICML and experience the future of public transportation
                        </p>
                        <Button size="lg" className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white">
                            Book Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fleet; 