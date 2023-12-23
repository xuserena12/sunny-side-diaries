import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Journal from './pages/Journal';
import History from './pages/History';
import Egg from './pages/Egg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Journal/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/egg" element={<Egg/>} />
      </Routes>
    </div>
  );
}

export default App;
