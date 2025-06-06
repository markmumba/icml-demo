import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Building2,
    MapPin,
    Users,
    Bus,
    ArrowRight,
    Star,
    Shield,
    Clock,
    CheckCircle
} from 'lucide-react';
import Image from 'next/image';

const Partners = () => {
    const partners = [
        {
            name: "Expreso Ltd",
            logo: "/about/partners/expreso.svg",
            description: "Leading provider of express services across major Nairobi routes with a focus on comfort and reliability.",
            routes: ["CBD", "Westlands", "Karen", "Lavington"],
            stats: {
                vehicles: "50+",
                drivers: "100+",
                years: "15+"
            },
            features: ["Express Service", "Premium Comfort", "24/7 Operations"]
        },
        {
            name: "ROG Sacco",
            logo: "/about/partners/rog.svg",
            description: "Specialized in residential routes, providing reliable service to Nairobi's growing neighborhoods.",
            routes: ["Ruiru", "Thika", "Juja", "Kahawa"],
            stats: {
                vehicles: "40+",
                drivers: "80+",
                years: "12+"
            },
            features: ["Residential Routes", "Regular Service", "Family-Friendly"]
        },
        {
            name: "Sowetamu",
            logo: "/about/partners/sowetamu.svg",
            description: "Known for extensive coverage of South and West Nairobi routes with modern fleet.",
            routes: ["Langata", "Kibera", "Ngong", "Karen"],
            stats: {
                vehicles: "45+",
                drivers: "90+",
                years: "10+"
            },
            features: ["Modern Fleet", "Wide Coverage", "Eco-Friendly"]
        },
        {
            name: "Latema",
            logo: "/about/partners/latema.svg",
            description: "Specialized in CBD and surrounding business district routes with premium service.",
            routes: ["CBD", "Industrial Area", "Embakasi", "Donholm"],
            stats: {
                vehicles: "35+",
                drivers: "70+",
                years: "8+"
            },
            features: ["Business Routes", "Premium Service", "WiFi Enabled"]
        },
        {
            name: "Tripple S Services",
            logo: "/about/partners/tripple-s.svg",
            description: "Focusing on safety and comfort with a modern fleet serving key Nairobi routes.",
            routes: ["CBD", "Eastlands", "Buruburu", "Embakasi"],
            stats: {
                vehicles: "30+",
                drivers: "60+",
                years: "5+"
            },
            features: ["Safety First", "Modern Fleet", "Comfort Focus"]
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 mb-4">
                        <Building2 className="mr-2 h-4 w-4" />
                        Our Network
                    </Badge>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Partner Sacco Network
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Working with Nairobi's most trusted transport providers to deliver exceptional service
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
                    {partners.map((partner, index) => (
                        <div key={index} className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                                {/* Logo/Name */}
                                <div className="relative w-full h-24 mb-6 rounded-xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700">
                                        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                                            {partner.name}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-6">
                                    <p className="text-gray-600">{partner.description}</p>

                                    {/* Routes */}
                                    <div className="space-y-2">
                                        <div className="flex items-center text-gray-600">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            <span className="text-sm font-medium">Key Routes</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {partner.routes.map((route, i) => (
                                                <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                    {route}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-100">
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-gray-900">{partner.stats.vehicles}</div>
                                            <div className="text-xs text-gray-600">Vehicles</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-gray-900">{partner.stats.drivers}</div>
                                            <div className="text-xs text-gray-600">Drivers</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-gray-900">{partner.stats.years}</div>
                                            <div className="text-xs text-gray-600">Years</div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        <div className="flex items-center text-gray-600">
                                            <Star className="h-4 w-4 mr-2" />
                                            <span className="text-sm font-medium">Key Features</span>
                                        </div>
                                        <div className="space-y-2">
                                            {partner.features.map((feature, i) => (
                                                <div key={i} className="flex items-center text-gray-600">
                                                    <CheckCircle className="h-4 w-4 mr-2 text-gray-400" />
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Partnership Benefits */}
                <div className="max-w-5xl mx-auto mb-20">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Why Partner With Us</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-6 text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 mb-4">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Safety Standards</h4>
                            <p className="text-gray-600 text-sm">Comprehensive safety protocols and regular training</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 mb-4">
                                <Clock className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h4>
                            <p className="text-gray-600 text-sm">Round-the-clock technical and operational support</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 mb-4">
                                <Bus className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Modern Fleet</h4>
                            <p className="text-gray-600 text-sm">Access to latest technology and vehicle upgrades</p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Become a Partner
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Join our network of trusted transport providers and grow your business with ICML
                        </p>
                        <Button size="lg" className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white">
                            Partner With Us
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners; 