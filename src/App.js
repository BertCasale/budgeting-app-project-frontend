import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar.js';
import Home from './Pages/Home.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>
    </div>
  );
}

export default App;
