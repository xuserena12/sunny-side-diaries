import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyJournal from './pages/MyJournal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myjournal" element={<MyJournal />} />
      </Routes>
    </div>
  );
}

export default App;
