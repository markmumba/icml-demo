import AboutHero from "@/components/about/about-hero";
import OurStory from "@/components/about/our-story";
import MissionVision from "@/components/about/mission-vision";
import Leadership from "@/components/about/leadership";
import Partners from "@/components/about/partners";
import Fleet from "@/components/about/fleet";
import Safety from "@/components/about/safety";
import Community from "@/components/about/community";
import Footer from "@/components/homepage/footer";

export default function About() {
    return (
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
    );
}