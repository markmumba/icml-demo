"use client"
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    HelpCircle,
    CreditCard,
    Shield,
    MapPin,
    Smartphone,
    Clock,
    Phone,
    MessageCircle,
    ChevronDown,
    ChevronUp,
    LucideIcon,
    Search
} from 'lucide-react';

type FAQ = {
    id: number;
    question: string;
    answer: string;
    category: string;
};

type FAQCategory = {
    icon: LucideIcon;
    title: string;
    description: string;
    faqs: FAQ[];
};

const FAQSection = () => {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedFAQs, setExpandedFAQs] = useState<number[]>([]);

    const faqCategories: { [key: string]: FAQCategory } = {
        booking: {
            icon: CreditCard,
            title: "Booking & Payments",
            description: "Everything about reservations, payments, and refunds",
            faqs: [
                {
                    id: 1,
                    category: "booking",
                    question: "How do I book a seat with ICML?",
                    answer: "You can book through our mobile app, website, or by calling our customer service. Simply select your route, preferred time, and payment method. Booking takes less than 2 minutes!"
                },
                {
                    id: 2,
                    category: "booking",
                    question: "What payment methods do you accept?",
                    answer: "We accept M-Pesa, Visa, Mastercard, and cash payments. Mobile money is our most popular option with instant confirmation and digital receipts."
                },
                {
                    id: 3,
                    category: "booking",
                    question: "Can I get a refund if I cancel my trip?",
                    answer: "Yes! Cancel up to 2 hours before departure for a full refund. Cancellations within 2 hours receive a 50% refund. Refunds are processed within 24 hours."
                }
            ]
        },
        safety: {
            icon: Shield,
            title: "Safety & Security",
            description: "Learn about our safety measures and protocols",
            faqs: [
                {
                    id: 4,
                    category: "safety",
                    question: "What safety measures do you have in place?",
                    answer: "All vehicles have CCTV monitoring, GPS tracking, first aid kits, and emergency communication systems. Our drivers undergo regular safety training and medical checkups."
                },
                {
                    id: 5,
                    category: "safety",
                    question: "Are your vehicles regularly maintained?",
                    answer: "Yes! We follow strict maintenance schedules with daily inspections, weekly services, and monthly comprehensive checks. All vehicles are NTSA certified and roadworthy."
                }
            ]
        },
        routes: {
            icon: MapPin,
            title: "Routes & Schedules",
            description: "Information about our routes and timings",
            faqs: [
                {
                    id: 6,
                    category: "routes",
                    question: "Which routes do you cover?",
                    answer: "We operate 50+ routes covering Nairobi CBD, Westlands, Kasarani, Ngong Road, Thika Road, and surrounding areas. Check our route map for detailed coverage."
                },
                {
                    id: 7,
                    category: "routes",
                    question: "How often do buses run?",
                    answer: "Peak hours: every 10-15 minutes. Off-peak: every 20-30 minutes. Weekend schedules vary by route. Real-time updates available on our app."
                }
            ]
        },
        technology: {
            icon: Smartphone,
            title: "App & Technology",
            description: "Discover our digital features and services",
            faqs: [
                {
                    id: 8,
                    category: "technology",
                    question: "How does real-time tracking work?",
                    answer: "Our GPS-enabled vehicles send location updates every 30 seconds. The app shows live bus positions, estimated arrival times, and route status."
                },
                {
                    id: 9,
                    category: "technology",
                    question: "Is the mobile app free to download?",
                    answer: "Yes! The ICML app is completely free on Google Play Store and Apple App Store. No hidden fees or subscription charges."
                }
            ]
        }
    };

    // Combine all FAQs for search functionality
    const allFAQs = Object.values(faqCategories).flatMap(category => category.faqs);

    // Filter FAQs based on search query and active category
    const filteredFAQs = allFAQs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const toggleFAQ = (id: number) => {
        setExpandedFAQs(prev =>
            prev.includes(id) ? prev.filter(faqId => faqId !== id) : [...prev, id]
        );
    };

    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100/30 py-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge className="bg-gray-100 text-gray-800 mb-4">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Frequently Asked Questions
                    </Badge>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Find Answers to
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400">
                            Common Questions
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Get instant answers to your questions. Can't find what you're looking for?
                        Our support team is available 24/7 to assist you.
                    </p>
                </div>

                {/* Search and Categories */}
                <div className="max-w-4xl mx-auto mb-12">
                    {/* Search Bar */}
                    <div className="relative mb-8">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-gray-400 focus:ring-0 text-gray-900 placeholder-gray-400 transition-all duration-200"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Category Pills */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === 'all'
                                ? 'bg-gray-900 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            All Questions
                        </button>
                        {Object.entries(faqCategories).map(([key, category]) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeCategory === key
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {React.createElement(category.icon, { className: "h-4 w-4" })}
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ List */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {filteredFAQs.map((faq) => (
                            <div
                                key={faq.id}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                                >
                                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                                    {expandedFAQs.includes(faq.id) ? (
                                        <ChevronUp className="h-5 w-5 text-gray-400" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                                {expandedFAQs.includes(faq.id) && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Support CTA */}
                <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-center text-white">
                    <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Our friendly support team is here to help you 24/7.
                        Get personalized assistance for your specific needs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                            <Phone className="mr-2 h-5 w-5" />
                            Call Support
                        </Button>
                        <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Live Chat
                        </Button>
                    </div>

                    <div className="mt-8 flex items-center justify-center space-x-8 text-gray-300">
                        <div className="flex items-center">
                            <Clock className="h-5 w-5 mr-2" />
                            <span>24/7 Available</span>
                        </div>
                        <div className="flex items-center">
                            <Shield className="h-5 w-5 mr-2" />
                            <span>Secure Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;