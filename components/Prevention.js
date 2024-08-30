import React from 'react';
import { Link } from 'react-router-dom';
import './Prevention.css';

const disasters = [
  { id: 1, name: 'Earthquake' },
  { id: 2, name: 'Flood' },
  { id: 3, name: 'Hurricane' },
  { id: 4, name: 'Wildfire' },
  // Add more disasters as needed
];

const Prevention = () => {
  return (
    <div className="prevention-resources">
      <h2>Select a Disaster to Learn About Prevention</h2>
      <ul>
        {disasters.map((disaster) => (
          <li key={disaster.id}>
            <Link to={`/prevention-resources/${disaster.id}`}>{disaster.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prevention;
