import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Board from './pages/Board';

function App() {

  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
