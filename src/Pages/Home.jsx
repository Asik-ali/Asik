import React from 'react'
// import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Card from '../Components/Card/Card'
// import Newsletter from '../Components/Newsletter/Newsletter'
import Static from '../Components/Static/Static'
import Testimonials from '../Components/Testimonal/Testimonal'
import Feature from '../Components/Feature/Feature'
import Faq from '../Components/Faq/Faq'
// import Section from '../Components/Section/Section'
import Hero2 from '../Components/Hero/Hero2'
import Hero3 from '../Components/Hero/Hero3'
import Example from '../Components/Carousel/Carousel'
import Cards from '../Components/Card/Cards'
import PopupBanner from '../Components/Popup/Popup'
import Technology from '../Components/Technology/Technology'
import Support from '../Components/Support/Support'
import Modern from '../Components/Modern/Modern'
import { Outlet } from 'react-router-dom'


function Home() {
  return (
    <div >
    
      <Hero />
      <Modern/>
      <Technology/>
      <Support/>
      <Hero2 />
      <Card />
      <Static />
     
      <PopupBanner/>
     
      {/* <Example/> */}
      {/* <Hero3/> */}
      {/* <Newsletter /> */}
      {/* <Cards/>
     
     
      <Faq />
  
      <Feature />
     

      <Testimonials /> */}
    </div>
  )
}

export default Home