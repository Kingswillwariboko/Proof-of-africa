import './App.scss';
import Carousel from './components/Carousel';
import Footer from './components/Footer/Footer';
import Form from './components/form/Form';
import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero"
import Info from './components/Info/Info';
import Modal from './components/Modal/Modal';
import { Element } from 'react-scroll';
import Tribe from './components/Tribe/Tribe';

function App() {
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
  );
}

export default App;
