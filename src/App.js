import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Hash from './pages/Hash';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/crypto' element={<Crypto />}></Route>
        <Route path='/hash' eleelement={<Hash />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
