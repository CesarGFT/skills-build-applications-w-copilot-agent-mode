import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Workouts API:', apiUrl);
        console.log('Fetched workouts:', results);
      });
  }, [apiUrl]);

  return (
    <div className="card p-4">
      <h2 className="heading">Workouts</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-primary">
          <tr>
            <th>User</th>
            <th>Workout</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, idx) => (
            <tr key={idx}>
              <td>{workout.user}</td>
              <td>{workout.workout}</td>
              <td>{workout.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workouts;
