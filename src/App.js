import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AboutUs from './components/pages/About';
import Pricing from './components/pages/Pricing';
import ContactUs from './components/pages/ContactUs';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TermsandConditions from './components/pages/TermsandConditions';
import HelpPage from './components/pages/HelpPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms-and-conditions" element={<TermsandConditions />} />
          <Route path="/help-page" element={<HelpPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
