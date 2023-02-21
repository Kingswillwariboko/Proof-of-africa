import './App.scss';
import Carousel from './components/Carousel';
import Form from './components/form/Form';
import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero"
import Info from './components/Info/Info';
import Tribe from './components/Tribe/Tribe';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Tribe />
      <Carousel />
      <Info />
      <Form />
    </div>
  );
}

export default App;
