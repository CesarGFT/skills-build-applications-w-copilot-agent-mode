// octofit-tracker/frontend/src/components/Activities.js
import React, { useEffect, useState } from 'react';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch('/api/activities/')
      .then(res => res.json())
      .then(data => setActivities(data.results || data));
  }, []);
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
