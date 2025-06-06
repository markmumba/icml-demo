import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Target,
    Eye,
    Heart,
    Shield,
    Users,
    Star,
    ArrowRight,
    CheckCircle
} from 'lucide-react';

const MissionVision = () => {
    const values = [
        {
            title: "Safety First",
            description: "Every journey prioritizes passenger safety through rigorous protocols and continuous monitoring.",
            icon: Shield,
            color: "from-gray-600 to-gray-700"
        },
        {
            title: "Customer-Centric",
            description: "We put our passengers first, ensuring comfort, reliability, and exceptional service.",
            icon: Heart,
            color: "from-gray-600 to-gray-700"
        },
        {
            title: "Innovation",
            description: "Constantly evolving our technology and services to enhance the passenger experience.",
            icon: Star,
            color: "from-gray-600 to-gray-700"
        },
        {
            title: "Partnership",
            description: "Building strong relationships with Saccos and communities for sustainable growth.",
            icon: Users,
            color: "from-gray-600 to-gray-700"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 mb-4">
                        <Target className="mr-2 h-4 w-4" />
                        Our Core
                    </Badge>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Mission, Vision & Values
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Our guiding principles that drive us to transform public transportation in Nairobi&apos;s
                    </p>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                    {/* Mission Card */}
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-gray-600 to-gray-700 mb-6">
                            <Target className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            To revolutionize public transportation in Nairobi&apos;s by providing safe, reliable, and innovative
                            mobility solutions that connect communities and enhance the quality of life for all citizens.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Safe and reliable transport services",
                                "Cutting-edge technology integration",
                                "Exceptional customer experience",
                                "Sustainable growth and development"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-600">
                                    <CheckCircle className="h-5 w-5 text-gray-500 mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-gray-600 to-gray-700 mb-6">
                            <Eye className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            To be Nairobi&apos;s most trusted and innovative transport network, setting new standards for
                            safety, reliability, and customer satisfaction while contributing to the city&apos;s sustainable development.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Leading transport innovation",
                                "Expanding network coverage",
                                "Building community trust",
                                "Shaping future mobility"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-600">
                                    <CheckCircle className="h-5 w-5 text-gray-500 mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 mb-4">
                                    <value.icon className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="max-w-3xl mx-auto mt-20 text-center">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Join Our Journey
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Experience the future of public transportation with ICML&apos;s commitment to excellence and innovation.
                        </p>
                        <Button size="lg" className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white">
                            Explore Our Services
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join thousands of satisfied passengers who choose ICML for safe,
                    reliable, and comfortable journeys across Nairobi&apos;s.
                </p>
            </div>
        </section>
    );
};

export default MissionVision; 