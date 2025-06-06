import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Heart,
    Users,
    GraduationCap,
    ArrowRight,
    Building2,
    TreePalm
} from 'lucide-react';
import Image from 'next/image';

const Community = () => {
    const initiatives = [
        {
            icon: <GraduationCap className="h-6 w-6" />,
            title: "Education Support",
            description: "Scholarship programs and educational resources for underprivileged students"
        },
        {
            icon: <TreePalm className="h-6 w-6" />,
            title: "Environmental Care",
            description: "Tree planting initiatives and eco-friendly transport solutions"
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "Youth Programs",
            description: "Skills development and employment opportunities for young people"
        },
        {
            icon: <Building2 className="h-6 w-6" />,
            title: "Community Development",
            description: "Infrastructure support and community center initiatives"
        }
    ];

    const impactStats = [
        {
            icon: <GraduationCap className="h-6 w-6" />,
            value: "500+",
            label: "Students Supported"
        },
        {
            icon: <TreePalm className="h-6 w-6" />,
            value: "10,000+",
            label: "Trees Planted"
        },
        {
            icon: <Users className="h-6 w-6" />,
            value: "1,000+",
            label: "Youth Employed"
        },
        {
            icon: <Building2 className="h-6 w-6" />,
            value: "50+",
            label: "Communities Served"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 mb-4">
                        <Heart className="mr-2 h-4 w-4" />
                        Social Impact
                    </Badge>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Community Impact
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Making a positive difference in our communities through sustainable initiatives and social responsibility programs
                    </p>
                </div>

                {/* Impact Stats */}
                <div className="max-w-7xl mx-auto mb-20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {impactStats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white mb-4 mx-auto">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Initiatives */}
                <div className="max-w-7xl mx-auto mb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Initiatives List */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-gray-900">Our Initiatives</h3>
                            <div className="space-y-6">
                                {initiatives.map((initiative, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white">
                                            {initiative.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{initiative.title}</h4>
                                            <p className="text-gray-600 text-sm">{initiative.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Community Images Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative h-48 rounded-xl overflow-hidden">
                                    <Image
                                        src="/images/community/education.jpg"
                                        alt="ICML's education support programs"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-64 rounded-xl overflow-hidden">
                                    <Image
                                        src="/images/community/environment.jpg"
                                        alt="ICML's environmental initiatives"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="relative h-64 rounded-xl overflow-hidden">
                                    <Image
                                        src="/images/community/youth.jpg"
                                        alt="ICML's youth development programs"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-48 rounded-xl overflow-hidden">
                                    <Image
                                        src="/images/community/development.jpg"
                                        alt="ICML's community development projects"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Join Our Community Initiatives
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Be part of our mission to create positive change in our communities
                        </p>
                        <Button size="lg" className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white">
                            Get Involved
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community; 