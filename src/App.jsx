import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Academic from './pages/Academic';
import FunPage from './pages/FunPage';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/fun" element={<FunPage />} />
        <Route path="/fun/list" element={<FunPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
