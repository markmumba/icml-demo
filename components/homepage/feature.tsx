import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
    MapPin,
    Clock,
    Shield,
    Smartphone,
    CreditCard,
    Headphones,
    Navigation,
    Wifi,
    Star,
    CheckCircle
} from 'lucide-react';

const FeaturesSection = () => {
    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100/30 py-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge className="bg-gray-100 text-gray-800 mb-4">
                        <Shield className="mr-2 h-4 w-4" />
                        Modern Transport Solutions
                    </Badge>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Features That Set Us
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400">
                            Apart From Others
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Experience the future of public transport with cutting-edge technology,
                        unmatched safety standards, and customer-first innovations.
                    </p>
                </div>

                {/* Main Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Feature 1: Real-time Tracking */}
                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                            <Image
                                src="/features/tracking.jpg"
                                alt="Real-time bus tracking interface"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                            <Navigation className="h-8 w-8 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Tracking</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Track your bus in real-time with our advanced GPS system. Know exactly
                            when your ride will arrive and plan your journey with confidence.
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-gray-500 mr-3" />
                                Real-time location updates
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-gray-500 mr-3" />
                                Estimated arrival times
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-gray-500 mr-3" />
                                Route optimization
                            </div>
                        </div>

                        <Button variant="outline" className="w-full group-hover:bg-gray-50 group-hover:border-gray-300">
                            <Navigation className="mr-2 h-4 w-4" />
                            Track Now
                        </Button>
                    </div>

                    {/* Feature 2: Multiple Payment Options */}
                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                            <Image
                                src="/features/payments.jpg"
                                alt="Multiple payment options interface"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                            <CreditCard className="h-8 w-8 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Payments</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Pay your way with multiple secure payment options. From mobile money to cards,
                            we&apos;ve made transactions simple and hassle-free.
                        </p>

                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors duration-200">
                                <div className="text-gray-600 font-semibold text-sm">M-Pesa</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors duration-200">
                                <div className="text-gray-600 font-semibold text-sm">Cards</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors duration-200">
                                <div className="text-gray-600 font-semibold text-sm">Cash</div>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full group-hover:bg-gray-50 group-hover:border-gray-300">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Pay Now
                        </Button>
                    </div>

                    {/* Feature 3: 24/7 Support */}
                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                            <Image
                                src="/features/support.jpg"
                                alt="24/7 customer support team"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                            <Headphones className="h-8 w-8 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Customer Support</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Get help whenever you need it. Our dedicated support team is available
                            round the clock to assist with bookings, queries, and emergencies.
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-gray-500 mr-3" />
                                Instant chat support
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-gray-500 mr-3" />
                                Phone & WhatsApp help
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-gray-500 mr-3" />
                                Emergency assistance
                            </div>
                        </div>

                        <Button variant="outline" className="w-full group-hover:bg-gray-50 group-hover:border-gray-300">
                            <Headphones className="mr-2 h-4 w-4" />
                            Get Help
                        </Button>
                    </div>
                </div>

                {/* Secondary Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                        <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                            <Image
                                src="/features/moblie-app.jpg"
                                alt="Mobile app interface"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Smartphone className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Mobile App</h4>
                        <p className="text-sm text-gray-600">Book and manage trips from your phone</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                        <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                            <Image
                                src="/features/wifi.jpg"
                                alt="Free WiFi on board"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Wifi className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Free WiFi</h4>
                        <p className="text-sm text-gray-600">Stay connected during your journey</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                        <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                            <Image
                                src="/features/safety.jpg"
                                alt="Safety features"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Safety First</h4>
                        <p className="text-sm text-gray-600">CCTV monitoring and emergency protocols</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                        <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                            <Image
                                src="/features/comfort.jpg"
                                alt="Comfortable seating"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Star className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Premium Comfort</h4>
                        <p className="text-sm text-gray-600">Modern fleet with comfortable seating</p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/features/fleet.jpg"
                            alt="Modern bus fleet"
                            fill
                            className="object-cover opacity-20"
                        />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join thousands of satisfied passengers who choose ICML for safe,
                            reliable, and comfortable journeys across Nairobi&apos;s.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                                <MapPin className="mr-2 h-5 w-5" />
                                Find Your Route
                            </Button>
                            <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold">
                                <Smartphone className="mr-2 h-5 w-5" />
                                Download App
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 grid md:grid-cols-4 gap-6">
                            <div className="flex items-center justify-center text-gray-300">
                                <Shield className="h-5 w-5 mr-2" />
                                <span>Safety Certified</span>
                            </div>
                            <div className="flex items-center justify-center text-gray-300">
                                <Clock className="h-5 w-5 mr-2" />
                                <span>24/7 Service</span>
                            </div>
                            <div className="flex items-center justify-center text-gray-300">
                                <Star className="h-5 w-5 mr-2" />
                                <span>Premium Quality</span>
                            </div>
                            <div className="flex items-center justify-center text-gray-300">
                                <CheckCircle className="h-5 w-5 mr-2" />
                                <span>100% Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;