import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar.js';
import Home from './Pages/Home.js';
import NotFound from './Pages/NotFound.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
