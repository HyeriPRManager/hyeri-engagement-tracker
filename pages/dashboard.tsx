import React, { useState, useEffect } from 'react';
import { getRealTimeMetrics, getEngagementTips } from '../lib/api';  // add /lib/

const Dashboard = () => {
    const [metrics, setMetrics] = useState({ likes: 0, comments: 0, shares: 0 });
    const [tips, setTips] = useState([]);
    const [platform, setPlatform] = useState('all');

   useEffect(() => {
  // Hardcoded placeholder metrics to fix build (update these manually later)
  setMetrics({
    likes: 0,      // ← change to real number, e.g. 250000
    comments: 0,
    shares: 0,
    // add views: 0, if your state includes it
  });
}, [platform]);
    // TODO: Later fix getRealTimeMetrics to return proper object { likes, comments, shares, ... }

    // Hardcoded metrics (update numbers here manually when checking posts)
useEffect(() => {
  setMetrics({
    likes: 0,      // e.g. change to 450000 after viewing Instagram post
    comments: 0,
    shares: 0,
    // views: 0,   // add if your state has views
  });
}, [platform]);   // keep if platform is a variable

// Hardcoded tips/engagement suggestions (or empty array if not needed)
useEffect(() => {
  setTips([
    "Tip: Comment meaningfully to boost algorithm",
    "Tip: Share with friends in fan groups",
    "Tip: Use relevant hashtags like #PFW2026",
    // add/remove as you like, or set to [] if you don't want tips displayed
 
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <select onChange={(e) => setPlatform(e.target.value)} className="mb-4 p-2 border rounded">
                <option value="all">All Platforms</option>
                <option value="facebook">Facebook</option>
                <option value="twitter">Twitter</option>
                <option value="instagram">Instagram</option>
            </select>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded shadow">
                    <h2 className="font-semibold">Likes: {metrics.likes}</h2>
                    <h2 className="font-semibold">Comments: {metrics.comments}</h2>
                    <h2 className="font-semibold">Shares: {metrics.shares}</h2>
                </div>
                {/* Post cards can be added here */}
            </div>
            <h2 className="mt-4 font-bold">Engagement Tips</h2>
            <ul className="list-disc pl-5">
                {tips.map((tip, index) => (
                    <li key={index} className="mb-2">{tip}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
