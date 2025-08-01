import React from 'react';
import {   Mail } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {useEffect, useState } from 'react';
import { h1 } from 'framer-motion/client';


export default function Footer() {
 const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);



  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t  border-white/10 mt-16 py-8 md:py-12 text-white/70 text-sm sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 ">
        <div className="text-center md:text-left">


          <h3 className="text-lg text-center font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Crochet Hub by Diya
          </h3>
          <p className='text-center'>Handcrafted with love,bringing warmth and unique style to your everyday.</p>
          <p className='text-center'>&copy; {new Date().getUTCFullYear()} All rights reserved.</p>
          <p className='text-center'> Time: {time}</p>

        </div>
        {/* Link wala Section */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition-colors duration-200">Home</a></li>
            <li><a href="/about" className="hover:text-white transition-colors duration-200">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            <li><a href="/accessories" className="hover:text-white transition-colors duration-200">Accessories</a></li>
          </ul>
        </div>
        {/* social media wala Section */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-white mb-3">Connect With Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.instagram.com/crochet.hub.by.diya/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
              <FaInstagram size={24} />
            </a>            
            <a href="https://www.instagram.com/crochet.hub.by.diya/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
              <FaWhatsapp size={24} />
            </a>
            <a href="mailto:diyaluther623@gmail.com" className="hover:text-white transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}