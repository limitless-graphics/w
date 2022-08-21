import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='services' element={<Services />} />
        <Route path='about-us' element={<AboutUs />} />
      </Routes>
    </HashRouter>
  );
}


export default App;
