import React from 'react';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Shield, Users } from 'lucide-react';

const TrustSection = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                        TRUSTED BY THOUSANDS
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Partnered with Nairobi&apos;s leading transport Saccos for reliable service
                    </p>
                </div>

                {/* Partner Saccos */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-center justify-items-center mb-16">
                    {/* Expreso Ltd */}
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                            <span className="text-white font-bold text-lg">EX</span>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">Expreso Ltd</span>
                    </div>

                    {/* ROG */}
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                            <span className="text-white font-bold text-lg">ROG</span>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">ROG Sacco</span>
                    </div>

                    {/* Sowetamu */}
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                            <span className="text-white font-bold text-lg">SW</span>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">Sowetamu</span>
                    </div>

                    {/* Latema */}
                    <div className="flex flex-col items-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                            <span className="text-white font-bold text-lg">LT</span>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">Latema</span>
                    </div>

                    {/* Tripple S Services */}
                    <div className="flex flex-col items-center group col-span-2 lg:col-span-1">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                            <span className="text-white font-bold text-lg">3S</span>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">Tripple S Services</span>
                    </div>
                </div>

                {/* Trust Metrics */}
                <div className="grid md:grid-cols-4 gap-8 py-12 border-t border-gray-200">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="h-8 w-8 text-gray-600" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">100,000+</div>
                        <div className="text-gray-600">Happy Passengers</div>
                        <div className="text-sm text-gray-500 mt-1">Daily commuters trust us</div>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="h-8 w-8 text-gray-600" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">99.5%</div>
                        <div className="text-gray-600">Safety Record</div>
                        <div className="text-sm text-gray-500 mt-1">Industry-leading safety</div>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="h-8 w-8 text-gray-600" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                        <div className="text-gray-600">Active Routes</div>
                        <div className="text-sm text-gray-500 mt-1">Across Nairobi & beyond</div>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="h-8 w-8 text-gray-600" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                        <div className="text-gray-600">On-Time Rate</div>
                        <div className="text-sm text-gray-500 mt-1">Reliable schedule adherence</div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="bg-gray-50 rounded-2xl p-8 mt-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Certified & Compliant</h3>
                        <p className="text-gray-600">Meeting the highest industry standards for your safety</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-center">
                                <Badge className="bg-gray-100 text-gray-800 mb-3">NTSA Certified</Badge>
                                <div className="text-sm text-gray-600">National Transport & Safety Authority</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-center">
                                <Badge className="bg-gray-100 text-gray-800 mb-3">ISO Compliant</Badge>
                                <div className="text-sm text-gray-600">Quality Management Systems</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-center">
                                <Badge className="bg-gray-100 text-gray-800 mb-3">Safety Audited</Badge>
                                <div className="text-sm text-gray-600">Regular safety inspections</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;