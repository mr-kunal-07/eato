import AboutBook from '@/components/LandingPage/AboutBook'
import AuthorsSection from '@/components/LandingPage/AuthorsSection'
import Footer from '@/components/LandingPage/Footer'
import Hero from '@/components/LandingPage/Hero'
import Testimonials from '@/components/LandingPage/Testimonials'
import WomenStoriesGrid from '@/components/LandingPage/WomenStoriesGrid'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <AboutBook />
      <AuthorsSection />
      <WomenStoriesGrid />
      <Testimonials />
      <Footer />

    </div>
  )
}

export default page