import React, { useState, useEffect } from 'react';

const EngagementMetrics = () => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [shares, setShares] = useState(0);

    useEffect(() => {
        const fetchMetrics = () => {
            // Replace with real API call to fetch metrics
            const realTimeData = {
                likes: Math.floor(Math.random() * 1000),
                comments: Math.floor(Math.random() * 500),
                shares: Math.floor(Math.random() * 300)
            };
            setLikes(realTimeData.likes);
            setComments(realTimeData.comments);
            setShares(realTimeData.shares);
        };
        const interval = setInterval(fetchMetrics, 5000); // fetch every 5 seconds
        fetchMetrics(); // initial fetch
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Engagement Metrics</h2>
            <p>Likes: {likes}</p>
            <p>Comments: {comments}</p>
            <p>Shares: {shares}</p>
        </div>
    );
};

export default EngagementMetrics;
