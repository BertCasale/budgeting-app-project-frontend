import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar.js';
import Home from './Pages/Home.js';
import NotFound from './Pages/NotFound.js'
import BudgetIndex from './Pages/BudgetIndex.js';
import Show from './Pages/Show.js';
import New from './Pages/New.js';
import Edit from './Pages/Edit.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/transactions" element={<BudgetIndex/>}/>
        <Route path="/transactions/:index" element={<Show/>}/>
        <Route path="/transactions/new" element={<New/>}/>
        <Route path="/transactions/:index/edit" element={<Edit/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
