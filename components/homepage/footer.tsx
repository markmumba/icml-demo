"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Smartphone,
    Shield,
    Star,
    Send,
    CheckCircle,
    Award,
    ChevronRight,
    Globe,
    Heart
} from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const quickLinks = [
        { name: 'Find Routes', href: '#routes' },
        { name: 'Book Online', href: '#booking' },
        { name: 'Track Bus', href: '#tracking' },
        { name: 'Fare Calculator', href: '#fares' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'Mobile App', href: '#app' }
    ];

    const supportLinks = [
        { name: 'Help Center', href: '#help' },
        { name: 'Contact Support', href: '#support' },
        { name: 'Report Issue', href: '#report' },
        { name: 'Lost & Found', href: '#lost-found' },
        { name: 'Feedback', href: '#feedback' },
        { name: 'Safety Tips', href: '#safety' }
    ];

    const companyLinks = [
        { name: 'About ICML', href: '#about' },
        { name: 'Our Story', href: '#story' },
        { name: 'Partner Saccos', href: '#partners' },
        { name: 'Careers', href: '#careers' },
        { name: 'News & Updates', href: '#news' },
        { name: 'Corporate Services', href: '#corporate' }
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Refund Policy', href: '#refunds' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'Accessibility', href: '#accessibility' }
    ];

    const partnerSaccos = [
        { name: 'Expreso Ltd', color: 'from-gray-600 to-gray-700', initials: 'EX' },
        { name: 'ROG Sacco', color: 'from-gray-600 to-gray-700', initials: 'ROG' },
        { name: 'Sowetamu', color: 'from-gray-600 to-gray-700', initials: 'SW' },
        { name: 'Latema', color: 'from-gray-600 to-gray-700', initials: 'LT' },
        { name: 'Tripple S', color: 'from-gray-600 to-gray-700', initials: '3S' }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 lg:px-12 pt-20 pb-8">
                {/* Top Section - Newsletter & Contact */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Newsletter Signup */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-600/20 to-transparent rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gray-600/20 to-transparent rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <Badge className="bg-gray-600/30 text-gray-200 mb-4">Stay Connected</Badge>
                            <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Get exclusive updates, special offers, and be the first to know about new routes and features.
                            </p>

                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                                    />
                                    <Button
                                        onClick={handleSubscribe}
                                        className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
                                    >
                                        {isSubscribed ? (
                                            <>
                                                <CheckCircle className="mr-2 h-5 w-5" />
                                                Subscribed!
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-5 w-5" />
                                                Subscribe
                                            </>
                                        )}
                                    </Button>
                                </div>
                                <p className="text-sm text-gray-400 flex items-center">
                                    <Shield className="h-4 w-4 mr-2" />
                                    We respect your privacy. Unsubscribe anytime.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Contact */}
                    <div className="space-y-8">
                        <div>
                            <Badge className="bg-gray-600/30 text-gray-200 mb-4">Contact Us</Badge>
                            <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-200 group">
                                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                                    <Phone className="h-6 w-6 text-white" />
                                </div>
                                <div className="font-semibold mb-1">24/7 Support Hotline</div>
                                <div className="text-gray-300">+254 700 123 456</div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-200 group">
                                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                                    <Mail className="h-6 w-6 text-white" />
                                </div>
                                <div className="font-semibold mb-1">Email Support</div>
                                <div className="text-gray-300">support@icml.co.ke</div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-200 group">
                                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                                    <MapPin className="h-6 w-6 text-white" />
                                </div>
                                <div className="font-semibold mb-1">Head Office</div>
                                <div className="text-gray-300">Nairobi CBD, Kenya</div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-200 group">
                                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                                    <Clock className="h-6 w-6 text-white" />
                                </div>
                                <div className="font-semibold mb-1">Operating Hours</div>
                                <div className="text-gray-300">24/7 Service Available</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gray-200">Quick Links</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            {link.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gray-200">Support</h4>
                        <ul className="space-y-4">
                            {supportLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            {link.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gray-200">Company</h4>
                        <ul className="space-y-4">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            {link.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gray-200">Legal</h4>
                        <ul className="space-y-4">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            {link.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Partner Saccos */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <Badge className="bg-gray-600/30 text-gray-200 mb-4">Our Partners</Badge>
                        <h4 className="text-2xl font-bold text-gray-200">Trusted Sacco Partners</h4>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {partnerSaccos.map((sacco, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-200 group cursor-pointer">
                                <div className={`w-16 h-16 bg-gradient-to-r ${sacco.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                                    <span className="text-white font-bold text-lg">{sacco.initials}</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                                        {sacco.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* App Download & Social */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {/* App Download */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8">
                        <div className="text-center md:text-left">
                            <Badge className="bg-gray-600/30 text-gray-200 mb-4">Mobile App</Badge>
                            <h4 className="text-2xl font-bold mb-6 text-gray-200">Download Our App</h4>
                            <p className="text-gray-300 mb-8">
                                Get the best experience with our mobile app. Book rides, track buses, and manage your trips on the go.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center justify-center group">
                                    <Smartphone className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                                    <div className="text-left">
                                        <div className="text-xs text-gray-400">Download on the</div>
                                        <div className="font-bold">App Store</div>
                                    </div>
                                </Button>
                                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center justify-center group">
                                    <Smartphone className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                                    <div className="text-left">
                                        <div className="text-xs text-gray-400">Get it on</div>
                                        <div className="font-bold">Google Play</div>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8">
                        <div className="text-center md:text-left">
                            <Badge className="bg-gray-600/30 text-gray-200 mb-4">Connect With Us</Badge>
                            <h4 className="text-2xl font-bold mb-6 text-gray-200">Follow Us</h4>
                            <p className="text-gray-300 mb-8">
                                Stay connected with us on social media for the latest updates, news, and exclusive offers.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { Icon: Facebook, label: 'Facebook' },
                                    { Icon: Twitter, label: 'Twitter' },
                                    { Icon: Instagram, label: 'Instagram' },
                                    { Icon: Linkedin, label: 'LinkedIn' },
                                    { Icon: Youtube, label: 'YouTube' }
                                ].map(({ Icon, label }, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-200 group"
                                    >
                                        <Icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                                            {label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-20">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-200">NTSA Certified</div>
                                <div className="text-sm text-gray-400">Safety Compliant</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                <Award className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-200">ISO Certified</div>
                                <div className="text-sm text-gray-400">Quality Standards</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                <Star className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-200">4.8/5 Rating</div>
                                <div className="text-sm text-gray-400">Customer Approved</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                <CheckCircle className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-200">Verified Business</div>
                                <div className="text-sm text-gray-400">Trusted Provider</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 lg:px-12 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Logo & Copyright */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">I</span>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-gray-200">ICML</div>
                                <div className="text-sm text-gray-400">© 2025 Inter Corridors Mobility Limited</div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="flex items-center gap-2">
                                <Globe className="h-5 w-5 text-gray-400" />
                                <span className="text-gray-300">Proudly serving Nairobi since 2018</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Heart className="h-5 w-5 text-gray-400" />
                                <span className="text-gray-300">Made with love in Kenya</span>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="flex items-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-400">🚌</span>
                                <span className="text-gray-300">100K+ Daily Passengers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-400">⭐</span>
                                <span className="text-gray-300">12K+ Reviews</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-400">🛡️</span>
                                <span className="text-gray-300">99.5% Safety</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;