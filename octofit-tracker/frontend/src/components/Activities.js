// octofit-tracker/frontend/src/components/Activities.js
import React, { useEffect, useState } from 'react';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;
  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setActivities(data.results || data));
  }, [apiUrl]);
  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((a, i) => (
          <li key={i}>{a.name || JSON.stringify(a)}</li>
        ))}
      </ul>
    </div>
  );
}
