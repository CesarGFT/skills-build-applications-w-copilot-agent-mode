// octofit-tracker/frontend/src/components/Leaderboard.js
import React, { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setLeaderboard(data.results || data));
  }, [apiUrl]);
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
