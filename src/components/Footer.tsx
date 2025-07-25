import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Downloads', href: '#downloads' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Mutual Funds', href: '#services' },
    { name: 'Insurance', href: '#services' },
    { name: 'Loans', href: '#services' },
    { name: 'Stock Market', href: '#services' },
    { name: 'Tax Planning', href: '#services' },
    { name: 'Retirement Planning', href: '#services' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Disclaimer', href: '#' },
    { name: 'Investor Charter', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-2xl font-bold">Moneycare India</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted financial partner since 2008, providing comprehensive investment solutions and expert guidance for a secure financial future.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">123 Financial District, Mumbai 400001</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-green-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-red-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">info@moneycareindia.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 group"
                    >
                      <ArrowRight size={14} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href} 
                      className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 group"
                    >
                      <ArrowRight size={14} className="text-green-400 group-hover:translate-x-1 transition-transform" />
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Subscribe to our newsletter for the latest market insights and financial tips.
              </p>
              <div className="flex flex-col space-y-3 mb-6">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
              
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Moneycare India. All rights reserved. | Designed with ❤️ for your financial success.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <span className="text-white text-sm font-bold">t</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <span className="text-white text-sm font-bold">in</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;