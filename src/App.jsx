import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About'; // Import other pages as needed
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes for other pages if needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
