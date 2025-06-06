import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Shield,
    AlertTriangle,
    FileCheck,
    Users,
    ArrowRight,
    CheckCircle,
    Award,
    ClipboardCheck,
    Car,
    Clock
} from 'lucide-react';

const Safety = () => {
    const safetyMeasures = [
        {
            icon: <Car className="h-6 w-6" />,
            title: "Vehicle Safety",
            description: "Regular maintenance checks and modern safety features in all vehicles"
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "Driver Training",
            description: "Comprehensive training programs and regular skill assessments"
        },
        {
            icon: <AlertTriangle className="h-6 w-6" />,
            title: "Emergency Response",
            description: "24/7 emergency support and rapid response protocols"
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: "Real-Time Monitoring",
            description: "Continuous tracking and monitoring of all vehicles"
        }
    ];

    const certifications = [
        {
            icon: <Award className="h-6 w-6" />,
            title: "ISO 9001:2015",
            description: "Quality Management System Certification"
        },
        {
            icon: <Shield className="h-6 w-6" />,
            title: "Safety First",
            description: "NTSA Safety Compliance Certification"
        },
        {
            icon: <FileCheck className="h-6 w-6" />,
            title: "Legal Compliance",
            description: "Full compliance with all transport regulations"
        },
        {
            icon: <ClipboardCheck className="h-6 w-6" />,
            title: "Environmental",
            description: "Eco-friendly operations certification"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 mb-4">
                        <Shield className="mr-2 h-4 w-4" />
                        Safety First
                    </Badge>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Safety & Compliance
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Your safety is our top priority. We maintain the highest standards in vehicle safety, driver training, and regulatory compliance
                    </p>
                </div>

                {/* Safety Measures */}
                <div className="max-w-7xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Safety Measures</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comprehensive safety protocols and regular training ensure the highest standards of service
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {safetyMeasures.map((measure, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white mb-4">
                                    {measure.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{measure.title}</h4>
                                <p className="text-gray-600 text-sm">{measure.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div className="max-w-7xl mx-auto mb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Certifications List */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-gray-900">Our Certifications</h3>
                            <div className="space-y-6">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white">
                                            {cert.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{cert.title}</h4>
                                            <p className="text-gray-600 text-sm">{cert.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Safety Image */}
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-600 to-gray-700">
                                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                                    Safety Standards Image
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Report a Safety Concern
                        </h3>
                        <p className="text-gray-600 mb-8">
                            We take all safety concerns seriously. Contact us immediately if you notice any safety issues
                        </p>
                        <Button size="lg" className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white">
                            Report Issue
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Safety; 