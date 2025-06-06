import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Users,
    Linkedin,
    Mail,
    Phone,
    ArrowRight,
    Briefcase,
    GraduationCap
} from 'lucide-react';

const Leadership = () => {
    const leaders = [
        {
            name: "John Kamau",
            role: "Chief Executive Officer",
            image: "/about/leadership/ceo.svg",
            bio: "20+ years of experience in transport management and business development. Former executive at major transport companies.",
            expertise: ["Strategic Planning", "Business Development", "Team Leadership"],
            education: "MBA, University of Nairobi",
            contact: {
                email: "john.kamau@icml.co.ke",
                phone: "+254 700 000000",
                linkedin: "linkedin.com/in/johnkamau"
            }
        },
        {
            name: "Sarah Wanjiku",
            role: "Chief Operations Officer",
            image: "/about/leadership/coo.svg",
            bio: "15+ years in operations management with a focus on transport logistics and safety protocols.",
            expertise: ["Operations Management", "Safety Protocols", "Logistics"],
            education: "BSc. Transport Management, JKUAT",
            contact: {
                email: "sarah.wanjiku@icml.co.ke",
                phone: "+254 700 000001",
                linkedin: "linkedin.com/in/sarahwanjiku"
            }
        },
        {
            name: "David Ochieng",
            role: "Chief Technology Officer",
            image: "/about/leadership/cto.svg",
            bio: "Tech innovator with 12+ years experience in transport technology and digital solutions.",
            expertise: ["Technology Integration", "Digital Innovation", "System Architecture"],
            education: "MSc. Computer Science, Strathmore University",
            contact: {
                email: "david.ochieng@icml.co.ke",
                phone: "+254 700 000002",
                linkedin: "linkedin.com/in/davidochieng"
            }
        },
        {
            name: "Mary Njeri",
            role: "Head of Safety & Compliance",
            image: "/about/leadership/safety.svg",
            bio: "Certified safety professional with extensive experience in transport safety management.",
            expertise: ["Safety Management", "Compliance", "Risk Assessment"],
            education: "BSc. Safety Management, UoN",
            contact: {
                email: "mary.njeri@icml.co.ke",
                phone: "+254 700 000003",
                linkedin: "linkedin.com/in/marynjeri"
            }
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 mb-4">
                        <Users className="mr-2 h-4 w-4" />
                        Leadership
                    </Badge>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Meet Our Leadership Team
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Experienced professionals committed to transforming Nairobi&apos;s public transport
                    </p>
                </div>

                {/* Leadership Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
                    {leaders.map((leader, index) => (
                        <div key={index} className="group">
                            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                                {/* Image */}
                                <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700">
                                        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                                            {leader.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                                        <p className="text-gray-600">{leader.role}</p>
                                    </div>

                                    <p className="text-gray-600 text-sm">{leader.bio}</p>

                                    {/* Expertise */}
                                    <div className="space-y-2">
                                        <div className="flex items-center text-gray-600">
                                            <Briefcase className="h-4 w-4 mr-2" />
                                            <span className="text-sm font-medium">Expertise</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {leader.expertise.map((skill, i) => (
                                                <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Education */}
                                    <div className="flex items-center text-gray-600">
                                        <GraduationCap className="h-4 w-4 mr-2" />
                                        <span className="text-sm">{leader.education}</span>
                                    </div>

                                    {/* Contact */}
                                    <div className="pt-4 border-t border-gray-100">
                                        <div className="flex items-center justify-center space-x-4">
                                            <a href={`mailto:${leader.contact.email}`} className="text-gray-400 hover:text-gray-600 transition-colors">
                                                <Mail className="h-5 w-5" />
                                            </a>
                                            <a href={`tel:${leader.contact.phone}`} className="text-gray-400 hover:text-gray-600 transition-colors">
                                                <Phone className="h-5 w-5" />
                                            </a>
                                            <a href={leader.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                                                <Linkedin className="h-5 w-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Join Our Team
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Be part of our mission to transform public transportation in Nairobi&apos;s
                        </p>
                        <Button size="lg" className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white">
                            View Career Opportunities
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Leadership; 