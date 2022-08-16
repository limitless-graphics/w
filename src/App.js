import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OrderPage from './pages/OrderPage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='order-design' element={<OrderPage />} />
        <Route path='services' element={<Services />} />
        <Route path='about-us' element={<AboutUs />} />
      </Routes>
    </HashRouter>
  );
}


export default App;