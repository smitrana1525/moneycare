import React, { useState } from 'react';
import { Download, FileText, Shield, AlertCircle, Building } from 'lucide-react';

const Downloads = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const documents = [
    {
      title: 'Investor Charter Booking',
      category: 'charter',
      icon: FileText,
      description: 'Complete guide to investor charter booking process'
    },
    {
      title: 'Investor Charter – Depository',
      category: 'charter',
      icon: Building,
      description: 'Depository services and investor rights charter'
    },
    {
      title: 'Investor Complaint Form',
      category: 'charter',
      icon: AlertCircle,
      description: 'Lodge complaints and grievances easily'
    },
    {
      title: 'SIBI Risk Disclosure',
      category: 'disclosure',
      icon: Shield,
      description: 'Important risk disclosures for stock market investments'
    },
    {
      title: 'Terms & Conditions',
      category: 'legal',
      icon: FileText,
      description: 'Most important terms and conditions for clients'
    },
    {
      title: 'Important Circular of Clients',
      category: 'circular',
      icon: FileText,
      description: 'Latest circulars and updates for our clients'
    },
    {
      title: 'Trading Account Guidelines',
      category: 'legal',
      icon: AlertCircle,
      description: 'Guidelines for freezing or blocking trading accounts'
    },
    {
      title: 'Bank Details Document',
      category: 'legal',
      icon: Building,
      description: 'Authorized bank details for transactions'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Documents', count: documents.length },
    { id: 'charter', name: 'Investor Charter', count: documents.filter(d => d.category === 'charter').length },
    { id: 'disclosure', name: 'Disclosures', count: documents.filter(d => d.category === 'disclosure').length },
    { id: 'legal', name: 'Legal Documents', count: documents.filter(d => d.category === 'legal').length },
    { id: 'circular', name: 'Circulars', count: documents.filter(d => d.category === 'circular').length }
  ];

  const filteredDocuments = activeCategory === 'all' 
    ? documents 
    : documents.filter(doc => doc.category === activeCategory);

  const handleDownload = (title: string) => {
    // Mock download - in real implementation, these would link to actual PDF files
    alert(`Downloading ${title}.pdf`);
  };

  return (
    <section id="downloads" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-blue-600 font-semibold text-lg">Downloads</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
            Important Documents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access all important documents, forms, and disclosures required for your investment journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredDocuments.map((doc, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-on-scroll"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <doc.icon className="text-blue-600" size={24} />
                </div>
                <button
                  onClick={() => handleDownload(doc.title)}
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Download size={20} />
                </button>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {doc.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {doc.description}
              </p>
              
              <button
                onClick={() => handleDownload(doc.title)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Download size={16} />
                <span>Download PDF</span>
              </button>
            </div>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText className="mx-auto text-gray-300 mb-4" size={64} />
            <p className="text-gray-500 text-lg">No documents found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Downloads;