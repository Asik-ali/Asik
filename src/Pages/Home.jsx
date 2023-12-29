import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Card from '../Components/Card/Card'
import Newsletter from '../Components/Newsletter/Newsletter'
import Static from '../Components/Static/Static'
import Testimonials from '../Components/Testimonal/Testimonal'
import Feature from '../Components/Feature/Feature'
import Faq from '../Components/Faq/Faq'
import Footer from '../Components/Footer/Footer'
import Section from '../Components/Section/Section'
import Hero2 from '../Components/Hero/Hero2'
import Hero3 from '../Components/Hero/Hero3'
import Example from '../Components/Carousel/Carousel'
import Cards from '../Components/Card/Cards'


function Home() {
  return (
    <div >
      <Navbar />
     
      <Hero />
      <Hero2 />
      <Card />
      <Hero3/>
      <Newsletter />
      <Cards/>
      <Static />
      <Section />
      <Feature />
      <Example/>
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home