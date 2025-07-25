import React from 'react';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const News = () => {
  const news = [
    {
      title: 'Market Outlook 2024: Key Investment Opportunities',
      excerpt: 'Our expert analysis reveals promising sectors and investment strategies for the upcoming year.',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Market Analysis'
    },
    {
      title: 'New Tax Benefits for Mutual Fund Investments',
      excerpt: 'Latest government announcements bring additional tax advantages for mutual fund investors.',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Tax Planning'
    },
    {
      title: 'Digital Gold vs Physical Gold: Which is Better?',
      excerpt: 'Compare the pros and cons of digital gold investments versus traditional physical gold.',
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Investment Guide'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-blue-600 font-semibold text-lg">Financial News</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-6">
            Latest Market Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest financial news, market trends, and investment insights from our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((article, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 animate-on-scroll"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{formatDate(article.date)}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors group">
                  <span>Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <span>View All News</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;