// octofit-tracker/frontend/src/components/Leaderboard.js
import React, { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    fetch('/api/leaderboard/')
      .then(res => res.json())
      .then(data => setLeaderboard(data.results || data));
  }, []);
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((l, i) => (
          <li key={i}>{l.team_name || JSON.stringify(l)}: {l.score || ''}</li>
        ))}
      </ul>
    </div>
  );
}
