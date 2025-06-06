import AboutHero from "@/components/about/about-hero";
import OurStory from "@/components/about/our-story";
import MissionVision from "@/components/about/mission-vision";
import Leadership from "@/components/about/leadership";
import Partners from "@/components/about/partners";
import Fleet from "@/components/about/fleet";
import Safety from "@/components/about/safety";
import Community from "@/components/about/community";
import Footer from "@/components/homepage/footer";
import Navbar from "@/components/navbar";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-900">
            <div className="relative">
                {/* Dark background for navbar */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
                <Navbar />
            </div>
            <main>
                <AboutHero />
                <OurStory />
                <MissionVision />
                <Leadership />
                <Partners />
                <Fleet />
                <Safety />
                <Community />
                <Footer />
            </main>
        </div>
    );
}