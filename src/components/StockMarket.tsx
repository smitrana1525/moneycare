import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, BarChart3, RefreshCw } from 'lucide-react';

interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

const StockMarket = () => {
  const [stocks, setStocks] = useState<StockData[]>([
    { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3425.50, change: 45.25, changePercent: 1.34 },
    { symbol: 'INFY', name: 'Infosys Limited', price: 1547.80, change: -12.40, changePercent: -0.79 },
    { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2456.75, change: 28.90, changePercent: 1.19 }
  ]);
  
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const generateRandomChange = () => {
    return (Math.random() - 0.5) * 100; // Random change between -50 and +50
  };

  const updateStockPrices = () => {
    setIsRefreshing(true);
    
    setTimeout(() => {
      setStocks(prevStocks => 
        prevStocks.map(stock => {
          const change = generateRandomChange();
          const newPrice = Math.max(stock.price + change, 100); // Ensure price doesn't go below 100
          const changePercent = (change / stock.price) * 100;
          
          return {
            ...stock,
            price: parseFloat(newPrice.toFixed(2)),
            change: parseFloat(change.toFixed(2)),
            changePercent: parseFloat(changePercent.toFixed(2))
          };
        })
      );
      
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(updateStockPrices, 60000); // Update every 60 seconds
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <section id="stock-market" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BarChart3 className="text-blue-400" size={32} />
            <span className="text-blue-400 font-semibold text-lg">Live Stock Prices</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Market at a Glance
          </h2>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
            <button
              onClick={updateStockPrices}
              disabled={isRefreshing}
              className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors disabled:opacity-50"
            >
              <RefreshCw size={16} className={isRefreshing ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stocks.map((stock, index) => (
            <div 
              key={stock.symbol}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-on-scroll"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{stock.symbol}</h3>
                  <p className="text-gray-400 text-sm">{stock.name}</p>
                </div>
                <div className={`p-2 rounded-full ${stock.change >= 0 ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                  {stock.change >= 0 ? (
                    <TrendingUp className="text-green-500" size={24} />
                  ) : (
                    <TrendingDown className="text-red-500" size={24} />
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">
                  {formatCurrency(stock.price)}
                </div>
                
                <div className={`flex items-center space-x-2 ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  <span className="font-semibold">
                    {stock.change >= 0 ? '+' : ''}{formatCurrency(stock.change)}
                  </span>
                  <span className="text-sm">
                    ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-400 mb-6">
            Get real-time market analysis and investment recommendations from our experts
          </p>
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Get Market Analysis
          </a>
        </div>
      </div>
    </section>
  );
};

export default StockMarket;