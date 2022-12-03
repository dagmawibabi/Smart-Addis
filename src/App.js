import './App.css';
import { Header } from './components/header';
import { MVG } from './components/mvg';
import { NavBar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <MVG />
    </div>
  );
}

export default App;
