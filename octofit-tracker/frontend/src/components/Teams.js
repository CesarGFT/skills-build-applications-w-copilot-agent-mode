// octofit-tracker/frontend/src/components/Teams.js
import React, { useEffect, useState } from 'react';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch('/api/teams/')
      .then(res => res.json())
      .then(data => setTeams(data.results || data));
  }, []);
  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map((t, i) => (
          <li key={i}>{t.name || JSON.stringify(t)}</li>
        ))}
      </ul>
    </div>
  );
}
