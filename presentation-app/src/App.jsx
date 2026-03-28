import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FaztyAcademyViewer from './courses/fazty-academy/FaztyAcademyViewer';
import SalesPsychologyViewer from './courses/sales-psychology/SalesPsychologyViewer';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/fazty-academy" element={<FaztyAcademyViewer />} />
        <Route path="/course/sales-psychology" element={<SalesPsychologyViewer />} />
      </Routes>
    </BrowserRouter>
  );
}
