import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Academic from './pages/Academic';
import FunPage from './pages/FunPage';
import FunList from './pages/FunList';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/fun" element={<FunPage />} />
        <Route path="/fun/list" element={<FunList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
