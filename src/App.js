import './App.css';
import { NavBar } from './components/navbar';
import { Footer } from './components/footer';
import { HomePage } from './components/pages/homepage/homepage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EachPillar } from './components/pages/pillarPage/eachPillar';
import About from './components/pages/About/index';
import SmartHubs from './components/pages/Smarthubs/index';
import Sectors from './components/pages/Sectors/index';
import Vendors from './components/pages/Vendors/index';
import Survey from './components/pages/Survey/index';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pillar' element={<EachPillar />} />
          <Route path='/about' element={<About />} />
          <Route path='/smarthubs' element={<SmartHubs />} />
          <Route path='/sectors' element={<Sectors />} />
          <Route path='/vendors' element={<Vendors />} />
          <Route path='/survey' element={<Survey />} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
