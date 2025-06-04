import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'; // Example social icons

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10 mt-16 py-8 md:py-12 text-white/70 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Company Info / Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Crochet Hub by Diya
          </h3>
          <p>&copy; {currentYear} All rights reserved.</p>
          <p className="text-white/50">Designed with Tailwind CSS & React.</p>
        </div>

        {/* Navigation / Links Section */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition-colors duration-200">Home</a></li>
            <li><a href="/about" className="hover:text-white transition-colors duration-200">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            <li><a href="/accessories" className="hover:text-white transition-colors duration-200">Accessories</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-white mb-3">Connect With Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
              <Twitter size={24} />
            </a>
            <a href="mailto:example@example.com" className="hover:text-white transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}