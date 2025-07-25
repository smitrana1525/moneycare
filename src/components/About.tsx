import React from 'react';
import { Award, Target, Heart, Handshake } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 animate-on-scroll">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="About Moneycare India"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-lg">About Us</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
                Your Trusted Financial Partner Since 2008
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Moneycare India has been guiding individuals and businesses toward financial success for over 15 years. 
              We believe in building long-term relationships based on trust, transparency, and exceptional service.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of certified financial experts provides personalized solutions for mutual funds, insurance, 
              loans, stock market investments, tax planning, and retirement planning.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Expert Guidance</h3>
                  <p className="text-gray-600 text-sm">Certified financial advisors with deep market knowledge</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Goal-Oriented</h3>
                  <p className="text-gray-600 text-sm">Customized strategies to achieve your financial goals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Client-Centric</h3>
                  <p className="text-gray-600 text-sm">Your financial well-being is our top priority</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Handshake className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Transparent</h3>
                  <p className="text-gray-600 text-sm">Clear communication and honest advice always</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Our Services
              </a>
              <a 
                href="#contact" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;