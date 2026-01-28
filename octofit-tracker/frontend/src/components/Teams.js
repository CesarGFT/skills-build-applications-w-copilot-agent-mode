// octofit-tracker/frontend/src/components/Teams.js
import React, { useEffect, useState } from 'react';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;
  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setTeams(data.results || data));
  }, [apiUrl]);
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
