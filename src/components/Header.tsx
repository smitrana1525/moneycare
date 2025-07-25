import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ChevronDown, Download, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const investorCharterItems = [
    { name: 'Investor Charter Booking', type: 'pdf' },
    { name: 'Investor Charter – Depository', type: 'pdf' },
    { name: 'Investor Complaint', type: 'pdf' }
  ];

  const investorSelectionItems = [
    { name: 'SIBI Risk Disclosure', type: 'pdf' },
    { name: 'Most Important Terms & Conditions', type: 'pdf' },
    { name: 'Important Circular of Clients', type: 'pdf' },
    { name: 'Freezing or Blocking of Trading Account', type: 'pdf' },
    { name: 'Bank Details', type: 'pdf' }
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleDownload = (fileName: string) => {
    // Mock PDF download - in real implementation, these would be actual PDF files
    alert(`Downloading ${fileName}.pdf`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@moneycareindia.com" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <Mail size={14} />
              <span>info@moneycareindia.com</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-blue-200 transition-colors">Facebook</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-200 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white shadow-lg transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">Moneycare India</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About Us</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#downloads" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Downloads</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              
              {/* Investor Charter Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('charter')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  <span>Investor Charter</span>
                  <ChevronDown size={16} className={`transform transition-transform ${openDropdown === 'charter' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'charter' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50">
                    {investorCharterItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleDownload(item.name)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-2 text-sm"
                      >
                        <Download size={14} />
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a href="#bank-office" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Bank Office</a>

              {/* Investor Selection Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('selection')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  <span>Investor Selection</span>
                  <ChevronDown size={16} className={`transform transition-transform ${openDropdown === 'selection' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'selection' && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border z-50">
                    {investorSelectionItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleDownload(item.name)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-2 text-sm"
                      >
                        <Download size={14} />
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a 
                href="https://evoting.nsdl.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                <span>E-voting</span>
                <ExternalLink size={14} />
              </a>

              <a href="#account-opening" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Open Account</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                <a href="#downloads" className="text-gray-700 hover:text-blue-600 transition-colors">Downloads</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                <a href="#bank-office" className="text-gray-700 hover:text-blue-600 transition-colors">Bank Office</a>
                <a href="https://evoting.nsdl.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">E-voting</a>
                <a href="#account-opening" className="text-gray-700 hover:text-blue-600 transition-colors">Open Account</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;