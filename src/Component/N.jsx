import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Info, Mail, Search, Menu, X, Package, Phone, Lightbulb } from 'lucide-react';

export default function N() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { id: 0, label: 'Home', icon: Home, path: '/' },
    { id: 1, label: 'Accessories', icon: Package, path: '/accessories' },
    { id: 2, label: 'Contact', icon: Phone, path: '/contact' },
    { id: 3, label: 'About', icon: Lightbulb, path: '/about' } 
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleTabClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className=" bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Crochet Hub by Diya
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="relative bg-white/5 rounded-full p-1 backdrop-blur-sm">
                <div className="flex space-x-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <NavLink 
                        key={tab.id}
                        to={tab.path}
                        onClick={handleTabClick} 
                        className={({ isActive }) => `relative px-6 py-3 rounded-full transition-all duration-300 ease-out flex items-center space-x-2 group ${
                          isActive
                            ? 'text-white shadow-lg'
                            : 'text-white/70 hover:text-white/90'
                        }`}
                      >
                        {({ isActive }) => (
                          isActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg transform transition-transform duration-300 ease-out scale-100" />
                          )
                        )}
                        <div className="relative z-10 flex items-center space-x-2">
                          <Icon 
                            size={18} 
                            className={`transition-transform duration-200 ${
                              location.pathname === tab.path ? 'scale-110' : 'group-hover:scale-105'
                            }`} 
                          />
                          <span className="font-medium text-sm">{tab.label}</span>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            </div>
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
        <div className={`md:hidden transition-all duration-300 ease-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white/5 backdrop-blur-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <NavLink
                  key={tab.id}
                  to={tab.path}
                  onClick={handleTabClick}
                  className={({ isActive }) => `w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
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