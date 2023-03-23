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
    <Tribe />
    <Carousel />
    <Element name="features-section">
      <Info />
    </Element>
    <Form />
    <Footer />
    {/* <Modal /> */}
  </div>
  )
}

export default Home