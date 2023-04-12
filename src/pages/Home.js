import React from 'react'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer/Footer'
import Form from '../components/form/Form'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Info from '../components/Info/Info'
import Tribe from '../components/Tribe/Tribe'

import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div className="App">
    <Header />
    <Hero />
    <Element name="tribe">
      <Tribe />
    </Element>

    <Element name="tribal-series">
      <Carousel />
    </Element>

    
   
      <Element name="features-section">
        <Info />
      </Element>

      <Element name="form">
        <Form />
      </Element>
    
    <Footer />
  </div>
  )
}

export default Home