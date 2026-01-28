// octofit-tracker/frontend/src/components/Users.js
import React, { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setUsers(data.results || data));
  }, [apiUrl]);
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.username || u.name || JSON.stringify(u)}</li>
        ))}
      </ul>
    </div>
  );
}
