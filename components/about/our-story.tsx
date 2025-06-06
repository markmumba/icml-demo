import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Calendar,
    MapPin,
    Users,
    ArrowRight,
    Bus,
    Shield,
    Star
} from 'lucide-react';

const OurStory = () => {
    const milestones = [
        {
            year: "2020",
            title: "The Beginning",
            description: "ICML was founded with a vision to transform Nairobi&apos;s public transport system through technology and partnerships.",
            icon: Bus,
            color: "from-gray-600 to-gray-700"
        },
        {
            year: "2021",
            title: "First Partnership",
            description: "Established our first Sacco partnership, marking the beginning of our network expansion.",
            icon: Users,
            color: "from-gray-600 to-gray-700"
        },
        {
            year: "2022",
            title: "Technology Integration",
            description: "Launched our mobile app and real-time tracking system, revolutionizing the passenger experience.",
            icon: Star,
            color: "from-gray-600 to-gray-700"
        },
        {
            year: "2023",
            title: "Safety Certification",
            description: "Achieved NTSA safety certification and implemented comprehensive safety protocols.",
            icon: Shield,
            color: "from-gray-600 to-gray-700"
        },
        {
            year: "2024",
            title: "Network Expansion",
            description: "Expanded to 50+ routes and partnered with 5 leading Saccos, becoming Nairobi&apos;s most trusted transport network.",
            icon: MapPin,
            color: "from-gray-600 to-gray-700"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 mb-4">
                        <Calendar className="mr-2 h-4 w-4" />
                        Our Journey
                    </Badge>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        From Vision to Reality
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Our journey from a startup to Nairobi&apos;s leading transport network has been marked by innovation,
                        partnerships, and an unwavering commitment to excellence.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Center line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

                    {/* Milestones */}
                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                {/* Content */}
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 mb-4">
                                            <milestone.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900 mb-2">{milestone.year}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                                    </div>
                                </div>

                                {/* Center dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-white"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="max-w-3xl mx-auto mt-20 text-center">
                    <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Join Us in Shaping the Future
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Be part of our journey as we continue to innovate and transform public transportation in Nairobi.
                        </p>
                        <Button size="lg" className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white">
                            Learn More About Our Vision
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory; 