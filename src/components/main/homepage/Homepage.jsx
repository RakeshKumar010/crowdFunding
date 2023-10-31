import React from 'react'
import Header from './Header'
import TrdFund from './TrdFund'
import Story from './Story'
import Playstore from './Playstore'

const Homepage = () => {
  return (
    <div className='lg:px-36'>
    <Header/>
    <TrdFund/>
    <Story/>
    <Playstore/>
    
    </div>
  )
}

export default Homepage