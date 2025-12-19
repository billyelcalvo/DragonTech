import { Header } from '../components/Header.jsx'
import { HeroSection } from '../components/HeroSection.jsx'
import { FeaturesSection } from '../components/FeaturesSection.jsx'
import { StatsSection } from '../components/StatsSection.jsx'
import { Footer } from '../components/Footer.jsx'

export function HomePage() {
    return (
        <>
            <Header />
            <HeroSection />
            <FeaturesSection />
            <StatsSection />
            <Footer />
        </>
    )
}