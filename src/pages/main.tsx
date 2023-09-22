import React, { useState, useEffect } from 'react';

function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reviews, setReviews] = useState([]);
  const [sentimentOverview, setSentimentOverview] = useState('');

  useEffect(() => {
    // Simulate fetching reviews and sentiment overview when searchQuery, startDate, or endDate changes
    fetchData();
  }, [searchQuery, startDate, endDate]);

  const fetchData = () => {
    // Replace this URL with your actual backend API endpoint for web scraping
    const apiUrl = `/api/scrape-data?query=${searchQuery}&startDate=${startDate}&endDate=${endDate}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
        setSentimentOverview(data.sentimentOverview);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="text-center">
        <h1 className="text-3xl font-semibold">Sentiment Analysis</h1>
      </header>

      <main className="mt-8">
        <form onSubmit={handleSearch} className="mb-4">
          {/* ... (unchanged form elements) */}
        </form>

        <div className="overflow-y-scroll max-h-96">
          <ul className="space-y-4">
            {reviews.map((review) => (
              <li key={review.id}>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p>{review.text}</p>
                  <p className="mt-2 text-sm text-gray-600">
                    Sentiment: {review.sentiment}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <p className="text-lg font-semibold">Sentiment Overview</p>
          <p>{sentimentOverview}</p>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
