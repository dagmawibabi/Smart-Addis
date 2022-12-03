import './App.css';
import { NavBar } from './components/navbar';
import { Footer } from './components/footer';
import { HomePage } from './components/pages/homepage/homepage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EachPillar } from './components/pages/pillarPage/eachPillar';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pillar' element={<EachPillar />} />
        </Routes>
      </BrowserRouter>
      

      <Footer />
    </div>
  );
}

export default App;
