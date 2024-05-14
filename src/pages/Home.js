import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Testimonial from '../component/Testimonial'
import TrendTab from '../component/TrendTab'
import MarketTable from '../component/MarketTable'
import InstructionSection from '../component/InstructionSection'
import AboutSection from '../component/AboutSection'
import Footer from '../component/Footer'

function Home() {
  return (
    <>
    <Navbar />
    <main>
    <article>
       <Header />
       <Testimonial />
       <TrendTab />
       <MarketTable />
       <InstructionSection />
       <AboutSection />
       <AboutSection />
       <Footer />

    </article>
  </main>
    
    </>
  
  )
}

export default Home
