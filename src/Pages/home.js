import React from 'react'
import Header from '../components/header'
import Hero from '../components/Hero'
import Questions from '../components/Questions'
import KeyMetrics from '../components/KeyMetrics'
import LogoCarousel from '../components/LogoCarousel'
import Reviews from '../components/Reviews'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Slideshow from '../components/Slideshow'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Questions />
            <KeyMetrics />
            <LogoCarousel />
            <Reviews />
            <FAQ />
            <Slideshow/>
            <Footer />
        </div>
    )
}

export default Home