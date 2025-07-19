import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ThumbsUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";

// You can move this to a separate file later
const formatDate = (timestamp) =>
  new Date(timestamp).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

const FeedItem = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetchFeeds();
  }, []);

  const fetchFeeds = async () => {
    try {
      const response = await axios.get("/api/feeds"); // Update base URL as needed
      setFeeds(response.data);
    } catch (error) {
      console.error("Error fetching feeds:", error);
    }
  };

  const handleLike = async (feedId) => {
    try {
      await axios.post(`/api/feeds/${feedId}/like`, {
        userId: 1, // Replace with actual user ID from context or session
      });
      fetchFeeds(); // Refresh like count
    } catch (error) {
      console.error("Like error:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-indigo-700 text-center">
        Activity Feed
      </h2>

      <div className="space-y-6">
        {feeds.map((feed) => (
          <Card
            key={feed.id}
            className="shadow-lg border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${feed.userName}`}
                    alt={feed.userName}
                  />
                  <AvatarFallback>
                    {feed.userName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {feed.userName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {feed.userEmail}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {formatDate(feed.createdAt)}
                    </p>
                  </div>

                  <p className="mt-3 text-gray-700 text-sm">{feed.content}</p>

                  {/* Media rendering */}
                  {feed.imageUrl && (
                    <img
                      src={feed.imageUrl}
                      alt="feed"
                      className="rounded-xl mt-4 max-h-80 object-cover w-full border"
                    />
                  )}
                  {feed.videoUrl && (
                    <video
                      controls
                      className="rounded-xl mt-4 max-h-80 w-full"
                    >
                      <source src={feed.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}

                  {/* Interactive Stats */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex gap-5 text-sm text-gray-600">
                      <Button
                        onClick={() => handleLike(feed.id)}
                        variant="ghost"
                        className="flex items-center gap-2 hover:text-indigo-600"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        Like
                      </Button>

                      <Button
                        variant="ghost"
                        className="flex items-center gap-2 hover:text-indigo-600"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Comment
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      className="text-indigo-700 border-indigo-200 hover:bg-indigo-50"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeedItem;
