import React, { useEffect, useState } from 'react';
import { getFeeds } from '../api/feedService';
import FeedItem from './FeedItem';
import { Loader2, AlertTriangle } from 'lucide-react';

function FeedList() {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getFeeds()
      .then(res => {
        setFeeds(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Something went wrong while fetching feeds.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Latest Feeds</h2>

      {/* Loading State */}
      {loading && (
        <div className="space-y-4">
          {[1, 2, 3].map(n => (
            <div key={n} className="animate-pulse bg-gray-100 p-4 rounded-xl shadow">
              <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-red-600 flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5" />
          {error}
        </div>
      )}

      {/* Empty State */}
      {!loading && feeds.length === 0 && (
        <div className="text-gray-500 text-center py-10 italic">
          No feeds available. Be the first to post something!
        </div>
      )}

      {/* Feed Items */}
      {!loading && feeds.length > 0 && (
        <div className="space-y-6">
          {feeds.map(feed => (
            <FeedItem key={feed.id} feed={feed} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FeedList;
