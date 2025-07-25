import React from 'react';
import { TrendingUp, Shield, Home, BarChart3, Calculator, PiggyBank } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Mutual Fund',
      description: 'Diversified investment options with professional fund management for optimal returns.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Comprehensive life and health insurance plans to secure your family\'s future.',
      color: 'green'
    },
    {
      icon: Home,
      title: 'Loans',
      description: 'Competitive home, personal, and business loans with attractive interest rates.',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Stock Market',
      description: 'Expert stock market analysis and trading guidance for informed investment decisions.',
      color: 'red'
    },
    {
      icon: Calculator,
      title: 'Tax Planning',
      description: 'Strategic tax planning to minimize liabilities and maximize your savings.',
      color: 'orange'
    },
    {
      icon: PiggyBank,
      title: 'Retirement Planning',
      description: 'Build a secure retirement corpus with systematic investment planning.',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white';
      case 'green': return 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white';
      case 'purple': return 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white';
      case 'red': return 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white';
      case 'orange': return 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white';
      case 'teal': return 'bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white';
      default: return 'bg-gray-100 text-gray-600 group-hover:bg-gray-600 group-hover:text-white';
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-blue-600 font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From investments to insurance, we provide end-to-end financial services 
            tailored to your unique needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(service.color)}`}>
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-2 transition-colors">
                <span>Learn More</span>
                <TrendingUp size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;