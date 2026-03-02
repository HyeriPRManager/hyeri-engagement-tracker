import React from 'react';

const Dashboard = () => {
  // Dummy data for the example
  const celebrityPosts = [
    { platform: 'Instagram', post: 'Post 1 from Instagram', likes: 150, comments: 10 },
    { platform: 'Twitter', post: 'Tweet 1 from Twitter', likes: 100, retweets: 20 },
    { platform: 'Facebook', post: 'Post 1 from Facebook', likes: 200, comments: 15 },
    { platform: 'Threads', post: 'Post 1 from Threads', likes: 50, comments: 5 },
    { platform: 'TikTok', post: 'Post 1 from TikTok', likes: 300, shares: 50 },
  ];

  return (
    <div>
      <h1>Celebrity Posts Dashboard</h1>
      <div>
        {celebrityPosts.map((post, index) => (
          <div key={index}>
            <h2>{post.platform}</h2>
            <p>{post.post}</p>
            <p>Likes: {post.likes}</p>
            {post.comments && <p>Comments: {post.comments}</p>}
            {post.retweets && <p>Retweets: {post.retweets}</p>}
            {post.shares && <p>Shares: {post.shares}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;