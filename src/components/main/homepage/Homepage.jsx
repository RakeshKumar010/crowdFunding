import React from 'react'
import Header from './Header'
import TrdFund from './TrdFund'
import Story from './Story'
import AppStore from '../../global/AppStore'

const Homepage = () => {
  return (
    <div className='lg:px-36'>
    <Header/>
    <TrdFund/>
    <Story/>
    <AppStore/>
    
    </div>
  )
}

export default Homepage