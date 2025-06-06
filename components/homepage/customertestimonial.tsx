"use client"
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Quote, Users, ThumbsUp, Clock, Shield } from 'lucide-react';

const TestimonialsSection = () => {
    // Extended testimonials for masonry layout
    const testimonials = [
        {
            id: 1,
            name: "Grace Wanjiku",
            handle: "@gracew_254",
            avatar: "GW",
            text: "ICML has transformed my daily commute! The real-time tracking means I know exactly when my bus will arrive. No more waiting in uncertainty.",
            rating: 5
        },
        {
            id: 2,
            name: "James Kiprotich",
            handle: "@jkiprotich",
            avatar: "JK",
            text: "Safety and reliability are my top priorities, and ICML delivers on both. I've been using their services for over a year and have never been disappointed.",
            rating: 5
        },
        {
            id: 3,
            name: "Mary Achieng",
            handle: "@mary_achieng",
            avatar: "MA",
            text: "As a student, affordable transport is crucial. ICML offers great value with comfortable buses and the mobile app makes booking so easy.",
            rating: 5
        },
        {
            id: 4,
            name: "Peter Mwangi",
            handle: "@petermwangi_ke",
            avatar: "PM",
            text: "I appreciate the respect and care ICML staff show to elderly passengers. The customer service team is always helpful.",
            rating: 5
        },
        {
            id: 5,
            name: "Sarah Njeri",
            handle: "@sarah_njeri",
            avatar: "SN",
            text: "The M-Pesa integration is seamless! No more carrying cash or worrying about exact change. Technology done right.",
            rating: 5
        },
        {
            id: 6,
            name: "David Otieno",
            handle: "@david_otieno",
            avatar: "DO",
            text: "Clean buses, professional drivers, and always on time. ICML has set the standard for public transport in Nairobi.",
            rating: 5
        },
        {
            id: 7,
            name: "Faith Wambui",
            handle: "@faith_wambui",
            avatar: "FW",
            text: "The 24/7 customer support saved me when I had an emergency. Quick response and very helpful staff.",
            rating: 5
        },
        {
            id: 8,
            name: "John Kamau",
            handle: "@johnkamau_nbo",
            avatar: "JK2",
            text: "Free WiFi on board is a game changer for my work commute. I can stay productive during my journey.",
            rating: 5
        },
        {
            id: 9,
            name: "Linda Muthoni",
            handle: "@linda_muthoni",
            avatar: "LM",
            text: "The route coverage is excellent. ICML connects all the places I need to go with reliable schedules.",
            rating: 5
        },
        {
            id: 10,
            name: "Kevin Ochieng",
            handle: "@kevin_ochieng",
            avatar: "KO",
            text: "Best transport experience in Nairobi. Modern fleet, friendly staff, and transparent pricing.",
            rating: 5
        }
    ];

    // Split testimonials into 3 columns
    const column1 = testimonials.slice(0, 4);
    const column2 = testimonials.slice(4, 7);
    const column3 = testimonials.slice(7, 10);

    const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
        <div className="bg-gray-900 rounded-2xl p-6 mb-6 hover:bg-gray-800 transition-all duration-300 cursor-pointer relative group">
            {/* Header */}
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.avatar}
                </div>
                <div className="flex-1">
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.handle}</div>
                </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400 mr-1" />
                ))}
            </div>

            {/* Text */}
            <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>

            {/* Hover effect indicator */}
            <div className="absolute inset-0 border-2 border-gray-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    );

    const stats = [
        { value: "4.8/5", label: "Average Rating", icon: Star, color: "text-gray-600" },
        { value: "12,000+", label: "Happy Reviews", icon: ThumbsUp, color: "text-gray-600" },
        { value: "95%", label: "Recommend Us", icon: Users, color: "text-gray-600" },
        { value: "99.2%", label: "On-Time Rating", icon: Clock, color: "text-gray-600" }
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge className="bg-gray-100 text-gray-800 mb-4">
                        Customer Reviews
                    </Badge>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        What People Using ICML
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400">
                            Are Saying
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Real feedback from thousands of satisfied passengers who trust ICML
                        for their daily journeys across Nairobi.
                    </p>
                </div>

                {/* Review Stats */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <stat.icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Masonry Testimonials Layout */}
                <div className="relative bg-gray-950 rounded-3xl p-8 mb-16 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-gray-800/20"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Live Customer Feedback</h3>
                            <p className="text-gray-400">Hover over any review to pause and read</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 max-h-96 overflow-hidden">
                            {/* Column 1 - Moving Up */}
                            <div className="space-y-6 animate-scroll-up group-hover:pause">
                                {[...column1, ...column1].map((testimonial, index) => (
                                    <div key={`col1-${index}`} className="group">
                                        <TestimonialCard testimonial={testimonial} />
                                    </div>
                                ))}
                            </div>

                            {/* Column 2 - Moving Down */}
                            <div className="space-y-6 animate-scroll-down group-hover:pause">
                                {[...column2, ...column2].map((testimonial, index) => (
                                    <div key={`col2-${index}`} className="group">
                                        <TestimonialCard testimonial={testimonial} />
                                    </div>
                                ))}
                            </div>

                            {/* Column 3 - Moving Up */}
                            <div className="space-y-6 animate-scroll-up group-hover:pause">
                                {[...column3, ...column3].map((testimonial, index) => (
                                    <div key={`col3-${index}`} className="group">
                                        <TestimonialCard testimonial={testimonial} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Gradient overlays for smooth fade */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-950 to-transparent z-20"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-950 to-transparent z-20"></div>
                </div>

                {/* Summary Stats */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-center text-white mb-16">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">12,000+</div>
                            <div className="text-gray-300">Customer Reviews</div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-8 w-8 fill-gray-400 text-gray-400 mx-1" />
                                ))}
                            </div>
                            <div className="text-2xl font-bold mb-2">4.8 out of 5</div>
                            <div className="text-gray-300">Average Rating</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">95%</div>
                            <div className="text-gray-300">Would Recommend</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Satisfied Passengers</h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Experience the reliability, safety, and convenience that makes ICML
                        Nairobi's most trusted transport network.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 text-lg font-semibold">
                            Start Your Journey
                        </Button>
                        <Button size="lg" variant="outline" className="border-2 border-gray-600 text-gray-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                            Read More Reviews
                        </Button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }

        .group:hover .animate-scroll-up,
        .group:hover .animate-scroll-down {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default TestimonialsSection;