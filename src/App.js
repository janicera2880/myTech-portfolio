import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
        <br />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
