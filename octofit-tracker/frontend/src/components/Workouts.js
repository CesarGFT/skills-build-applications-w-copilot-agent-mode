// octofit-tracker/frontend/src/components/Workouts.js
import React, { useEffect, useState } from 'react';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;
  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setWorkouts(data.results || data));
  }, [apiUrl]);
  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map((w, i) => (
          <li key={i}>{w.name || JSON.stringify(w)}</li>
        ))}
      </ul>
    </div>
  );
}
