import React from 'react';
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3943746/pexels-photo-3943746.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-on-scroll">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Moneycare India</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              Simplifying Investments, Insurance, Loans & More with expert financial guidance you can trust
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#services" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Explore Services</span>
                <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Consultation
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-blue-200">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-blue-200">Happy Clients</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-blue-200">Trusted Service</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-12 animate-on-scroll">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Financial Planning"
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-green-600">₹500Cr+</div>
                <div className="text-sm text-gray-600">Assets Under Management</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;