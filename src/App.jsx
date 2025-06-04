import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'; // Your NavBar component
import Footer from './Footer'; // <--- Import the new Footer component

// Import your page components
import HomePage from './pages/HomePage';
import AccessoriesPage from './pages/AccessoriesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      {/* The main app container with the background gradient */}
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* NavBar is always at the top */}
        <NavBar />

        {/* Main content area - This will grow to fill available space */}
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Add more routes here */}
          </Routes>
        </main>

        {/* Footer is always at the bottom */}
        <Footer /> {/* <--- Render the Footer component here */}
      </div>
    </Router>
  );
}