// src/NavBar.jsx
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink and useLocation
import { Home, Info, Mail, Search, Menu, X, Package, Phone, Lightbulb } from 'lucide-react'; // Added Menu, X, Package, Phone, Lightbulb (for About)

export default function NavBar() {
  // We no longer need 'activeTab' state for highlighting, NavLink handles it.
  // But we might keep it if you have other logic tied to it. For this example, let's remove it for simplicity.
  // const [activeTab, setActiveTab] = useState(0); // Can be removed for highlighting, NavLink handles it.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useLocation hook to get current path for potential manual active styling if NavLink's isActive isn't enough
  const location = useLocation();

  const tabs = [
    // Add 'path' property to each tab object
    { id: 0, label: 'Home', icon: Home, path: '/' },
    { id: 1, label: 'Accessories', icon: Package, path: '/accessories' }, // Changed to Package icon
    { id: 2, label: 'Contact', icon: Phone, path: '/contact' }, // Changed ID and icon
    { id: 3, label: 'About', icon: Lightbulb, path: '/about' } // Changed ID and icon
    // Note: Re-ordered IDs for clarity and added path.
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // handleTabClick is now primarily for closing the mobile menu
  const handleTabClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className=" bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - This could also be a NavLink to Home */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Crochet Hub by Diya
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="relative bg-white/5 rounded-full p-1 backdrop-blur-sm">
                <div className="flex space-x-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <NavLink // <--- Changed from button to NavLink
                        key={tab.id}
                        to={tab.path} // <--- NavLink uses 'to' prop for the path
                        onClick={handleTabClick} // Only for closing mobile menu here
                        // NavLink provides an 'isActive' prop to its children render function
                        // We use it to apply the active styles
                        className={({ isActive }) => `relative px-6 py-3 rounded-full transition-all duration-300 ease-out flex items-center space-x-2 group ${
                          isActive
                            ? 'text-white shadow-lg' // Active tab styles
                            : 'text-white/70 hover:text-white/90' // Inactive tab styles
                        }`}
                      >
                        {/* Active tab background - Conditional rendering based on isActive */}
                        {({ isActive }) => ( // NavLink also passes isActive to its children
                          isActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg transform transition-transform duration-300 ease-out scale-100" />
                          )
                        )}
                        
                        {/* Tab content */}
                        <div className="relative z-10 flex items-center space-x-2">
                          <Icon 
                            size={18} 
                            className={`transition-transform duration-200 ${
                              location.pathname === tab.path ? 'scale-110' : 'group-hover:scale-105' // Using location.pathname for icon scale
                            }`} 
                          />
                          <span className="font-medium text-sm">{tab.label}</span>
                        </div>
                      </NavLink> // <--- End NavLink
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white/80 hover:text-white transition-colors duration-200 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white/5 backdrop-blur-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <NavLink // <--- Changed from button to NavLink
                  key={tab.id}
                  to={tab.path} // <--- NavLink uses 'to' prop
                  onClick={handleTabClick} // Only for closing mobile menu
                  className={({ isActive }) => `w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                </NavLink> // <--- End NavLink
              );
            })}
          </div>
        </div>
      </nav>
      {/* The style jsx block is likely for the content, which is now in App.jsx */}
      {/* You can remove this style block from NavBar.jsx if the animation is only for content */}
      {/* and put it in a global CSS file or the specific page component if needed. */}
      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}