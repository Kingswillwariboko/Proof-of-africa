import './App.scss';
import Carousel from './components/Carousel';
import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero"
import Tribe from './components/Tribe/Tribe';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Tribe />
      <Carousel />
    </div>
  );
}

export default App;
