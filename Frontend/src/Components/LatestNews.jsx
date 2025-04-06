import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiExternalLink } from "react-icons/fi";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading   , setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Get current date and random past date (last 30 days)
        const toDate = new Date();
        const fromDate = new Date();
        fromDate.setDate(toDate.getDate() - 30);
        
        // Format dates for API
        const formatDate = (date) => date.toISOString().split('T')[0];
        
        // Random search term from tech topics
        const searchTerms = ['technology', 'ai', 'tesla', 'spacex', 'programming', 'react'];
        const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
        
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${randomTerm}&from=${formatDate(fromDate)}&to=${formatDate(toDate)}&sortBy=publishedAt&apiKey=3f83f71666f14b4fae3738d294fa3ecb`
        );
        
        // Shuffle articles and pick 3 random ones
        const shuffled = [...response.data.articles].sort(() => 0.5 - Math.random());
        setNews(shuffled.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-400"></div>
    </div>
  );

  if (error) return (
    <div className="text-center py-12 text-red-500">
      Error loading news: {error}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      {news.map((article, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          {article.urlToImage && (
            <img 
              src={article.urlToImage} 
              alt={article.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x200?text=No+Image';
              }}
            />
          )}
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2 text-gray-800">{article.title}</h3>
            <p className="text-gray-600 mb-4">
              {article.description?.substring(0, 100)}...
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-sky-600 hover:bg-sky-50 transition-colors"
              >
                Read More
                <FiExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestNews;