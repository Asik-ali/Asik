import React from 'react'
import PriceCard from '../Components/PriceCard/PriceCard'
import CourseHero from '../Components/CourseHero/CourseHero'
import PriceCardMobile from '../Components/PriceCard/PriceCardMobile'
import Nios from '../Components/PriceCard/Nios'
import NiosMobile from '../Components/PriceCard/NiosMobile'
import StateBoard from '../Components/PriceCard/StateBoard'
import StateBoardMobile from '../Components/PriceCard/StateBoardMobile'


const Courses = () => {
  return (
    <div>
      <CourseHero/>
       <PriceCard/>
       <PriceCardMobile/>
       <Nios/>
       <NiosMobile/>
       <StateBoard/>
       <StateBoardMobile/>
        
        
    </div>
  )
}

export default Courses