import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { MVG } from './components/mvg';
import { NavBar } from './components/navbar';
import { Pillars } from './components/pillars';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <MVG />
      <Pillars />
      <Footer />
    </div>
  );
}

export default App;
