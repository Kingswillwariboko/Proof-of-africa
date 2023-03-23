import './App.scss';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route 
        path="/"
        exact
        element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
